// 📁 src/components/quiz/QuizView.jsx
// ========================================
// Interactive quiz component with scoring and feedback

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import quizService from '../../services/quiz.service';
import progressService from '../../services/progress.service';
import { useAuth } from '../../contexts/AuthContext';

export default function QuizView({ quiz, courseId, onComplete }) {
    const { currentUser } = useAuth();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState(null);
    const [previousBestScore, setPreviousBestScore] = useState(null);

    // Load previous best score on mount
    useEffect(() => {
        if (currentUser && quiz.id && courseId) {
            loadPreviousScore();
        }
    }, [quiz.id, courseId, currentUser]);

    const loadPreviousScore = async () => {
        if (!currentUser) return;

        const result = await quizService.getQuizResults(currentUser.uid, quiz.id);
        if (result.success && result.results.length > 0) {
            // Get best score
            const bestScore = Math.max(...result.results.map(r => r.score));
            setPreviousBestScore(bestScore);
        }
    };

    const handleAnswerSelect = (questionIndex, optionIndex) => {
        if (submitted) return; // No changes after submission
        setAnswers({
            ...answers,
            [questionIndex]: optionIndex
        });
    };

    const handleSubmit = async () => {
        // Convert answers object to array
        const answersArray = quiz.questions.map((_, index) => answers[index] ?? -1);

        setSubmitted(true);

        // Calculate score locally first
        let correctCount = 0;
        quiz.questions.forEach((question, index) => {
            if (answersArray[index] === question.correctAnswer) {
                correctCount++;
            }
        });

        const score = Math.round((correctCount / quiz.questions.length) * 100);
        const localResults = {
            score,
            correctCount,
            totalQuestions: quiz.questions.length
        };

        setResults(localResults);

        // Save to Firestore
        if (currentUser && quiz.id && courseId) {
            console.log('🚀 Submit Quiz: Starting save process...', { userId: currentUser.uid, quizId: quiz.id, courseId });

            try {
                // Save quiz submission
                console.log('📝 Saving answers...');
                await quizService.submitQuizAnswers(
                    currentUser.uid,
                    quiz.id,
                    courseId,
                    answersArray
                );
                console.log('✅ Answers saved');

                // Mark quiz as completed in progress
                console.log('📝 Marking progress as complete...');
                await progressService.markQuizCompleted(
                    currentUser.uid,
                    courseId,
                    quiz.id,
                    score
                );
                console.log('✅ Progress mark complete');
            } catch (error) {
                console.error('❌ Error saving quiz progress:', error);
            }
        } else {
            console.warn('⚠️ Missing data for save:', {
                hasUser: !!currentUser,
                quizId: quiz?.id,
                courseId
            });
        }

        // Call completion callback
        onComplete?.(localResults);
    };

    const handleRetry = () => {
        setAnswers({});
        setSubmitted(false);
        setResults(null);
    };

    const isAnswered = (questionIndex) => answers[questionIndex] !== undefined;
    const allAnswered = quiz.questions.every((_, index) => isAnswered(index));

    // Difficulty badge color
    const getDifficultyColor = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'beginner':
                return 'bg-green-100 text-green-700';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-700';
            case 'advanced':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Quiz Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{quiz.title}</h2>
                    {quiz.difficulty && (
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
                            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                        </span>
                    )}
                </div>
                {quiz.description && (
                    <p className="text-gray-600 mb-4">{quiz.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{quiz.questions.length} questions</span>
                    {previousBestScore && !submitted && (
                        <span className="text-green-600 font-medium">
                            Meilleur score: {previousBestScore}%
                        </span>
                    )}
                </div>
            </div>

            {/* Questions */}
            <div className="space-y-8">
                {quiz.questions.map((question, qIndex) => (
                    <div key={qIndex} className="border-2 border-gray-100 rounded-xl p-6">
                        {/* Question */}
                        <div className="mb-4">
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                                    {qIndex + 1}
                                </span>
                                <h3 className="text-lg font-semibold text-gray-900 flex-1">{question.question}</h3>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="space-y-3">
                            {question.options.map((option, oIndex) => {
                                const isSelected = answers[qIndex] === oIndex;
                                const isCorrect = submitted && oIndex === question.correctAnswer;
                                const isWrong = submitted && isSelected && oIndex !== question.correctAnswer;

                                return (
                                    <button
                                        key={oIndex}
                                        onClick={() => handleAnswerSelect(qIndex, oIndex)}
                                        disabled={submitted}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isCorrect
                                            ? 'border-green-500 bg-green-50'
                                            : isWrong
                                                ? 'border-red-500 bg-red-50'
                                                : isSelected
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            } ${submitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3">
                                                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                    }`}>
                                                    {isSelected && !submitted && <div className="w-3 h-3 bg-white rounded-full"></div>}
                                                </span>
                                                <span className="font-medium">{option}</span>
                                            </span>
                                            {submitted && isCorrect && (
                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                            )}
                                            {submitted && isWrong && (
                                                <XCircle className="w-6 h-6 text-red-600" />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation (shown after submission) */}
                        {submitted && question.explanation && (
                            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold text-blue-700">Explication: </span>
                                    {question.explanation}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Submit/Results Section */}
            <div className="mt-8">
                {!submitted ? (
                    <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
                        <div className="text-sm text-gray-600">
                            {allAnswered ? (
                                <span className="text-green-600 font-medium">✓ Toutes les questions répondues</span>
                            ) : (
                                <span>{Object.keys(answers).length} / {quiz.questions.length} questions répondues</span>
                            )}
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={!allAnswered}
                            className={`px-8 py-3 rounded-xl font-semibold transition ${allAnswered
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-xl'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Soumettre le Quiz
                        </button>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl text-white">
                        <div className="text-center">
                            <Award className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Quiz Terminé!</h3>
                            <p className="text-5xl font-bold mb-4">{results?.score}%</p>
                            <p className="text-lg mb-6">
                                {results?.correctCount} / {results?.totalQuestions} réponses correctes
                            </p>
                            <button
                                onClick={handleRetry}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition"
                            >
                                <RotateCcw className="w-5 h-5" />
                                Réessayer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
