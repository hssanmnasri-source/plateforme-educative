// 📁 src/services/progress.service.js
// ========================================
// Service pour suivre la progression des étudiants

import {
    collection,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
    arrayUnion
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

class ProgressService {
    /**
     * Marquer une leçon comme complétée
     */
    async markLessonComplete(userId, courseId, lessonId) {
        try {
            const progressRef = doc(db, 'progress', `${userId}_${courseId}`);
            const progressDoc = await getDoc(progressRef);

            if (progressDoc.exists()) {
                // Update existing progress
                await updateDoc(progressRef, {
                    completedLessons: arrayUnion(lessonId),
                    lastAccessed: serverTimestamp(),
                    updatedAt: serverTimestamp()
                });
            } else {
                // Create new progress document
                await setDoc(progressRef, {
                    userId,
                    courseId,
                    completedLessons: [lessonId],
                    startedAt: serverTimestamp(),
                    lastAccessed: serverTimestamp(),
                    updatedAt: serverTimestamp()
                });
            }

            return { success: true };
        } catch (error) {
            console.error('Error marking lesson complete:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Récupérer la progression d'un utilisateur pour un cours
     */
    async getCourseProgress(userId, courseId) {
        try {
            const progressRef = doc(db, 'progress', `${userId}_${courseId}`);
            const progressDoc = await getDoc(progressRef);

            if (!progressDoc.exists()) {
                return {
                    success: true,
                    progress: {
                        completedLessons: [],
                        percentage: 0
                    }
                };
            }

            const data = progressDoc.data();
            return {
                success: true,
                progress: {
                    ...data,
                    completedLessons: data.completedLessons || []
                }
            };
        } catch (error) {
            console.error('Error fetching progress:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Calculer le pourcentage de progression
     */
    calculateProgressPercentage(completedLessons, totalLessons) {
        if (totalLessons === 0) return 0;
        return Math.round((completedLessons / totalLessons) * 100);
    }

    /**
     * Vérifier si une leçon est complétée
     */
    isLessonCompleted(lessonId, completedLessons = []) {
        return completedLessons.includes(lessonId);
    }
}

export default new ProgressService();
