// 📁 src/components/courses/CourseCurriculum.jsx
// ========================================
// Affichage du programme du cours (modules et leçons)

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import lessonService from '../../services/lesson.service';
import progressService from '../../services/progress.service';

export default function CourseCurriculum({
    courseId,
    currentLessonId,
    onLessonSelect,
    userProgress = [],
    isPurchased = false
}) {
    const [modules, setModules] = useState([]);
    const [expandedModules, setExpandedModules] = useState(new Set());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCurriculum();
    }, [courseId]);

    const loadCurriculum = async () => {
        setLoading(true);
        const modulesResult = await lessonService.getModulesByCourse(courseId);

        if (modulesResult.success) {
            // Load lessons for each module
            const modulesWithLessons = await Promise.all(
                modulesResult.modules.map(async (module) => {
                    const lessonsResult = await lessonService.getLessonsByModule(module.id);
                    return {
                        ...module,
                        lessons: lessonsResult.lessons || []
                    };
                })
            );

            setModules(modulesWithLessons);
            // Expand first module by default
            if (modulesWithLessons.length > 0) {
                setExpandedModules(new Set([modulesWithLessons[0].id]));
            }
        }

        setLoading(false);
    };

    const toggleModule = (moduleId) => {
        setExpandedModules(prev => {
            const newSet = new Set(prev);
            if (newSet.has(moduleId)) {
                newSet.delete(moduleId);
            } else {
                newSet.add(moduleId);
            }
            return newSet;
        });
    };

    const isLessonCompleted = (lessonId) => {
        return progressService.isLessonCompleted(lessonId, userProgress);
    };

    const getTotalDuration = (lessons) => {
        return lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0);
    };

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow p-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Programme du cours</h3>
            </div>

            <div className="divide-y divide-gray-200">
                {modules.map((module, moduleIndex) => (
                    <div key={module.id}>
                        {/* Module Header */}
                        <button
                            onClick={() => toggleModule(module.id)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center">
                                {expandedModules.has(module.id) ? (
                                    <ChevronDown className="w-5 h-5 text-gray-400 mr-2" />
                                ) : (
                                    <ChevronRight className="w-5 h-5 text-gray-400 mr-2" />
                                )}
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-900">
                                        Module {moduleIndex + 1}: {module.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {module.lessons.length} leçon{module.lessons.length > 1 ? 's' : ''}
                                        {getTotalDuration(module.lessons) > 0 && (
                                            <span> · {getTotalDuration(module.lessons)} min</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </button>

                        {/* Module Lessons */}
                        {expandedModules.has(module.id) && (
                            <div className="bg-gray-50">
                                {module.lessons.map((lesson, lessonIndex) => {
                                    const completed = isLessonCompleted(lesson.id);
                                    const isCurrent = lesson.id === currentLessonId;
                                    const canAccess = isPurchased || lesson.isFree;

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => canAccess && onLessonSelect(lesson)}
                                            disabled={!canAccess}
                                            className={`w-full px-6 py-3 pl-14 flex items-center justify-between hover:bg-gray-100 transition-colors ${isCurrent ? 'bg-green-50 border-l-4 border-green-500' : ''
                                                } ${!canAccess ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <div className="flex items-center">
                                                <div className="mr-3">
                                                    {!canAccess ? (
                                                        <Lock className="w-4 h-4 text-gray-400" />
                                                    ) : completed ? (
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <PlayCircle className="w-4 h-4 text-gray-400" />
                                                    )}
                                                </div>
                                                <div className="text-left">
                                                    <p className={`text-sm ${isCurrent ? 'font-medium text-green-700' : 'text-gray-700'}`}>
                                                        {lessonIndex + 1}. {lesson.title}
                                                    </p>
                                                    {lesson.duration && (
                                                        <p className="text-xs text-gray-500">{lesson.duration} min</p>
                                                    )}
                                                </div>
                                            </div>
                                            {lesson.isFree && (
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                                    Gratuit
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {modules.length === 0 && (
                <div className="px-6 py-8 text-center text-gray-500">
                    <p>Aucun contenu disponible pour l'instant</p>
                </div>
            )}
        </div>
    );
}
