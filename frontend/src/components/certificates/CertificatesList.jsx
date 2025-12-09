// 📁 src/components/certificates/CertificatesList.jsx
// ========================================
// Display list of user's earned certificates

import { useState, useEffect } from 'react';
import { Award, Download, Loader, Calendar } from 'lucide-react';
import certificateService from '../../services/certificate.service';
import { useAuth } from '../../contexts/AuthContext';

export default function CertificatesList() {
    const { currentUser } = useAuth();
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(null);

    useEffect(() => {
        loadCertificates();
    }, [currentUser]);

    const loadCertificates = async () => {
        if (!currentUser) return;

        setLoading(true);
        const result = await certificateService.getUserCertificates(currentUser.uid);

        if (result.success) {
            setCertificates(result.certificates);
        }

        setLoading(false);
    };

    const handleDownload = async (cert) => {
        setDownloading(cert.id);

        try {
            const pdf = await certificateService.generateCertificatePDF(cert);
            pdf.save(`Certificat_${cert.courseName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error downloading certificate:', error);
        } finally {
            setDownloading(null);
        }
    };

    const getCertificateIcon = (type) => {
        const icons = {
            excellence: '🏆',
            mention: '🥇',
            achievement: '📜',
            participation: '✅'
        };
        return icons[type] || '📜';
    };

    const getCertificateColor = (type) => {
        const colors = {
            excellence: 'from-yellow-500 to-orange-500',
            mention: 'from-gray-400 to-gray-500',
            achievement: 'from-blue-500 to-blue-600',
            participation: 'from-green-500 to-green-600'
        };
        return colors[type] || colors.participation;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-green-500" />
            </div>
        );
    }

    if (certificates.length === 0) {
        return (
            <div className="text-center py-12">
                <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Aucun certificat pour le moment
                </h3>
                <p className="text-gray-600">
                    Complétez vos cours pour obtenir des certificats !
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mes Certificats ({certificates.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                        {/* Header with gradient */}
                        <div className={`bg-gradient-to-r ${getCertificateColor(cert.certificateType)} p-6 text-white`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-4xl">{getCertificateIcon(cert.certificateType)}</span>
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">
                                Certificat {certificateService.getCertificateTypeLabel(cert.certificateType)}
                            </h3>
                            <p className="text-sm opacity-90">
                                {cert.studentName}
                            </p>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">
                                {cert.courseName}
                            </h4>

                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(cert.completionDate).toLocaleDateString('fr-FR')}
                                </div>
                                {cert.averageScore > 0 && (
                                    <div className="flex items-center gap-1">
                                        <Award className="w-4 h-4" />
                                        Score: {cert.averageScore}%
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => handleDownload(cert)}
                                disabled={downloading === cert.id}
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {downloading === cert.id ? (
                                    <>
                                        <Loader className="w-4 h-4 animate-spin" />
                                        Téléchargement...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-4 h-4" />
                                        Télécharger PDF
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
