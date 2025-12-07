// 📁 src/components/exercises/ExerciseView.jsx
// ========================================
// Progressive exercise component with 3 difficulty levels

import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Lightbulb, Eye, EyeOff } from 'lucide-react';
import exerciseService from '../../services/exercise.service';
import progressService from '../../services/progress.service';
import { useAuth } from '../../contexts/AuthContext';

export default function ExerciseView({ exercise, courseId, onComplete }) {
    const { currentUser } = useAuth();
    const [currentLevel, setCurrentLevel] = useState(0);
    const [userCode, setUserCode] = useState(exercise.levels[0]?.starterCode || '');
    const [showSolution, setShowSolution] = useState(false);
    const [showHints, setShowHints] = useState(false);
    const [completedLevels, setCompletedLevels] = useState([]);

    // Load existing progress on mount
    useEffect(() => {
        if (currentUser && exercise.id) {
            loadProgress();
        }
    }, [exercise.id, currentUser]);

    const loadProgress = async () => {
        if (!currentUser) return;

        const result = await exerciseService.getExerciseProgress(currentUser.uid, exercise.id);
        if (result.success && result.progress.completedLevels) {
            setCompletedLevels(result.progress.completedLevels);
        }
    };

    const level = exercise.levels[currentLevel];

    const handleLevelComplete = async () => {
        if (!completedLevels.includes(currentLevel)) {
            const newCompleted = [...completedLevels, currentLevel];
            setCompletedLevels(newCompleted);

            // Save to Firestore
            if (currentUser && exercise.id && courseId) {
                await exerciseService.trackLevelCompletion(
                    currentUser.uid,
                    exercise.id,
                    courseId,
                    currentLevel
                );

                // If all levels completed, mark entire exercise as complete
                if (newCompleted.length === exercise.levels.length) {
                    await progressService.markExerciseCompleted(
                        currentUser.uid,
                        courseId,
                        exercise.id
                    );
                    console.log('🎉 All exercise levels completed!');
                }
            }

            onComplete?.(currentLevel);
        }

        // Move to next level
        if (currentLevel < exercise.levels.length - 1) {
            setCurrentLevel(currentLevel + 1);
            setUserCode(exercise.levels[currentLevel + 1]?.starterCode || '');
            setShowSolution(false);
            setShowHints(false);
        }
    };

    const getLevelColor = (levelNum) => {
        switch (levelNum) {
            case 0:
                return 'bg-green-100 text-green-700 border-green-300';
            case 1:
                return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 2:
                return 'bg-red-100 text-red-700 border-red-300';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const getLevelLabel = (levelNum) => {
        switch (levelNum) {
            case 0:
                return '🟢 Niveau 1: Débutant';
            case 1:
                return '🟡 Niveau 2: Intermédiaire';
            case 2:
                return '🔴 Niveau 3: Avancé';
            default:
                return `Niveau ${levelNum + 1}`;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Exercise Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{exercise.title}</h2>
                <p className="text-gray-600 mb-6">{exercise.description}</p>

                {/* Level Progress */}
                <div className="flex gap-2 mb-4">
                    {exercise.levels.map((_, index) => (
                        <div
                            key={index}
                            className={`flex-1 h-2 rounded-full transition ${index === currentLevel
                                ? 'bg-gradient-to-r from-green-500 to-blue-500'
                                : completedLevels.includes(index)
                                    ? 'bg-green-500'
                                    : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>

                {/* Level Selector */}
                <div className="flex gap-3">
                    {exercise.levels.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentLevel(index);
                                setUserCode(exercise.levels[index]?.starterCode || '');
                                setShowSolution(false);
                                setShowHints(false);
                            }}
                            className={`px-4 py-2 rounded-xl border-2 font-medium text-sm transition ${index === currentLevel
                                ? getLevelColor(index)
                                : completedLevels.includes(index)
                                    ? 'bg-green-50 text-green-600 border-green-200'
                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {completedLevels.includes(index) && <CheckCircle className="w-4 h-4 inline mr-1" />}
                            Niveau {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Current Level */}
            <div className="space-y-6">
                {/* Level Title */}
                <div className={`p-4 rounded-xl border-2 ${getLevelColor(currentLevel)}`}>
                    <h3 className="text-xl font-bold mb-2">{getLevelLabel(currentLevel)}</h3>
                    <p className="text-sm">{level?.title}</p>
                </div>

                {/* Level Description */}
                <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Objectif:</h4>
                    <p className="text-gray-700 whitespace-pre-wrap">{level?.description}</p>
                </div>

                {/* Code Editor */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="font-semibold text-gray-900">Votre Code:</label>
                        <button
                            onClick={() => setShowHints(!showHints)}
                            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                            <Lightbulb className="w-4 h-4" />
                            {showHints ? 'Masquer les indices' : 'Afficher les indices'}
                        </button>
                    </div>

                    {showHints && level?.hints && level.hints.length > 0 && (
                        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                            <p className="font-semibold text-blue-900 mb-2">💡 Indices:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                {level.hints.map((hint, index) => (
                                    <li key={index}>{hint}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-xl border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                        placeholder="Écrivez votre code ici..."
                        spellCheck={false}
                    />
                </div>

                {/* Solution Toggle */}
                <div>
                    <button
                        onClick={() => setShowSolution(!showSolution)}
                        className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                        {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {showSolution ? 'Masquer la solution' : 'Voir la solution'}
                    </button>

                    {showSolution && level?.solution && (
                        <div className="mt-4">
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-3">
                                <p className="text-sm text-yellow-800">
                                    ⚠️ <strong>Astuce:</strong> Essayez de résoudre l'exercice par vous-même avant de regarder la solution!
                                </p>
                            </div>
                            <div className="p-4 bg-gray-900 rounded-xl">
                                <p className="text-xs text-gray-400 mb-2">Solution:</p>
                                <pre className="font-mono text-sm text-green-400 overflow-x-auto">
                                    {level.solution}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4">
                    <div className="text-sm text-gray-600">
                        {completedLevels.includes(currentLevel) && (
                            <span className="text-green-600 font-medium">✓ Niveau terminé</span>
                        )}
                    </div>
                    <div className="flex gap-3">
                        {currentLevel > 0 && (
                            <button
                                onClick={() => {
                                    setCurrentLevel(currentLevel - 1);
                                    setUserCode(exercise.levels[currentLevel - 1]?.starterCode || '');
                                    setShowSolution(false);
                                    setShowHints(false);
                                }}
                                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
                            >
                                Niveau Précédent
                            </button>
                        )}
                        <button
                            onClick={handleLevelComplete}
                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-xl transition flex items-center gap-2"
                        >
                            {currentLevel < exercise.levels.length - 1 ? (
                                <>
                                    Niveau Suivant
                                    <ChevronRight className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Terminer l'Exercice
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
