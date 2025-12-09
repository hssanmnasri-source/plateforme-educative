// 📁 src/services/certificate.service.js
// ========================================
// Service for certificate generation and management

import { jsPDF } from 'jspdf';
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase.config';
import progressService from './progress.service';
import quizService from './quiz.service';
import exerciseService from './exercise.service';

class CertificateService {
    /**
     * Check if user has completed 100% of a course
     */
    async checkCourseCompletion(userId, courseId) {
        try {
            const progress = await progressService.getUserProgress(userId, courseId);

            if (!progress.success) {
                return { success: false, completed: false };
            }

            const { completedLessons = [], completedQuizzes = [], completedExercises = [] } = progress.progress;

            // Get total counts (you'll need to pass these or fetch them)
            // For now, we'll consider it complete if all three arrays have items
            const hasLessons = completedLessons.length > 0;
            const hasQuizzes = completedQuizzes.length > 0;
            const hasExercises = completedExercises.length > 0;

            const isComplete = hasLessons && hasQuizzes && hasExercises;

            return {
                success: true,
                completed: isComplete,
                stats: {
                    lessonsCompleted: completedLessons.length,
                    quizzesCompleted: completedQuizzes.length,
                    exercisesCompleted: completedExercises.length
                }
            };
        } catch (error) {
            console.error('❌ Error checking course completion:', error);
            return { success: false, error: error.message, completed: false };
        }
    }

    /**
     * Calculate average quiz score for a course
     */
    async calculateAverageQuizScore(userId, courseId) {
        try {
            const progress = await progressService.getUserProgress(userId, courseId);

            if (!progress.success || !progress.progress.quizScores) {
                return { success: true, averageScore: 0 };
            }

            const scores = Object.values(progress.progress.quizScores);

            if (scores.length === 0) {
                return { success: true, averageScore: 0 };
            }

            const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

            return {
                success: true,
                averageScore: Math.round(average),
                totalQuizzes: scores.length
            };
        } catch (error) {
            console.error('❌ Error calculating average quiz score:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Determine certificate type based on average score
     */
    determineCertificateType(averageScore) {
        if (averageScore >= 90) return 'excellence';
        if (averageScore >= 75) return 'mention';
        if (averageScore >= 60) return 'achievement';
        return 'participation';
    }

    /**
     * Get certificate type label in French
     */
    getCertificateTypeLabel(type) {
        const labels = {
            excellence: "d'Excellence",
            mention: "Avec Mention",
            achievement: "d'Achèvement",
            participation: "de Participation"
        };
        return labels[type] || labels.participation;
    }

    /**
     * Get certificate color scheme
     */
    getCertificateColors(type) {
        const colors = {
            excellence: { primary: [255, 215, 0], secondary: [255, 235, 100] }, // Gold
            mention: { primary: [192, 192, 192], secondary: [220, 220, 220] },  // Silver
            achievement: { primary: [74, 144, 226], secondary: [150, 190, 240] }, // Blue
            participation: { primary: [34, 197, 94], secondary: [134, 239, 172] } // Green
        };
        return colors[type] || colors.participation;
    }

    /**
     * Generate certificate PDF
     */
    async generateCertificatePDF(certificateData) {
        const { studentName, courseName, certificateType, averageScore, completionDate } = certificateData;

        // Create PDF in landscape A4 format
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const colors = this.getCertificateColors(certificateType);
        const typeLabel = this.getCertificateTypeLabel(certificateType);

        // Border
        doc.setLineWidth(3);
        doc.setDrawColor(...colors.primary);
        doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

        doc.setLineWidth(1);
        doc.setDrawColor(...colors.secondary);
        doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

        // Title
        doc.setFontSize(40);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('CERTIFICAT', pageWidth / 2, 40, { align: 'center' });

        // Certificate Type
        doc.setFontSize(28);
        doc.setTextColor(...colors.primary);
        doc.text(typeLabel, pageWidth / 2, 55, { align: 'center' });

        // Divider
        doc.setLineWidth(0.5);
        doc.setDrawColor(...colors.primary);
        doc.line(80, 60, pageWidth - 80, 60);

        // Body text
        doc.setFontSize(14);
        doc.setTextColor(60, 60, 60);
        doc.setFont('helvetica', 'normal');
        doc.text('Ce certificat est décerné à', pageWidth / 2, 75, { align: 'center' });

        // Student Name
        doc.setFontSize(32);
        doc.setFont('times', 'bolditalic');
        doc.setTextColor(0, 0, 0);
        doc.text(studentName, pageWidth / 2, 90, { align: 'center' });

        // Achievement text
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        doc.text('Pour avoir complété avec succès le cours', pageWidth / 2, 105, { align: 'center' });

        // Course Name
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...colors.primary);
        doc.text(courseName, pageWidth / 2, 120, { align: 'center' });

        // Score
        if (averageScore > 0) {
            doc.setFontSize(14);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 60);
            doc.text(`Score moyen: ${averageScore}%`, pageWidth / 2, 135, { align: 'center' });
        }

        // Date
        doc.setFontSize(12);
        const dateStr = new Date(completionDate).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        doc.text(`Délivré le ${dateStr}`, pageWidth / 2, 150, { align: 'center' });

        // Signature lines
        const leftX = pageWidth / 3;
        const rightX = (pageWidth / 3) * 2;
        const signatureY = pageHeight - 40;

        doc.setLineWidth(0.5);
        doc.setDrawColor(100, 100, 100);
        doc.line(leftX - 30, signatureY, leftX + 30, signatureY);
        doc.line(rightX - 30, signatureY, rightX + 30, signatureY);

        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.text('Instructeur', leftX, signatureY + 7, { align: 'center' });
        doc.text('Directeur', rightX, signatureY + 7, { align: 'center' });

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('Plateforme Éducative - www.e-learning.com', pageWidth / 2, pageHeight - 15, { align: 'center' });

        return doc;
    }

    /**
     * Save certificate to Firestore
     */
    async saveCertificate(userId, courseId, certificateData) {
        try {
            const certRef = doc(db, 'certificates', `${userId}_${courseId}`);

            const data = {
                userId,
                courseId,
                ...certificateData,
                generatedAt: Timestamp.now()
            };

            await setDoc(certRef, data);

            console.log('✅ Certificate saved:', certRef.id);
            return { success: true, certificateId: certRef.id };
        } catch (error) {
            console.error('❌ Error saving certificate:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get certificate for a specific course
     */
    async getCertificate(userId, courseId) {
        try {
            const certRef = doc(db, 'certificates', `${userId}_${courseId}`);
            const certSnap = await getDoc(certRef);

            if (certSnap.exists()) {
                return {
                    success: true,
                    certificate: { id: certSnap.id, ...certSnap.data() }
                };
            }

            return { success: true, certificate: null };
        } catch (error) {
            console.error('❌ Error getting certificate:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get all certificates for a user
     */
    async getUserCertificates(userId) {
        try {
            const q = query(
                collection(db, 'certificates'),
                where('userId', '==', userId),
                orderBy('generatedAt', 'desc')
            );

            const snapshot = await getDocs(q);
            const certificates = [];

            snapshot.forEach(doc => {
                certificates.push({ id: doc.id, ...doc.data() });
            });

            return { success: true, certificates };
        } catch (error) {
            console.error('❌ Error getting user certificates:', error);
            return { success: false, error: error.message, certificates: [] };
        }
    }

    /**
     * Generate and download certificate
     */
    async generateAndDownload(userId, courseId, courseName, studentName) {
        try {
            // Check if certificate already exists
            const existing = await this.getCertificate(userId, courseId);

            if (existing.success && existing.certificate) {
                // Certificate exists, regenerate PDF and download
                const pdf = await this.generateCertificatePDF(existing.certificate);
                pdf.save(`Certificat_${courseName.replace(/\s+/g, '_')}.pdf`);
                return { success: true, existing: true };
            }

            // Check completion
            const completion = await this.checkCourseCompletion(userId, courseId);

            if (!completion.completed) {
                return {
                    success: false,
                    error: 'Vous devez compléter le cours avant de recevoir le certificat'
                };
            }

            // Calculate average score
            const scoreResult = await this.calculateAverageQuizScore(userId, courseId);
            const averageScore = scoreResult.averageScore || 0;

            // Determine certificate type
            const certificateType = this.determineCertificateType(averageScore);

            // Create certificate data
            const certificateData = {
                studentName,
                courseName,
                certificateType,
                averageScore,
                completionDate: new Date().toISOString()
            };

            // Generate PDF
            const pdf = await this.generateCertificatePDF(certificateData);

            // Save to Firestore
            await this.saveCertificate(userId, courseId, certificateData);

            // Download
            pdf.save(`Certificat_${courseName.replace(/\s+/g, '_')}.pdf`);

            return { success: true, certificateType };
        } catch (error) {
            console.error('❌ Error generating certificate:', error);
            return { success: false, error: error.message };
        }
    }
}

export default new CertificateService();
