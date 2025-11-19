// 📁 frontend/src/pages/PaymentSuccess.jsx
// ========================================

import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Loader, ArrowRight } from 'lucide-react';
import paymeeService from '../services/paymee.service';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const MAX_ATTEMPTS = 10; // Maximum 10 tentatives (30 secondes)
  const timeoutRef = useRef(null);
  const isStoppedRef = useRef(false);
  const attemptsRef = useRef(0);

  const rawPaymentId = searchParams.get('payment_id');
  const paymentId = rawPaymentId?.split('?')[0];

  const verifyPayment = useCallback(async () => {
    // Vérifier si on doit arrêter
    if (isStoppedRef.current) {
      return;
    }

    if (!paymentId) {
      setError('ID de paiement manquant');
      setVerifying(false);
      isStoppedRef.current = true;
      return;
    }

    // Vérifier d'abord si on a atteint la limite AVANT de continuer
    attemptsRef.current += 1;
    const currentAttempt = attemptsRef.current;
    console.log(`🔄 Tentative ${currentAttempt}/${MAX_ATTEMPTS}`);
    
    setAttempts(currentAttempt);
    
    if (currentAttempt > MAX_ATTEMPTS) {
      console.log('⛔ Limite de tentatives atteinte (dépassée)');
      setError('Le paiement est toujours en attente après plusieurs tentatives. Veuillez vérifier votre email ou contacter le support.');
      setVerifying(false);
      isStoppedRef.current = true;
      return;
    }

    // Vérifier à nouveau après la mise à jour de l'état
    if (isStoppedRef.current) {
      return;
    }

    // Attendre un peu pour laisser le temps au webhook de traiter
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Vérifier une dernière fois avant l'appel API
    if (isStoppedRef.current) {
      return;
    }

    const result = await paymeeService.verifyPayment(paymentId);

    console.log('📊 Résultat vérification:', result);

    // Vérifier si on doit arrêter après l'appel API
    if (isStoppedRef.current) {
      return;
    }

    if (result.success) {
      setPaymentData(result.data);
      
      if (result.status === 'completed') {
        // Paiement réussi
        console.log('✅ Paiement confirmé !');
        setVerifying(false);
        isStoppedRef.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else if (result.status === 'pending') {
        // Vérifier le nombre de tentatives avant de continuer
        if (attemptsRef.current >= MAX_ATTEMPTS) {
          console.log('⛔ Limite de tentatives atteinte (pending)');
          setError('Le paiement est toujours en attente après plusieurs tentatives. Veuillez vérifier votre email ou contacter le support.');
          setVerifying(false);
          isStoppedRef.current = true;
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        } else if (attemptsRef.current >= 3) {
          // Si on a fait plusieurs tentatives, essayer de synchroniser avec le backend
          console.log('🔄 Tentative de synchronisation avec le backend...');
          try {
            // VITE_WEBHOOK_URL peut être l'URL complète du webhook (ex: https://backend.com/api/paymee/webhook)
            // On doit extraire la base URL pour construire l'URL de sync
            let backendUrl = import.meta.env.VITE_BACKEND_URL || 
              import.meta.env.VITE_WEBHOOK_URL || 
              (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? 'http://localhost:3001' 
                : null);
            
            // Si VITE_WEBHOOK_URL contient un chemin, extraire juste la base URL
            if (backendUrl && backendUrl.includes('/')) {
              try {
                const url = new URL(backendUrl);
                // Si c'est un chemin complet, prendre juste l'origine
                if (url.pathname !== '/' && !backendUrl.includes('/sync-payment')) {
                  backendUrl = `${url.origin}`;
                }
              } catch (e) {
                // Si ce n'est pas une URL valide, utiliser tel quel
                console.warn('⚠️ URL backend invalide, utilisation directe:', backendUrl);
              }
            }
            
            if (backendUrl) {
              // Nettoyer l'URL (enlever le slash final si présent)
              const cleanBackendUrl = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
              
              // Essayer d'abord avec l'URL de base + /sync-payment
              let syncUrl = `${cleanBackendUrl}/sync-payment`;
              
              // Si VITE_WEBHOOK_URL contient un chemin (ex: /api/paymee/webhook), 
              // essayer aussi avec ce chemin + /sync-payment comme fallback
              const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
              let fallbackUrl = null;
              if (webhookUrl && webhookUrl.includes('/') && webhookUrl !== cleanBackendUrl) {
                try {
                  const url = new URL(webhookUrl);
                  if (url.pathname && url.pathname !== '/') {
                    // Extraire le chemin du webhook (ex: /api/paymee/webhook)
                    const webhookPath = url.pathname.endsWith('/') 
                      ? url.pathname.slice(0, -1) 
                      : url.pathname;
                    // Construire l'URL de sync avec le même chemin
                    fallbackUrl = `${url.origin}${webhookPath}/sync-payment`;
                  }
                } catch (e) {
                  // Ignorer les erreurs d'URL
                }
              }
              
              console.log('🔗 URL backend pour sync:', syncUrl);
              if (fallbackUrl) {
                console.log('🔗 URL fallback pour sync:', fallbackUrl);
              }
              
              // Fonction pour essayer une URL
              const trySync = (url) => {
                return fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ paymentId })
                });
              };
              
              // Essayer d'abord l'URL principale, puis le fallback si disponible
              const syncPromise = fallbackUrl 
                ? trySync(syncUrl).catch(() => {
                    console.log('⚠️ Première tentative échouée, essai avec URL fallback...');
                    return trySync(fallbackUrl);
                  })
                : trySync(syncUrl);
              
              syncPromise
              .then(syncResponse => {
                if (!syncResponse.ok) {
                  console.error('❌ Erreur HTTP sync:', syncResponse.status, syncResponse.statusText);
                  return null;
                }
                return syncResponse.json();
              })
              .then(syncResult => {
                if (syncResult && syncResult.success) {
                  console.log('✅ Paiement synchronisé, rechargement...');
                  // Recharger pour vérifier à nouveau
                  setTimeout(() => window.location.reload(), 1000);
                  isStoppedRef.current = true;
                } else {
                  console.warn('⚠️ Synchronisation échouée:', syncResult);
                  if (!isStoppedRef.current && attemptsRef.current < MAX_ATTEMPTS) {
                    // Si la synchronisation n'a pas fonctionné, continuer les tentatives
                    console.log('⏳ Paiement toujours en attente, nouvelle tentative dans 3s...');
                    timeoutRef.current = setTimeout(verifyPayment, 3000);
                  }
                }
              })
              .catch(syncErr => {
                console.error('❌ Erreur synchronisation:', syncErr);
                console.error('   Type:', syncErr.name);
                console.error('   Message:', syncErr.message);
                if (!isStoppedRef.current && attemptsRef.current < MAX_ATTEMPTS) {
                  console.log('⏳ Paiement toujours en attente, nouvelle tentative dans 3s...');
                  timeoutRef.current = setTimeout(verifyPayment, 3000);
                }
              });
            } else {
              // Pas de backend URL, continuer les tentatives
              if (!isStoppedRef.current && attemptsRef.current < MAX_ATTEMPTS) {
                console.log('⏳ Paiement toujours en attente, nouvelle tentative dans 3s...');
                timeoutRef.current = setTimeout(verifyPayment, 3000);
              }
            }
          } catch (syncErr) {
            console.warn('⚠️ Erreur synchronisation:', syncErr);
            if (!isStoppedRef.current && attemptsRef.current < MAX_ATTEMPTS) {
              console.log('⏳ Paiement toujours en attente, nouvelle tentative dans 3s...');
              timeoutRef.current = setTimeout(verifyPayment, 3000);
            }
          }
        } else {
          // Toujours en attente, réessayer
          console.log('⏳ Paiement toujours en attente, nouvelle tentative dans 3s...');
          timeoutRef.current = setTimeout(verifyPayment, 3000);
        }
      } else if (result.status === 'failed') {
        setError('Le paiement a échoué');
        setVerifying(false);
        isStoppedRef.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else {
        // Statut inconnu, réessayer si on n'a pas atteint la limite
        if (attemptsRef.current >= MAX_ATTEMPTS) {
          setError('Le paiement a un statut inconnu. Veuillez contacter le support.');
          setVerifying(false);
          isStoppedRef.current = true;
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        } else {
          console.log('❓ Statut inconnu:', result.status, '- Nouvelle tentative...');
          timeoutRef.current = setTimeout(verifyPayment, 3000);
        }
      }
    } else {
      console.error('❌ Erreur vérification:', result.error);
      setError(result.error || 'Erreur lors de la vérification du paiement');
      setVerifying(false);
      isStoppedRef.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [paymentId, MAX_ATTEMPTS]);

  useEffect(() => {
    // Réinitialiser les refs quand le paymentId change
    isStoppedRef.current = false;
    attemptsRef.current = 0;
    setAttempts(0);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (paymentId) {
      console.log('🔍 Vérification du paiement:', paymentId);
      verifyPayment();
    } else {
      setError('ID de paiement manquant');
      setVerifying(false);
      isStoppedRef.current = true;
    }

    // Cleanup: arrêter les timeouts quand le composant se démonte
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      isStoppedRef.current = true;
    };
  }, [paymentId, verifyPayment]);

  if (verifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <Loader className="w-16 h-16 animate-spin text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Vérification du paiement...
          </h2>
          <p className="text-gray-600 mb-2">
            Veuillez patienter pendant que nous confirmons votre paiement
          </p>
          {attempts > 0 && (
            <p className="text-sm text-gray-500">
              Tentative {attempts}/{MAX_ATTEMPTS}...
            </p>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Erreur de paiement
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/courses')}
            className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Retour aux cours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Paiement réussi ! 🎉
        </h1>
        
        <p className="text-gray-600 mb-6">
          Votre paiement de <strong>{paymentData?.amount} TND</strong> a été confirmé avec succès.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-600 mb-1">Référence :</p>
          <p className="font-mono text-sm text-gray-800">{paymentData?.paymeeTransactionId}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/my-courses')}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium"
          >
            Accéder à mes cours
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => navigate('/courses')}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Découvrir d'autres cours
          </button>
        </div>
      </div>
    </div>
  );
}

