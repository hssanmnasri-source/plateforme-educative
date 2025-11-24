// 📁 src/services/lesson.service.js
// ========================================
// Service pour la gestion des leçons et modules

import {
    collection,
    addDoc,
    updateDoc,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

class LessonService {
    /**
     * Créer un module pour un cours
     */
    async createModule(courseId, moduleData) {
        try {
            const module = {
                courseId,
                ...moduleData,
                order: moduleData.order || 0,
                createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'modules'), module);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating module:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Créer une leçon dans un module
     */
    async createLesson(moduleId, lessonData) {
        try {
            const lesson = {
                moduleId,
                ...lessonData,
                order: lessonData.order || 0,
                createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'lessons'), lesson);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating lesson:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Récupérer tous les modules d'un cours
     */
    async getModulesByCourse(courseId) {
        try {
            const q = query(
                collection(db, 'modules'),
                where('courseId', '==', courseId),
                orderBy('order', 'asc')
            );

            const snapshot = await getDocs(q);
            const modules = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, modules };
        } catch (error) {
            console.error('Error fetching modules:', error);
            return { success: false, error: error.message, modules: [] };
        }
    }

    /**
     * Récupérer toutes les leçons d'un module
     */
    async getLessonsByModule(moduleId) {
        try {
            const q = query(
                collection(db, 'lessons'),
                where('moduleId', '==', moduleId),
                orderBy('order', 'asc')
            );

            const snapshot = await getDocs(q);
            const lessons = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, lessons };
        } catch (error) {
            console.error('Error fetching lessons:', error);
            return { success: false, error: error.message, lessons: [] };
        }
    }

    /**
     * Récupérer une leçon par ID
     */
    async getLessonById(lessonId) {
        try {
            const lessonRef = doc(db, 'lessons', lessonId);
            const lessonDoc = await getDoc(lessonRef);

            if (!lessonDoc.exists()) {
                return { success: false, error: 'Leçon introuvable' };
            }

            return {
                success: true,
                lesson: { id: lessonDoc.id, ...lessonDoc.data() }
            };
        } catch (error) {
            console.error('Error fetching lesson:', error);
            return { success: false, error: error.message };
        }
    }
}

export default new LessonService();
