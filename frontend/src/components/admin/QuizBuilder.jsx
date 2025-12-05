// 📁 src/components/admin/QuizBuilder.jsx
// ========================================
// Admin component to create and edit quizzes

import { useState } from 'react';
import { Plus, Trash2, Save, X, ChevronDown, ChevronUp } from 'lucide-react';
import quizService from '../../services/quiz.service';

export default function QuizBuilder({ courseId, existingQuiz, onSave, onCancel }) {
    const [quiz, setQuiz] = useState(existingQuiz || {
        title: '',
        description: '',
        difficulty: 'beginner',
        questions: [],
        order: 1
    });

    const [expandedQuestion, setExpandedQuestion] = useState(null);

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
        setExpandedQuestion(quiz.questions.length);
    };

    const updateQuestion = (index, field, value) => {
        const updated = [...quiz.questions];
        updated[index] = { ...updated[index], [field]: value };
        setQuiz({ ...quiz, questions: updated });
    };

    const updateOption = (questionIndex, optionIndex, value) => {
        const updated = [...quiz.questions];
        updated[questionIndex].options[optionIndex] = value;
        setQuiz({ ...quiz, questions: updated });
    };

    const deleteQuestion = (index) => {
        if (confirm('Supprimer cette question?')) {
            setQuiz({
                ...quiz,
                questions: quiz.questions.filter((_, i) => i !== index)
            });
        }
    };

    const moveQuestion = (index, direction) => {
        const newQuestions = [...quiz.questions];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        [newQuestions[index], newQuestions[targetIndex]] = [newQuestions[targetIndex], newQuestions[index]];
        setQuiz({ ...quiz, questions: newQuestions });
    };

    const handleSave = async () => {
        // Validation
        if (!quiz.title.trim()) {
            alert('Le titre est requis');
            return;
        }

        if (quiz.questions.length === 0) {
            alert('Ajoutez au moins une question');
            return;
        }

        // Validate each question
        for (let i = 0; i < quiz.questions.length; i++) {
            const q = quiz.questions[i];
            if (!q.question.trim()) {
                alert(`Question ${i + 1}: Le texte est requis`);
                return;
            }
            if (q.options.some(opt => !opt.trim())) {
                alert(`Question ${i + 1}: Toutes les options sont requises`);
                return;
            }
        }

        const quizData = {
            ...quiz,
            courseId
        };

        let result;
        if (existingQuiz?.id) {
            result = await quizService.updateQuiz(existingQuiz.id, quizData);
        } else {
            result = await quizService.createQuiz(quizData);
        }

        if (result.success) {
            alert('Quiz enregistré avec succès!');
            onSave?.(result);
        } else {
            alert('Erreur: ' + result.error);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <h2 className="text-2xl font-bold text-gray-900">
                    {existingQuiz ? 'Modifier le Quiz' : 'Créer un Quiz'}
                </h2>
                <button
                    onClick={onCancel}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Quiz Settings */}
            <div className="space-y-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Titre du Quiz *
                    </label>
                    <input
                        type="text"
                        value={quiz.title}
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
                        placeholder="Ex: Quiz React - Composants et Props"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        value={quiz.description}
                        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
                        placeholder="Testez vos connaissances sur..."
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ordre d'affichage
                        </label>
                        <input
                            type="number"
                            value={quiz.order}
                            onChange={(e) => setQuiz({ ...quiz, order: parseInt(e.target.value) || 1 })}
                            min="1"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Questions ({quiz.questions.length})
                    </h3>
                    <button
                        onClick={addQuestion}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        <Plus className="w-4 h-4" />
                        Ajouter une question
                    </button>
                </div>

                <div className="space-y-4">
                    {quiz.questions.map((question, qIndex) => (
                        <div key={qIndex} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                            {/* Question Header */}
                            <div
                                className="bg-gray-50 p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                                onClick={() => setExpandedQuestion(expandedQuestion === qIndex ? null : qIndex)}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                                        {qIndex + 1}
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        {question.question || 'Nouvelle question'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {qIndex > 0 && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); moveQuestion(qIndex, 'up'); }}
                                            className="p-1 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <ChevronUp className="w-4 h-4" />
                                        </button>
                                    )}
                                    {qIndex < quiz.questions.length - 1 && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); moveQuestion(qIndex, 'down'); }}
                                            className="p-1 text-gray-600 hover:bg-gray-200 rounded"
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); deleteQuestion(qIndex); }}
                                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Question Details (Expanded) */}
                            {expandedQuestion === qIndex && (
                                <div className="p-4 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Question *
                                        </label>
                                        <textarea
                                            value={question.question}
                                            onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                                            placeholder="Quelle est la bonne réponse?"
                                            rows="2"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Options de réponse *
                                        </label>
                                        <div className="space-y-2">
                                            {question.options.map((option, oIndex) => (
                                                <div key={oIndex} className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name={`correct-${qIndex}`}
                                                        checked={question.correctAnswer === oIndex}
                                                        onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                                                        className="w-4 h-4 text-green-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={option}
                                                        onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                                                        placeholder={`Option ${oIndex + 1}`}
                                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Sélectionnez la bonne réponse
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Explication (optionnel)
                                        </label>
                                        <textarea
                                            value={question.explanation}
                                            onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                                            placeholder="Expliquez pourquoi c'est la bonne réponse..."
                                            rows="2"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {quiz.questions.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <p className="mb-4">Aucune question ajoutée</p>
                            <button
                                onClick={addQuestion}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                <Plus className="w-5 h-5" />
                                Ajouter la première question
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                    onClick={onCancel}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                    Annuler
                </button>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    <Save className="w-4 h-4" />
                    Enregistrer le Quiz
                </button>
            </div>
        </div>
    );
}
