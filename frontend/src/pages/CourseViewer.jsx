// 📁 src/pages/CourseViewer.jsx
// ========================================
// Page principale pour consulter un cours acheté

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, MessageSquare, Brain, Code } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import courseService from '../services/course.service';
import lessonService from '../services/lesson.service';
import progressService from '../services/progress.service';
import LessonPlayer from '../components/lessons/LessonPlayer';
import CourseCurriculum from '../components/courses/CourseCurriculum';
import ContentView from '../components/content/ContentView';
import { demoReactQuiz, demoReactExercise } from '../data/demoContent';

export default function CourseViewer() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const { user, userProfile } = useAuth();

    const [course, setCourse] = useState(null);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [userProgress, setUserProgress] = useState([]);
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(true);
    const [isPurchased, setIsPurchased] = useState(false);
    const [allLessons, setAllLessons] = useState([]);

    useEffect(() => {
        loadCourseData();
    }, [courseId, user]);

    const loadCourseData = async () => {
        if (!courseId || !user) return;

        setLoading(true);

        // Load course details
        const courseResult = await courseService.getCourseById(courseId);
        if (courseResult.success) {
            setCourse(courseResult.course);
        }

        // Check if user has purchased this course
        const hasPurchased = userProfile?.purchasedCourses?.includes(courseId);
        setIsPurchased(hasPurchased);

        // Load user progress
        const progressResult = await progressService.getCourseProgress(user.uid, courseId);
        if (progressResult.success) {
            setUserProgress(progressResult.progress.completedLessons || []);
        }

        // Load all lessons for the course
        const modulesResult = await lessonService.getModulesByCourse(courseId);
        if (modulesResult.success) {
            const allLessonsArray = [];
            for (const module of modulesResult.modules) {
                const lessonsResult = await lessonService.getLessonsByModule(module.id);
                if (lessonsResult.success) {
                    allLessonsArray.push(...lessonsResult.lessons.map(l => ({ ...l, moduleId: module.id, courseId })));
                }
            }
            setAllLessons(allLessonsArray);

            // Set first lesson as current if none selected
            if (allLessonsArray.length > 0 && !currentLesson) {
                // Start with first uncompleted lesson or first lesson
                const firstIncomplete = allLessonsArray.find(l =>
                    !progressService.isLessonCompleted(l.id, progressResult.progress.completedLessons || [])
                );
                setCurrentLesson(firstIncomplete || allLessonsArray[0]);
            }
        }

        setLoading(false);
    };

    const handleLessonComplete = (lessonId) => {
        setUserProgress(prev => [...prev, lessonId]);
    };

    const handleNextLesson = () => {
        if (!currentLesson || allLessons.length === 0) return;

        const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
        if (currentIndex < allLessons.length - 1) {
            setCurrentLesson(allLessons[currentIndex + 1]);
        }
    };

    const calculateProgress = () => {
        if (allLessons.length === 0) return 0;
        return progressService.calculateProgressPercentage(
            userProgress.length,
            allLessons.length
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Cours introuvable</h2>
                    <button
                        onClick={() => navigate('/my-courses')}
                        className="text-green-600 hover:text-green-700"
                    >
                        Retour à mes cours
                    </button>
                </div>
            </div>
        );
    }

    if (!isPurchased) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h2>
                    <p className="text-gray-600 mb-4">Vous devez acheter ce cours pour y accéder</p>
                    <button
                        onClick={() => navigate(`/courses/${courseId}`)}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        Voir le cours
                    </button>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', name: 'Aperçu', icon: BookOpen },
        { id: 'quiz', name: 'Quiz', icon: Brain },
        { id: 'exercise', name: 'Exercice', icon: Code },
        { id: 'resources', name: 'Ressources', icon: FileText },
        { id: 'qna', name: 'Q&A', icon: MessageSquare }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/my-courses')}
                            className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Retour à mes cours
                        </button>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-600">
                                Progression: {calculateProgress()}%
                            </div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full">
                                <div
                                    className="h-2 bg-green-500 rounded-full transition-all"
                                    style={{ width: `${calculateProgress()}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Lesson Player */}
                        {currentLesson && (
                            <LessonPlayer
                                lesson={currentLesson}
                                onComplete={handleLessonComplete}
                                onNext={handleNextLesson}
                                isCompleted={progressService.isLessonCompleted(currentLesson.id, userProgress)}
                            />
                        )}

                        {/* Tabs */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="border-b border-gray-200">
                                <nav className="flex -mb-px">
                                    {tabs.map((tab) => {
                                        const Icon = tab.icon;
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`flex items-center px-6 py-3 border-b-2 font-medium text-sm ${activeTab === tab.id
                                                    ? 'border-green-500 text-green-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4 mr-2" />
                                                {tab.name}
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>

                            <div className="p-6">
                                {activeTab === 'overview' && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">À propos de ce cours</h3>
                                        <p className="text-gray-700 mb-4">{course.description}</p>

                                        {course.outcomes && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Ce que vous allez apprendre:</h4>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    {course.outcomes.split('\n').filter(Boolean).map((outcome, i) => (
                                                        <li key={i}>{outcome}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'quiz' && (
                                    <div className="-m-6">
                                        <ContentView
                                            content={demoReactQuiz}
                                            contentType="quiz"
                                            onComplete={() => console.log('Quiz completed')}
                                            onNext={handleNextLesson}
                                        />
                                    </div>
                                )}

                                {activeTab === 'exercise' && (
                                    <div className="-m-6">
                                        <ContentView
                                            content={demoReactExercise}
                                            contentType="exercise"
                                            onComplete={() => console.log('Exercise completed')}
                                            onNext={handleNextLesson}
                                        />
                                    </div>
                                )}

                                {activeTab === 'resources' && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Ressources du cours</h3>
                                        <p className="text-gray-600">Aucune ressource disponible pour l'instant</p>
                                    </div>
                                )}

                                {activeTab === 'qna' && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Questions et Réponses</h3>
                                        <p className="text-gray-600">Section Q&A à venir</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Course Curriculum */}
                    <div className="lg:col-span-1">
                        <CourseCurriculum
                            courseId={courseId}
                            currentLessonId={currentLesson?.id}
                            onLessonSelect={setCurrentLesson}
                            userProgress={userProgress}
                            isPurchased={isPurchased}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
