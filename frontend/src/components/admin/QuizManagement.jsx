// 📁 src/components/admin/QuizManagement.jsx
// ========================================
// Quiz management interface for admin

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ArrowLeft } from 'lucide-react';
import QuizBuilder from './QuizBuilder';
import quizService from '../../services/quiz.service';

export default function QuizManagement({ courseId, courseName, onBack }) {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showBuilder, setShowBuilder] = useState(false);
    const [editingQuiz, setEditingQuiz] = useState(null);

    useEffect(() => {
        loadQuizzes();
    }, [courseId]);

    const loadQuizzes = async () => {
        setLoading(true);
        const result = await quizService.getQuizzesByCourse(courseId);
        if (result.success) {
            setQuizzes(result.quizzes);
        }
        setLoading(false);
    };

    const handleSave = () => {
        setShowBuilder(false);
        setEditingQuiz(null);
        loadQuizzes();
    };

    const handleEdit = (quiz) => {
        setEditingQuiz(quiz);
        setShowBuilder(true);
    };

    const handleDelete = async (quizId) => {
        if (!confirm('Supprimer ce quiz?')) return;

        const result = await quizService.deleteQuiz(quizId);
        if (result.success) {
            loadQuizzes();
        } else {
            alert('Erreur: ' + result.error);
        }
    };

    if (showBuilder) {
        return (
            <QuizBuilder
                courseId={courseId}
                existingQuiz={editingQuiz}
                onSave={handleSave}
                onCancel={() => {
                    setShowBuilder(false);
                    setEditingQuiz(null);
                }}
            />
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            title="Retour"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    )}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Quiz pour: {courseName}</h2>
                        <p className="text-gray-600 mt-1">{quizzes.length} quiz créé(s)</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowBuilder(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    <Plus className="w-4 h-4" />
                    Créer un Quiz
                </button>
            </div>

            {/* Quiz List */}
            {loading ? (
                <div className="text-center py-12 text-gray-500">Chargement...</div>
            ) : quizzes.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Aucun quiz créé pour ce cours</p>
                    <button
                        onClick={() => setShowBuilder(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        <Plus className="w-5 h-5" />
                        Créer le premier quiz
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {quizzes.map((quiz) => (
                        <div
                            key={quiz.id}
                            className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {quiz.title}
                                        </h3>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${quiz.difficulty === 'beginner'
                                                    ? 'bg-green-100 text-green-700'
                                                    : quiz.difficulty === 'intermediate'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {quiz.difficulty === 'beginner'
                                                ? 'Débutant'
                                                : quiz.difficulty === 'intermediate'
                                                    ? 'Intermédiaire'
                                                    : 'Avancé'}
                                        </span>
                                    </div>
                                    {quiz.description && (
                                        <p className="text-gray-600 text-sm mb-2">
                                            {quiz.description}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>{quiz.questions?.length || 0} questions</span>
                                        <span>Ordre: {quiz.order}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(quiz)}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                        title="Modifier"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(quiz.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                        title="Supprimer"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
