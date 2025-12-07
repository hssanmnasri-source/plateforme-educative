// 📁 src/components/admin/ExerciseBuilder.jsx
// ========================================
// Admin component to create and edit coding exercises

import { useState } from 'react';
import { Save, X, AlertCircle, Plus, Trash2 } from 'lucide-react';
import exerciseService from '../../services/exercise.service';

export default function ExerciseBuilder({ courseId, exercise: existingExercise, onSave, onCancel }) {
    const [exercise, setExercise] = useState(existingExercise || {
        title: '',
        description: '',
        levels: [
            {
                level: 0,
                title: 'Niveau 1: Débutant',
                description: '',
                starterCode: '',
                solution: '',
                hints: []
            },
            {
                level: 1,
                title: 'Niveau 2: Intermédiaire',
                description: '',
                starterCode: '',
                solution: '',
                hints: []
            },
            {
                level: 2,
                title: 'Niveau 3: Avancé',
                description: '',
                starterCode: '',
                solution: '',
                hints: []
            }
        ]
    });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const updateLevel = (levelIndex, field, value) => {
        const updatedLevels = [...exercise.levels];
        updatedLevels[levelIndex] = {
            ...updatedLevels[levelIndex],
            [field]: value
        };
        setExercise({ ...exercise, levels: updatedLevels });
    };

    const addHint = (levelIndex) => {
        const updatedLevels = [...exercise.levels];
        updatedLevels[levelIndex].hints.push('');
        setExercise({ ...exercise, levels: updatedLevels });
    };

    const updateHint = (levelIndex, hintIndex, value) => {
        const updatedLevels = [...exercise.levels];
        updatedLevels[levelIndex].hints[hintIndex] = value;
        setExercise({ ...exercise, levels: updatedLevels });
    };

    const deleteHint = (levelIndex, hintIndex) => {
        const updatedLevels = [...exercise.levels];
        updatedLevels[levelIndex].hints.splice(hintIndex, 1);
        setExercise({ ...exercise, levels: updatedLevels });
    };

    const handleSave = async () => {
        // Validation
        if (!exercise.title.trim()) {
            setError('Le titre de l\'exercice est requis');
            return;
        }

        // Check all levels are complete
        for (let i = 0; i < exercise.levels.length; i++) {
            const level = exercise.levels[i];
            if (!level.description.trim()) {
                setError(`Niveau ${i + 1}: La description est requise`);
                return;
            }
            if (!level.solution.trim()) {
                setError(`Niveau ${i + 1}: La solution est requise`);
                return;
            }
        }

        setSaving(true);
        setError('');

        try {
            const exerciseData = {
                ...exercise,
                courseId,
                order: existingExercise?.order || 1
            };

            let result;
            if (existingExercise?.id) {
                // Update existing exercise
                result = await exerciseService.updateExercise(existingExercise.id, exerciseData);
            } else {
                // Create new exercise
                result = await exerciseService.createExercise(exerciseData);
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

    const getLevelColor = (level) => {
        switch (level) {
            case 0:
                return 'border-green-300 bg-green-50';
            case 1:
                return 'border-yellow-300 bg-yellow-50';
            case 2:
                return 'border-red-300 bg-red-50';
            default:
                return 'border-gray-300 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                    {existingExercise ? 'Modifier l\'Exercice' : 'Créer un Exercice'}
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

            {/* Exercise Metadata */}
            <div className="space-y-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Titre de l'Exercice *
                    </label>
                    <input
                        type="text"
                        value={exercise.title}
                        onChange={(e) => setExercise({ ...exercise, title: e.target.value })}
                        placeholder="Ex: Application To-Do List"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        value={exercise.description}
                        onChange={(e) => setExercise({ ...exercise, description: e.target.value })}
                        placeholder="Créez une application To-Do List avec React..."
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                    />
                </div>
            </div>

            {/* Levels */}
            <div className="space-y-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Niveaux (3)</h4>

                {exercise.levels.map((level, levelIndex) => (
                    <div
                        key={levelIndex}
                        className={`border-2 rounded-xl p-6 ${getLevelColor(levelIndex)}`}
                    >
                        {/* Level Header */}
                        <div className="mb-4">
                            <h5 className="text-lg font-bold text-gray-900 mb-2">
                                {level.title}
                            </h5>
                        </div>

                        {/* Level Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Objectif du niveau *
                            </label>
                            <textarea
                                value={level.description}
                                onChange={(e) => updateLevel(levelIndex, 'description', e.target.value)}
                                placeholder="Ce que l'étudiant doit accomplir..."
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none bg-white"
                            />
                        </div>

                        {/* Starter Code */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Code de départ (optionnel)
                            </label>
                            <textarea
                                value={level.starterCode}
                                onChange={(e) => updateLevel(levelIndex, 'starterCode', e.target.value)}
                                placeholder="// Code initial que l'étudiant verra..."
                                rows="6"
                                className="w-full px-4 py-2 font-mono text-sm border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none bg-gray-900 text-green-400"
                                spellCheck={false}
                            />
                        </div>

                        {/* Solution Code */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Solution *
                            </label>
                            <textarea
                                value={level.solution}
                                onChange={(e) => updateLevel(levelIndex, 'solution', e.target.value)}
                                placeholder="// Solution complète..."
                                rows="8"
                                className="w-full px-4 py-2 font-mono text-sm border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none bg-gray-900 text-green-400"
                                spellCheck={false}
                            />
                        </div>

                        {/* Hints */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Indices (optionnel)
                                </label>
                                <button
                                    onClick={() => addHint(levelIndex)}
                                    className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                >
                                    <Plus className="w-4 h-4" />
                                    Ajouter un indice
                                </button>
                            </div>
                            <div className="space-y-2">
                                {level.hints.map((hint, hintIndex) => (
                                    <div key={hintIndex} className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={hint}
                                            onChange={(e) => updateHint(levelIndex, hintIndex, e.target.value)}
                                            placeholder={`Indice ${hintIndex + 1}`}
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none bg-white"
                                        />
                                        <button
                                            onClick={() => deleteHint(levelIndex, hintIndex)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
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
                    {saving ? 'Enregistrement...' : 'Enregistrer l\'exercice'}
                </button>
            </div>
        </div>
    );
}
