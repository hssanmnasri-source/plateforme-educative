// 📁 src/pages/admin/CourseManagement.jsx
// ========================================
// Comprehensive course management with tabs for content, quizzes, and exercises

import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Code, List } from 'lucide-react';
import courseService from '../../services/course.service';
import quizService from '../../services/quiz.service';
import exerciseService from '../../services/exercise.service';
import CourseContentEditor from '../../components/admin/CourseContentEditor';
import QuizBuilder from '../../components/admin/QuizBuilder';
import ExerciseBuilder from '../../components/admin/ExerciseBuilder';

export default function CourseManagement() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [course, setCourse] = useState(null);
    const [modules, setModules] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [exercises, setExercises] = useState([]);

    // Get initial tab from URL parameter or default to 'modules'
    const tabFromUrl = searchParams.get('tab');
    const initialTab = tabFromUrl === 'quizzes' || tabFromUrl === 'exercises' ? tabFromUrl : 'modules';
    const [activeTab, setActiveTab] = useState(initialTab);
    const [showQuizBuilder, setShowQuizBuilder] = useState(false);
    const [showExerciseBuilder, setShowExerciseBuilder] = useState(false);
    const [editingQuiz, setEditingQuiz] = useState(null);
    const [editingExercise, setEditingExercise] = useState(null);
    const [loading, setLoading] = useState(true);

    const tabs = [
        { id: 'modules', name: 'Modules & Leçons', icon: List },
        { id: 'quizzes', name: 'Quiz', icon: Brain },
        { id: 'exercises', name: 'Exercices', icon: Code }
    ];

    useEffect(() => {
        if (courseId) {
            loadCourseData();
        }
    }, [courseId]);

    const loadCourseData = async () => {
        setLoading(true);

        // Load course
        const courseResult = await courseService.getCourseById(courseId);
        if (courseResult.success) {
            setCourse(courseResult.course);
            setModules(courseResult.course.modules || []);
        }

        // Load quizzes
        const quizzesResult = await quizService.getQuizzesByCourse(courseId);
        if (quizzesResult.success) {
            setQuizzes(quizzesResult.quizzes);
        }

        // Load exercises
        const exercisesResult = await exerciseService.getExercisesByCourse(courseId);
        if (exercisesResult.success) {
            setExercises(exercisesResult.exercises);
        }

        setLoading(false);
    };

    const handleModulesChange = async (updatedModules) => {
        setModules(updatedModules);
        await courseService.updateCourse(courseId, { modules: updatedModules });
    };

    const handleQuizSave = async (result) => {
        setShowQuizBuilder(false);
        setEditingQuiz(null);
        await loadCourseData(); // Reload quizzes
    };

    const handleExerciseSave = async (result) => {
        setShowExerciseBuilder(false);
        setEditingExercise(null);
        await loadCourseData(); // Reload exercises
    };

    const handleDeleteQuiz = async (quizId) => {
        if (confirm('Supprimer ce quiz?')) {
            await quizService.deleteQuiz(quizId);
            await loadCourseData();
        }
    };

    const handleDeleteExercise = async (exerciseId) => {
        if (confirm('Supprimer cet exercice?')) {
            await exerciseService.deleteExercise(exerciseId);
            await loadCourseData();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Chargement...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/admin')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Retour au tableau de bord
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">{course?.title}</h1>
                    <p className="text-gray-600 mt-2">Gérer le contenu du cours</p>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm mb-6">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${activeTab === tab.id
                                            ? 'border-green-500 text-green-600'
                                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {tab.name}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    {activeTab === 'modules' && (
                        <CourseContentEditor
                            modules={modules}
                            onChange={handleModulesChange}
                        />
                    )}

                    {activeTab === 'quizzes' && (
                        <div className="space-y-6">
                            {showQuizBuilder ? (
                                <QuizBuilder
                                    courseId={courseId}
                                    quiz={editingQuiz}
                                    onSave={handleQuizSave}
                                    onCancel={() => {
                                        setShowQuizBuilder(false);
                                        setEditingQuiz(null);
                                    }}
                                />
                            ) : (
                                <>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Quiz ({quizzes.length})
                                        </h2>
                                        <button
                                            onClick={() => setShowQuizBuilder(true)}
                                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                                        >
                                            <Brain className="w-5 h-5" />
                                            Créer un quiz
                                        </button>
                                    </div>

                                    {quizzes.length === 0 ? (
                                        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                                            <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-600 mb-4">Aucun quiz pour ce cours</p>
                                            <button
                                                onClick={() => setShowQuizBuilder(true)}
                                                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                                            >
                                                Créer le premier quiz
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {quizzes.map((quiz) => (
                                                <div
                                                    key={quiz.id}
                                                    className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition"
                                                >
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                        {quiz.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-4">{quiz.description}</p>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                                            {quiz.questions?.length || 0} questions
                                                        </span>
                                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium capitalize">
                                                            {quiz.difficulty}
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditingQuiz(quiz);
                                                                setShowQuizBuilder(true);
                                                            }}
                                                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium"
                                                        >
                                                            Modifier
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteQuiz(quiz.id)}
                                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm font-medium"
                                                        >
                                                            Supprimer
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}

                    {activeTab === 'exercises' && (
                        <div className="space-y-6">
                            {showExerciseBuilder ? (
                                <ExerciseBuilder
                                    courseId={courseId}
                                    exercise={editingExercise}
                                    onSave={handleExerciseSave}
                                    onCancel={() => {
                                        setShowExerciseBuilder(false);
                                        setEditingExercise(null);
                                    }}
                                />
                            ) : (
                                <>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Exercices ({exercises.length})
                                        </h2>
                                        <button
                                            onClick={() => setShowExerciseBuilder(true)}
                                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                                        >
                                            <Code className="w-5 h-5" />
                                            Créer un exercice
                                        </button>
                                    </div>

                                    {exercises.length === 0 ? (
                                        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                                            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-600 mb-4">Aucun exercice pour ce cours</p>
                                            <button
                                                onClick={() => setShowExerciseBuilder(true)}
                                                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                                            >
                                                Créer le premier exercice
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {exercises.map((exercise) => (
                                                <div
                                                    key={exercise.id}
                                                    className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition"
                                                >
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                        {exercise.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                                            {exercise.levels?.length || 0} niveaux
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditingExercise(exercise);
                                                                setShowExerciseBuilder(true);
                                                            }}
                                                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium"
                                                        >
                                                            Modifier
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteExercise(exercise.id)}
                                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm font-medium"
                                                        >
                                                            Supprimer
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
