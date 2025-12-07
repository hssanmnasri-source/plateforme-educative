// 📁 src/components/admin/QuizBuilder.jsx
// ========================================
// Admin component to create and edit quizzes

import { useState } from 'react';
import { Plus, Trash2, Save, X, AlertCircle } from 'lucide-react';
import quizService from '../../services/quiz.service';

export default function QuizBuilder({ courseId, quiz: existingQuiz, onSave, onCancel }) {
    const [quiz, setQuiz] = useState(existingQuiz || {
        title: '',
        description: '',
        difficulty: 'beginner',
        questions: []
    });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const addQuestion = () => {
        const newQuestion = {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            explanation: ''
        };
        setQuiz({
            ...quiz,
            questions: [...quiz.questions, newQuestion]
        });
    };

    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[index] = {
            ...updatedQuestions[index],
            [field]: value
        };
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const updateOption = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const deleteQuestion = (index) => {
        const updatedQuestions = quiz.questions.filter((_, i) => i !== index);
        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    const handleSave = async () => {
        // Validation
        if (!quiz.title.trim()) {
            setError('Le titre du quiz est requis');
            return;
        }

        if (quiz.questions.length === 0) {
            setError('Ajoutez au moins une question');
            return;
        }

        // Check all questions are complete
        for (let i = 0; i < quiz.questions.length; i++) {
            const q = quiz.questions[i];
            if (!q.question.trim()) {
                setError(`Question ${i + 1}: Le texte de la question est requis`);
                return;
            }
            if (q.options.some(opt => !opt.trim())) {
                setError(`Question ${i + 1}: Toutes les options doivent être remplies`);
                return;
            }
        }

        setSaving(true);
        setError('');

        try {
            const quizData = {
                ...quiz,
                courseId,
                order: existingQuiz?.order || 1
            };

            let result;
            if (existingQuiz?.id) {
                // Update existing quiz
                result = await quizService.updateQuiz(existingQuiz.id, quizData);
            } else {
                // Create new quiz
                result = await quizService.createQuiz(quizData);
            }

            if (result.success) {
                onSave?.(result);
            } else {
                setError(result.error || 'Erreur lors de l\'enregistrement');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                    {existingQuiz ? 'Modifier le Quiz' : 'Créer un Quiz'}
                </h3>
                <button
                    onClick={onCancel}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Error Alert */}
            {error && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">{error}</p>
                </div>
            )}

            {/* Quiz Metadata */}
            <div className="space-y-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Titre du Quiz *
                    </label>
                    <input
                        type="text"
                        value={quiz.title}
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                        placeholder="Ex: Quiz React - Les Bases"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        value={quiz.description}
                        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                        placeholder="Testez vos connaissances..."
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Difficulté
                    </label>
                    <select
                        value={quiz.difficulty}
                        onChange={(e) => setQuiz({ ...quiz, difficulty: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                    >
                        <option value="beginner">Débutant</option>
                        <option value="intermediate">Intermédiaire</option>
                        <option value="advanced">Avancé</option>
                    </select>
                </div>
            </div>

            {/* Questions */}
            <div className="space-y-6 mb-6">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">
                        Questions ({quiz.questions.length})
                    </h4>
                    <button
                        onClick={addQuestion}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                    >
                        <Plus className="w-4 h-4" />
                        Ajouter une question
                    </button>
                </div>

                {quiz.questions.map((question, qIndex) => (
                    <div key={qIndex} className="border-2 border-gray-200 rounded-xl p-6">
                        {/* Question Header */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-700">
                                Question {qIndex + 1}
                            </span>
                            <button
                                onClick={() => deleteQuestion(qIndex)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                title="Supprimer la question"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Question Text */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Texte de la question *
                            </label>
                            <input
                                type="text"
                                value={question.question}
                                onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                                placeholder="Qu'est-ce que React?"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                            />
                        </div>

                        {/* Options */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Options (sélectionnez la bonne réponse) *
                            </label>
                            <div className="space-y-2">
                                {question.options.map((option, oIndex) => (
                                    <div key={oIndex} className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name={`correct-${qIndex}`}
                                            checked={question.correctAnswer === oIndex}
                                            onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                                            className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500"
                                        />
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                                            placeholder={`Option ${oIndex + 1}`}
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Explanation */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Explication (optionnel)
                            </label>
                            <textarea
                                value={question.explanation}
                                onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                                placeholder="Pourquoi cette réponse est correcte..."
                                rows="2"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                            />
                        </div>
                    </div>
                ))}

                {quiz.questions.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                        <p className="text-gray-600 mb-4">Aucune question ajoutée</p>
                        <button
                            onClick={addQuestion}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                        >
                            <Plus className="w-5 h-5" />
                            Ajouter la première question
                        </button>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end">
                <button
                    onClick={onCancel}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                >
                    Annuler
                </button>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Save className="w-5 h-5" />
                    {saving ? 'Enregistrement...' : 'Enregistrer le quiz'}
                </button>
            </div>
        </div>
    );
}
