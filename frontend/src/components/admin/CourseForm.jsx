// 📁 src/components/admin/CourseForm.jsx
// ========================================
// Formulaire de création/édition de cours

import { useState, useEffect } from 'react';
import { Upload, X, Save, Eye } from 'lucide-react';
import courseService from '../../services/course.service';

export default function CourseForm({ courseId = null, onSave, onCancel }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        shortDescription: '',
        category: 'programming',
        level: 'beginner',
        price: 0,
        duration: '', // ex: "4 semaines"
        language: 'fr',
        instructor: '',
        requirements: '',
        outcomes: '',
        videoUrl: '', // URL YouTube ou Vimeo pour démo
        status: 'draft'
    });

    // Charger les données du cours si mode édition
    useEffect(() => {
        if (courseId) {
            loadCourse();
        }
    }, [courseId]);

    const loadCourse = async () => {
        setLoading(true);
        const result = await courseService.getCourseById(courseId);
        if (result.success) {
            setFormData(result.course);
            if (result.course.thumbnail) {
                setThumbnailPreview(result.course.thumbnail);
            }
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnailFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnailPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            let result;
            if (courseId) {
                result = await courseService.updateCourse(courseId, formData, thumbnailFile);
            } else {
                result = await courseService.createCourse(formData, thumbnailFile);
            }

            if (result.success) {
                onSave?.(result);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const categories = [
        { value: 'programming', label: 'Programmation' },
        { value: 'design', label: 'Design' },
        { value: 'business', label: 'Business' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'languages', label: 'Langues' },
        { value: 'science', label: 'Sciences' },
        { value: 'other', label: 'Autre' }
    ];

    const levels = [
        { value: 'beginner', label: 'Débutant' },
        { value: 'intermediate', label: 'Intermédiaire' },
        { value: 'advanced', label: 'Avancé' },
        { value: 'all', label: 'Tous niveaux' }
    ];

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                    {courseId ? 'Modifier le cours' : 'Nouveau cours'}
                </h2>
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {/* Titre */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titre du cours *
                </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ex: Maîtriser React.js de A à Z"
                />
            </div>

            {/* Description courte */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description courte *
                </label>
                <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                    maxLength={150}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Résumé en une ligne (max 150 caractères)"
                />
                <p className="text-xs text-gray-500 mt-1">
                    {formData.shortDescription.length}/150 caractères
                </p>
            </div>

            {/* Description complète */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description complète *
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Décrivez en détail ce que les étudiants vont apprendre..."
                />
            </div>

            {/* Grille 2 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Catégorie */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Catégorie *
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>

                {/* Niveau */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Niveau *
                    </label>
                    <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {levels.map(lvl => (
                            <option key={lvl.value} value={lvl.value}>{lvl.label}</option>
                        ))}
                    </select>
                </div>

                {/* Prix */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prix (TND) *
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="0.00"
                    />
                </div>

                {/* Durée */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Durée
                    </label>
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Ex: 4 semaines, 20 heures"
                    />
                </div>

                {/* Instructeur */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instructeur
                    </label>
                    <input
                        type="text"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Nom de l'instructeur"
                    />
                </div>

                {/* Langue */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Langue
                    </label>
                    <select
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="fr">Français</option>
                        <option value="ar">Arabe</option>
                        <option value="en">Anglais</option>
                    </select>
                </div>
            </div>

            {/* Thumbnail */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image de couverture
                </label>
                <div className="flex items-start space-x-4">
                    {thumbnailPreview && (
                        <div className="relative">
                            <img
                                src={thumbnailPreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setThumbnailPreview(null);
                                    setThumbnailFile(null);
                                }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    <label className="flex flex-col items-center px-4 py-6 bg-white text-gray-500 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-green-500 hover:text-green-500">
                        <Upload className="w-8 h-8 mb-2" />
                        <span className="text-sm">Choisir une image</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            {/* URL Vidéo démo */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Vidéo de démonstration (YouTube/Vimeo)
                </label>
                <input
                    type="url"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="https://youtube.com/watch?v=..."
                />
            </div>

            {/* Prérequis */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prérequis
                </label>
                <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Quels sont les prérequis pour suivre ce cours ? (un par ligne)"
                />
            </div>

            {/* Objectifs d'apprentissage */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Objectifs d'apprentissage
                </label>
                <textarea
                    name="outcomes"
                    value={formData.outcomes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Que vont apprendre les étudiants ? (un par ligne)"
                />
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 flex items-center"
                >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
            </div>
        </form>
    );
}
