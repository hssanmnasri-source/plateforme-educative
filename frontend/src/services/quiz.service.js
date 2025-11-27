// 📁 src/services/quiz.service.js
// ========================================
// Quiz management service

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
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

class QuizService {
    /**
     * Create a new quiz
     */
    async createQuiz(quizData) {
        try {
            const quiz = {
                ...quizData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'quizzes'), quiz);
            console.log('✅ Quiz created:', docRef.id);
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('❌ Error creating quiz:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get quizzes by course ID
     */
    async getQuizzesByCourse(courseId) {
        try {
            const q = query(
                collection(db, 'quizzes'),
                where('courseId', '==', courseId),
                orderBy('order', 'asc')
            );

            const snapshot = await getDocs(q);
            const quizzes = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, quizzes };
        } catch (error) {
            console.error('❌ Error fetching quizzes:', error);
            return { success: false, error: error.message, quizzes: [] };
        }
    }

    /**
     * Submit quiz answers and calculate score
     */
    async submitQuizAnswers(userId, quizId, courseId, answers) {
        try {
            // Get quiz to check answers
            const quizDoc = await getDoc(doc(db, 'quizzes', quizId));
            if (!quizDoc.exists()) {
                return { success: false, error: 'Quiz not found' };
            }

            const quiz = quizDoc.data();
            let correctCount = 0;

            // Calculate score
            const results = quiz.questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                if (isCorrect) correctCount++;

                return {
                    questionId: question.id || index,
                    question: question.question,
                    userAnswer,
                    correctAnswer: question.correctAnswer,
                    isCorrect,
                    explanation: question.explanation
                };
            });

            const score = Math.round((correctCount / quiz.questions.length) * 100);

            // Save result to Firestore
            const result = {
                userId,
                quizId,
                courseId,
                answers,
                results,
                score,
                correctCount,
                totalQuestions: quiz.questions.length,
                completedAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'quiz-results'), result);

            console.log('✅ Quiz submitted:', docRef.id, 'Score:', score);
            return { success: true, score, results, resultId: docRef.id };
        } catch (error) {
            console.error('❌ Error submitting quiz:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get quiz results for a user
     */
    async getQuizResults(userId, quizId) {
        try {
            const q = query(
                collection(db, 'quiz-results'),
                where('userId', '==', userId),
                where('quizId', '==', quizId),
                orderBy('completedAt', 'desc')
            );

            const snapshot = await getDocs(q);
            const results = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, results };
        } catch (error) {
            console.error('❌ Error fetching quiz results:', error);
            return { success: false, error: error.message, results: [] };
        }
    }

    /**
     * Get all quiz results for a course
     */
    async getCourseQuizResults(userId, courseId) {
        try {
            const q = query(
                collection(db, 'quiz-results'),
                where('userId', '==', userId),
                where('courseId', '==', courseId),
                orderBy('completedAt', 'desc')
            );

            const snapshot = await getDocs(q);
            const results = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return { success: true, results };
        } catch (error) {
            console.error('❌ Error fetching course quiz results:', error);
            return { success: false, error: error.message, results: [] };
        }
    }

    /**
     * Update quiz
     */
    async updateQuiz(quizId, updates) {
        try {
            const quizRef = doc(db, 'quizzes', quizId);
            await updateDoc(quizRef, {
                ...updates,
                updatedAt: serverTimestamp()
            });

            console.log('✅ Quiz updated:', quizId);
            return { success: true };
        } catch (error) {
            console.error('❌ Error updating quiz:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Delete quiz
     */
    async deleteQuiz(quizId) {
        try {
            await deleteDoc(doc(db, 'quizzes', quizId));
            console.log('✅ Quiz deleted:', quizId);
            return { success: true };
        } catch (error) {
            console.error('❌ Error deleting quiz:', error);
            return { success: false, error: error.message };
        }
    }
}

export default new QuizService();
