// 📁 src/components/content/ContentView.jsx
// ========================================
// Universal content viewer for video/text/quiz/exercise

import { useState } from 'react';
import LessonPlayer from '../lessons/LessonPlayer';
import QuizView from '../quiz/QuizView';
import ExerciseView from '../exercises/ExerciseView';
import { BookOpen } from 'lucide-react';

export default function ContentView({ content, contentType, courseId, onComplete, onNext }) {
    const [quizResult, setQuizResult] = useState(null);

    const handleQuizSubmit = async (answers) => {
        // In real implementation, this would call quizService.submitQuizAnswers
        // For now, return mock result based on answers
        const score = Math.floor(Math.random() * 40) + 60; // Mock score 60-100%
        const result = {
            score,
            correctCount: Math.floor((score / 100) * answers.length),
            totalQuestions: answers.length
        };

        setQuizResult(result);
        onComplete?.();

        return result;
    };

    const handleExerciseComplete = (level) => {
        console.log('Exercise level completed:', level);
        // Track exercise progress
        if (level === content.levels.length - 1) {
            onComplete?.();
        }
    };

    // Render based on content type
    switch (contentType) {
        case 'video':
            return (
                <LessonPlayer
                    lesson={content}
                    onComplete={onComplete}
                    onNext={onNext}
                    isCompleted={false}
                />
            );

        case 'text':
        case 'course':
            return (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{content.title}</h2>
                    </div>

                    {/* Rich Text Content */}
                    <div className="prose prose-lg max-w-none">
                        {typeof content.content === 'string' ? (
                            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                                {content.content}
                            </div>
                        ) : (
                            content.content
                        )}
                    </div>

                    {/* Complete Button */}
                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={() => {
                                onComplete?.();
                                onNext?.();
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl transition"
                        >
                            Marquer comme terminé et continuer
                        </button>
                    </div>
                </div>
            );

        case 'quiz':
            return (
                <QuizView
                    quiz={content}
                    courseId={courseId}
                    onSubmit={handleQuizSubmit}
                    previousResult={quizResult}
                />
            );

        case 'exercise':
            return (
                <ExerciseView
                    exercise={content}
                    courseId={courseId}
                    onComplete={handleExerciseComplete}
                />
            );

        default:
            return (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <p className="text-gray-600">Type de contenu non supporté: {contentType}</p>
                </div>
            );
    }
}
