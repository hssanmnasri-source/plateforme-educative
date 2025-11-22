import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Chrome, AlertCircle } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  
  const { login, loginWithGoogle, error, setError, userProfile } = useAuth(); // ← AJOUTER userProfile ici
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      // Attendre que le profil soit chargé
      setTimeout(() => {
        // Vérifier le rôle après le login
        if (result.user) {
          // Le userProfile sera chargé par AuthContext
          // On vérifie après un court délai
          const checkProfile = setInterval(() => {
            if (userProfile) {
              clearInterval(checkProfile);
              if (userProfile.role === 'admin') {
                navigate('/admin', { replace: true });
              } else {
                navigate(from, { replace: true });
              }
            }
          }, 100);
          
          // Timeout après 3 secondes
          setTimeout(() => {
            clearInterval(checkProfile);
            navigate(from, { replace: true });
          }, 3000);
        } else {
          navigate(from, { replace: true });
        }
      }, 500);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const result = await loginWithGoogle();
    
    if (result.success) {
      setTimeout(() => {
        if (result.user) {
          const checkProfile = setInterval(() => {
            if (userProfile) {
              clearInterval(checkProfile);
              if (userProfile.role === 'admin') {
                navigate('/admin', { replace: true });
              } else {
                navigate(from, { replace: true });
              }
            }
          }, 100);
          
          setTimeout(() => {
            clearInterval(checkProfile);
            navigate(from, { replace: true });
          }, 3000);
        } else {
          navigate(from, { replace: true });
        }
      }, 500);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Bon retour !</h1>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 mb-6"
        >
          <Chrome className="w-5 h-5" />
          Continuer avec Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Ou avec email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-green-500 hover:text-green-600"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50 font-medium"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-green-500 hover:text-green-600 font-medium">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}