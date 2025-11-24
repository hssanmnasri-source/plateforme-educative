// 📁 src/services/course.service.js
// ========================================
// Service pour la gestion des cours (CRUD)

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
    limit,
    startAfter
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase.config';

class CourseService {
    /**
     * Créer un nouveau cours
     */
    async createCourse(courseData, thumbnailFile) {
        try {
            // 1. Upload thumbnail si fourni
            let thumbnailUrl = null;
            if (thumbnailFile) {
                thumbnailUrl = await this.uploadThumbnail(thumbnailFile);
            }

            // 2. Préparer les données du cours
            const course = {
                ...courseData,
                thumbnail: thumbnailUrl,
                enrolledCount: 0,
                status: 'draft', // draft | published | archived
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            // 3. Créer le document dans Firestore
            const docRef = await addDoc(collection(db, 'courses'), course);

            console.log('✅ Cours créé:', docRef.id);
            return { success: true, id: docRef.id, course };
        } catch (error) {
            console.error('❌ Erreur création cours:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Mettre à jour un cours existant
     */
    async updateCourse(courseId, courseData, thumbnailFile) {
        try {
            const courseRef = doc(db, 'courses', courseId);

            // Upload nouvelle thumbnail si fournie
            let updates = { ...courseData };
            if (thumbnailFile) {
                updates.thumbnail = await this.uploadThumbnail(thumbnailFile);
            }

            updates.updatedAt = serverTimestamp();

            await updateDoc(courseRef, updates);

            console.log('✅ Cours mis à jour:', courseId);
            return { success: true };
        } catch (error) {
            console.error('❌ Erreur mise à jour cours:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Supprimer un cours (soft delete)
     */
    async deleteCourse(courseId) {
        try {
            const courseRef = doc(db, 'courses', courseId);
            await updateDoc(courseRef, {
                status: 'archived',
                archivedAt: serverTimestamp()
            });

            console.log('✅ Cours archivé:', courseId);
            return { success: true };
        } catch (error) {
            console.error('❌ Erreur suppression cours:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Récupérer un cours par ID
     */
    async getCourseById(courseId) {
        try {
            const courseRef = doc(db, 'courses', courseId);
            const courseDoc = await getDoc(courseRef);

            if (!courseDoc.exists()) {
                return { success: false, error: 'Cours introuvable' };
            }

            return {
                success: true,
                course: { id: courseDoc.id, ...courseDoc.data() }
            };
        } catch (error) {
            console.error('❌ Erreur récupération cours:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Récupérer tous les cours avec filtres et pagination
     */
    async getCourses(filters = {}) {
        try {
            let q = collection(db, 'courses');
            const constraints = [];

            // Filtres
            if (filters.category) {
                constraints.push(where('category', '==', filters.category));
            }
            if (filters.status) {
                constraints.push(where('status', '==', filters.status));
            } else {
                // Par défaut, ne pas afficher les cours archivés
                constraints.push(where('status', '!=', 'archived'));
            }
            if (filters.level) {
                constraints.push(where('level', '==', filters.level));
            }

            // Tri
            constraints.push(orderBy('createdAt', 'desc'));

            // Pagination
            if (filters.limit) {
                constraints.push(limit(filters.limit));
            }
            if (filters.startAfter) {
                constraints.push(startAfter(filters.startAfter));
            }

            q = query(q, ...constraints);
            const snapshot = await getDocs(q);

            const courses = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, courses };
        } catch (error) {
            console.error('❌ Erreur récupération cours:', error);
            return { success: false, error: error.message, courses: [] };
        }
    }

    /**
     * Publier un cours (changer status de draft à published)
     */
    async publishCourse(courseId) {
        try {
            const courseRef = doc(db, 'courses', courseId);
            await updateDoc(courseRef, {
                status: 'published',
                publishedAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });

            console.log('✅ Cours publié:', courseId);
            return { success: true };
        } catch (error) {
            console.error('❌ Erreur publication cours:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Upload thumbnail vers Firebase Storage
     */
    async uploadThumbnail(file) {
        try {
            const filename = `thumbnails/${Date.now()}_${file.name}`;
            const storageRef = ref(storage, filename);

            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);

            console.log('✅ Thumbnail uploadée:', url);
            return url;
        } catch (error) {
            console.error('❌ Erreur upload thumbnail:', error);
            throw error;
        }
    }

    /**
     * Dupliquer un cours
     */
    async duplicateCourse(courseId) {
        try {
            const { success, course } = await this.getCourseById(courseId);
            if (!success) return { success: false, error: 'Cours introuvable' };

            // Retirer l'ID et modifier le titre
            const newCourse = {
                ...course,
                title: `${course.title} (Copie)`,
                status: 'draft',
                enrolledCount: 0
            };
            delete newCourse.id;

            const result = await this.createCourse(newCourse, null);
            return result;
        } catch (error) {
            console.error('❌ Erreur duplication cours:', error);
            return { success: false, error: error.message };
        }
    }
}

export default new CourseService();
