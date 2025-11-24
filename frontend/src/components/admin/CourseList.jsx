// 📁 src/components/admin/CourseList.jsx
// ========================================
// Liste des cours avec recherche, filtres et actions

import { useState, useEffect } from 'react';
import { Edit, Trash2, Eye, Copy, Plus, Search, CheckCircle, Clock, Archive } from 'lucide-react';
import courseService from '../../services/course.service';

export default function CourseList({ onEdit, onAddNew }) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterStatus, setFilterStatus] = useState('');

    useEffect(() => {
        loadCourses();
    }, [filterCategory, filterStatus]);

    const loadCourses = async () => {
        setLoading(true);
        const filters = {};
        if (filterCategory !== 'all') filters.category = filterCategory;
        if (filterStatus) filters.status = filterStatus;

        const result = await courseService.getCourses(filters);
        if (result.success) {
            setCourses(result.courses);
        }
        setLoading(false);
    };

    const handleDelete = async (courseId) => {
        if (!confirm('Êtes-vous sûr de vouloir archiver ce cours ?')) return;

        const result = await courseService.deleteCourse(courseId);
        if (result.success) {
            loadCourses();
        }
    };

    const handleDuplicate = async (courseId) => {
        const result = await courseService.duplicateCourse(courseId);
        if (result.success) {
            loadCourses();
        }
    };

    const handlePublish = async (courseId) => {
        const result = await courseService.publishCourse(courseId);
        if (result.success) {
            loadCourses();
        }
    };

    // Filtrer les cours par recherche
    const filteredCourses = courses.filter(course =>
        course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [
        { value: 'all', label: 'Toutes les catégories' },
        { value: 'programming', label: 'Programmation' },
        { value: 'design', label: 'Design' },
        { value: 'business', label: 'Business' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'languages', label: 'Langues' },
        { value: 'science', label: 'Sciences' },
        { value: 'other', label: 'Autre' }
    ];

    const getStatusBadge = (status) => {
        const styles = {
            draft: 'bg-gray-100 text-gray-700',
            published: 'bg-green-100 text-green-700',
            archived: 'bg-red-100 text-red-700'
        };
        const icons = {
            draft: Clock,
            published: CheckCircle,
            archived: Archive
        };
        const Icon = icons[status] || Clock;

        return (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.draft}`}>
                <Icon className="w-3 h-3 mr-1" />
                {status === 'draft' ? 'Brouillon' : status === 'published' ? 'Publié' : 'Archivé'}
            </span>
        );
    };

    return (
        <div className="space-y-4">
            {/* Header avec bouton d'ajout */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Gestion des Cours</h2>
                <button
                    onClick={onAddNew}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Nouveau Cours
                </button>
            </div>

            {/* Barre de recherche et filtres */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Recherche */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Rechercher un cours..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Filtre catégorie */}
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>

                    {/* Filtre statut */}
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Tous les statuts</option>
                        <option value="draft">Brouillon</option>
                        <option value="published">Publié</option>
                        <option value="archived">Archivé</option>
                    </select>
                </div>
            </div>

            {/* Liste des cours */}
            {loading ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                    <p className="text-gray-600 mt-4">Chargement des cours...</p>
                </div>
            ) : filteredCourses.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                    <p className="text-gray-600">Aucun cours trouvé</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Cours
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Catégorie
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prix
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Inscrits
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Statut
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {course.thumbnail && (
                                                <img
                                                    src={course.thumbnail}
                                                    alt={course.title}
                                                    className="w-12 h-12 rounded object-cover mr-3"
                                                />
                                            )}
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {course.title}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {course.level === 'beginner' ? 'Débutant' :
                                                        course.level === 'intermediate' ? 'Intermédiaire' :
                                                            course.level === 'advanced' ? 'Avancé' : 'Tous niveaux'}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {course.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                        {course.price} TND
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {course.enrolledCount || 0}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {getStatusBadge(course.status)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end space-x-2">
                                            {course.status === 'draft' && (
                                                <button
                                                    onClick={() => handlePublish(course.id)}
                                                    className="text-green-600 hover:text-green-900"
                                                    title="Publier"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => onEdit(course)}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="Modifier"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDuplicate(course.id)}
                                                className="text-gray-600 hover:text-gray-900"
                                                title="Dupliquer"
                                            >
                                                <Copy className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(course.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Archiver"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Stats rapides */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600">Publiés</p>
                    <p className="text-2xl font-bold text-green-600">
                        {courses.filter(c => c.status === 'published').length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600">Brouillons</p>
                    <p className="text-2xl font-bold text-gray-600">
                        {courses.filter(c => c.status === 'draft').length}
                    </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600">Total Inscrits</p>
                    <p className="text-2xl font-bold text-blue-600">
                        {courses.reduce((sum, c) => sum + (c.enrolledCount || 0), 0)}
                    </p>
                </div>
            </div>
        </div>
    );
}
