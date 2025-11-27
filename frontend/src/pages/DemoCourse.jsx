// 📁 src/pages/DemoCourse.jsx
// ========================================
// Demo page to showcase quiz and exercise system

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContentView from '../components/content/ContentView';
import { demoReactQuiz, demoReactExercise } from '../data/demoContent';

export default function DemoCourse() {
    const navigate = useNavigate();
    const [activeContent, setActiveContent] = useState('quiz'); // 'quiz' or 'exercise'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Retour
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Demo: Quiz & Exercices React
                        </h1>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Content Type Selector */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveContent('quiz')}
                        className={`px-6 py-3 rounded-xl font-semibold transition ${activeContent === 'quiz'
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        📝 Quiz React (15 questions)
                    </button>
                    <button
                        onClick={() => setActiveContent('exercise')}
                        className={`px-6 py-3 rounded-xl font-semibold transition ${activeContent === 'exercise'
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        💻 Exercice To-Do List (3 niveaux)
                    </button>
                </div>

                {/* Content Display */}
                {activeContent === 'quiz' && (
                    <ContentView
                        content={demoReactQuiz}
                        contentType="quiz"
                        onComplete={() => console.log('Quiz completed!')}
                        onNext={() => console.log('Next content')}
                    />
                )}

                {activeContent === 'exercise' && (
                    <ContentView
                        content={demoReactExercise}
                        contentType="exercise"
                        onComplete={() => console.log('Exercise completed!')}
                        onNext={() => console.log('Next content')}
                    />
                )}
            </div>
        </div>
    );
}
