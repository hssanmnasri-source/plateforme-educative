// 📁 src/services/exercise.service.js
// ========================================
// Exercise management and progress tracking service

import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp,
    setDoc
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

class ExerciseService {
    /**
     * Create a new exercise
     */
    async createExercise(exerciseData) {
        try {
            const exercise = {
                ...exerciseData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'exercises'), exercise);
            console.log('✅ Exercise created:', docRef.id);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('❌ Error creating exercise:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get exercises by course ID
     */
    async getExercisesByCourse(courseId) {
        try {
            const q = query(
                collection(db, 'exercises'),
                where('courseId', '==', courseId),
                orderBy('order', 'asc')
            );

            const snapshot = await getDocs(q);
            const exercises = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, exercises };
        } catch (error) {
            console.error('❌ Error fetching exercises:', error);
            return { success: false, error: error.message, exercises: [] };
        }
    }

    /**
     * Get single exercise by ID
     */
    async getExerciseById(exerciseId) {
        try {
            const docRef = doc(db, 'exercises', exerciseId);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                return { success: false, error: 'Exercise not found' };
            }

            return {
                success: true,
                exercise: { id: docSnap.id, ...docSnap.data() }
            };
        } catch (error) {
            console.error('❌ Error fetching exercise:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Update exercise
     */
    async updateExercise(exerciseId, updates) {
        try {
            const exerciseRef = doc(db, 'exercises', exerciseId);
            await updateDoc(exerciseRef, {
                ...updates,
                updatedAt: serverTimestamp()
            });

            console.log('✅ Exercise updated:', exerciseId);
            return { success: true };
        } catch (error) {
            console.error('❌ Error updating exercise:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Delete exercise
     */
    async deleteExercise(exerciseId) {
        try {
            await deleteDoc(doc(db, 'exercises', exerciseId));
            console.log('✅ Exercise deleted:', exerciseId);
            return { success: true };
        } catch (error) {
            console.error('❌ Error deleting exercise:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Track level completion for an exercise
     */
    async trackLevelCompletion(userId, exerciseId, courseId, level) {
        try {
            const progressId = `${userId}_${exerciseId}`;
            const progressRef = doc(db, 'exercise-progress', progressId);

            // Get current progress
            const progressSnap = await getDoc(progressRef);
            let completedLevels = [];

            if (progressSnap.exists()) {
                completedLevels = progressSnap.data().completedLevels || [];
            }

            // Add level if not already completed
            if (!completedLevels.includes(level)) {
                completedLevels.push(level);
                completedLevels.sort((a, b) => a - b);
            }

            // Save progress
            await setDoc(progressRef, {
                userId,
                exerciseId,
                courseId,
                completedLevels,
                currentLevel: Math.max(...completedLevels),
                lastUpdated: serverTimestamp()
            }, { merge: true });

            console.log('✅ Exercise level completed:', { exerciseId, level });
            return { success: true, completedLevels };
        } catch (error) {
            console.error('❌ Error tracking exercise progress:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get exercise progress for a user
     */
    async getExerciseProgress(userId, exerciseId) {
        try {
            const progressId = `${userId}_${exerciseId}`;
            const progressRef = doc(db, 'exercise-progress', progressId);
            const progressSnap = await getDoc(progressRef);

            if (!progressSnap.exists()) {
                return {
                    success: true,
                    progress: {
                        completedLevels: [],
                        currentLevel: -1
                    }
                };
            }

            return {
                success: true,
                progress: progressSnap.data()
            };
        } catch (error) {
            console.error('❌ Error fetching exercise progress:', error);
            return {
                success: false,
                error: error.message,
                progress: { completedLevels: [], currentLevel: -1 }
            };
        }
    }

    /**
     * Get all exercise progress for a course
     */
    async getCourseExerciseProgress(userId, courseId) {
        try {
            const q = query(
                collection(db, 'exercise-progress'),
                where('userId', '==', userId),
                where('courseId', '==', courseId)
            );

            const snapshot = await getDocs(q);
            const progress = {};

            snapshot.docs.forEach(doc => {
                const data = doc.data();
                progress[data.exerciseId] = data;
            });

            return { success: true, progress };
        } catch (error) {
            console.error('❌ Error fetching course exercise progress:', error);
            return { success: false, error: error.message, progress: {} };
        }
    }
}

export default new ExerciseService();
