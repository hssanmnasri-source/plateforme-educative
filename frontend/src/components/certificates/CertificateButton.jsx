// 📁 src/components/certificates/CertificateButton.jsx
// ========================================
// Button to generate and download course completion certificate

import { useState } from 'react';
import { Award, Download, Loader } from 'lucide-react';
import certificateService from '../../services/certificate.service';
import { useAuth } from '../../contexts/AuthContext';

export default function CertificateButton({ courseId, courseName, isCompleted }) {
    const { currentUser, userProfile } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDownload = async () => {
        if (!isCompleted) {
            setError('Vous devez compléter 100% du cours pour obtenir le certificat');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const studentName = userProfile?.displayName || currentUser?.displayName || 'Étudiant';

            const result = await certificateService.generateAndDownload(
                currentUser.uid,
                courseId,
                courseName,
                studentName
            );

            if (!result.success) {
                setError(result.error || 'Erreur lors de la génération du certificat');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isCompleted) {
        return null; // Don't show button if course not completed
    }

    return (
        <div>
            <button
                onClick={handleDownload}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Génération...
                    </>
                ) : (
                    <>
                        <Award className="w-5 h-5" />
                        Télécharger le Certificat
                    </>
                )}
            </button>

            {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
            )}
        </div>
    );
}
