// 📁 src/components/lessons/LessonPlayer.jsx
// ========================================
// Lecteur vidéo avec contrôles et suivi de progression

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { CheckCircle, PlayCircle, ArrowRight } from 'lucide-react';
import progressService from '../../services/progress.service';
import { useAuth } from '../../contexts/AuthContext';

export default function LessonPlayer({ lesson, onComplete, onNext, isCompleted: initialCompleted }) {
    const { user } = useAuth();
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCompleted, setIsCompleted] = useState(initialCompleted);

    const handleProgress = (state) => {
        setProgress(state.played * 100);

        // Auto-mark as complete if 90% watched
        if (state.played > 0.9 && !isCompleted) {
            handleMarkComplete();
        }
    };

    const handleMarkComplete = async () => {
        if (!lesson.courseId || !user) return;

        const result = await progressService.markLessonComplete(
            user.uid,
            lesson.courseId,
            lesson.id
        );

        if (result.success) {
            setIsCompleted(true);
            onComplete?.(lesson.id);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Video Player */}
            <div className="relative bg-black" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                {lesson.videoUrl ? (
                    <ReactPlayer
                        url={lesson.videoUrl}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        playing={playing}
                        controls
                        onProgress={handleProgress}
                        onPlay={() => setPlaying(true)}
                        onPause={() => setPlaying(false)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p>Aucune vidéo disponible</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Lesson Info */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
                        <p className="text-gray-600">{lesson.description}</p>
                    </div>
                    {isCompleted && (
                        <div className="ml-4 flex items-center text-green-600">
                            <CheckCircle className="w-5 h-5 mr-1" />
                            <span className="text-sm font-medium">Complété</span>
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                {lesson.videoUrl && (
                    <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progression</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex space-x-3">
                    {!isCompleted && (
                        <button
                            onClick={handleMarkComplete}
                            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center"
                        >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Marquer comme complété
                        </button>
                    )}
                    {onNext && (
                        <button
                            onClick={onNext}
                            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
                        >
                            Leçon suivante
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    )}
                </div>

                {/* Lesson Content */}
                {lesson.content && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold mb-3">Contenu de la leçon</h3>
                        <div className="prose max-w-none text-gray-700">
                            {lesson.content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
