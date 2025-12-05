// 📁 src/components/admin/ModuleEditor.jsx
// ========================================
// Module editor with lessons management

import { useState } from 'react';
import {
    ChevronDown, ChevronRight, Edit2, Trash2, Plus,
    Save, X, ChevronUp, Video, Clock, Globe, Upload
} from 'lucide-react';
import EmptyState from '../common/EmptyState';
import cloudinaryService from '../../services/cloudinary.service';

export default function ModuleEditor({
    module,
    isExpanded,
    isEditing,
    onToggle,
    onUpdate,
    onDelete,
    onMoveUp,
    onMoveDown,
    onStartEdit,
    onEndEdit
}) {
    const [editingLesson, setEditingLesson] = useState(null);
    const [moduleTitle, setModuleTitle] = useState(module.title);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [lessonForm, setLessonForm] = useState({
        title: '',
        videoUrl: '',
        videoType: 'youtube', // 'youtube' or 'cloudinary'
        duration: '',
        description: '',
        isFree: false
    });

    const saveModuleTitle = () => {
        onUpdate({ ...module, title: moduleTitle });
        onEndEdit();
    };

    const cancelModuleEdit = () => {
        setModuleTitle(module.title);
        onEndEdit();
    };

    const addLesson = () => {
        const newLesson = {
            id: `lesson_${Date.now()}`,
            title: '',
            videoUrl: '',
            duration: 0,
            description: '',
            isFree: false,
            order: module.lessons.length + 1
        };
        onUpdate({
            ...module,
            lessons: [...module.lessons, newLesson]
        });
        setEditingLesson(newLesson.id);
    };

    const updateLesson = (lessonId, updatedFields) => {
        onUpdate({
            ...module,
            lessons: module.lessons.map(l =>
                l.id === lessonId ? { ...l, ...updatedFields } : l
            )
        });
    };

    const saveLesson = (lessonId) => {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (!lesson.title || !lesson.videoUrl) {
            alert('Please fill in title and video URL');
            return;
        }
        setEditingLesson(null);
    };

    const deleteLesson = (lessonId) => {
        if (confirm('Delete this lesson?')) {
            onUpdate({
                ...module,
                lessons: module.lessons.filter(l => l.id !== lessonId)
            });
        }
    };

    const moveLesson = (lessonId, direction) => {
        const lessons = [...module.lessons];
        const index = lessons.findIndex(l => l.id === lessonId);
        if (
            (direction === 'up' && index > 0) ||
            (direction === 'down' && index < lessons.length - 1)
        ) {
            const targetIndex = direction === 'up' ? index - 1 : index + 1;
            [lessons[index], lessons[targetIndex]] = [lessons[targetIndex], lessons[index]];
            // Update order
            lessons.forEach((l, i) => l.order = i + 1);
            onUpdate({ ...module, lessons });
        }
    };

    return (
        <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
            {/* Module Header */}
            <div className="bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                    {/* Expand/Collapse */}
                    <button
                        onClick={onToggle}
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        {isExpanded ? (
                            <ChevronDown className="w-5 h-5" />
                        ) : (
                            <ChevronRight className="w-5 h-5" />
                        )}
                    </button>

                    {/* Module Title */}
                    {isEditing ? (
                        <input
                            type="text"
                            value={moduleTitle}
                            onChange={(e) => setModuleTitle(e.target.value)}
                            placeholder="Module title"
                            className="flex-1 px-3 py-2 border-2 border-green-500 rounded-lg focus:outline-none"
                            autoFocus
                        />
                    ) : (
                        <h3 className="flex-1 text-lg font-semibold text-gray-900">
                            {module.title || 'Untitled Module'}
                        </h3>
                    )}

                    {/* Lesson Count */}
                    <span className="text-sm text-gray-500">
                        {module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''}
                    </span>

                    {/* Actions */}
                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={saveModuleTitle}
                                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                                    title="Save"
                                >
                                    <Save className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={cancelModuleEdit}
                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                    title="Cancel"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                {onMoveUp && (
                                    <button
                                        onClick={onMoveUp}
                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                        title="Move up"
                                    >
                                        <ChevronUp className="w-5 h-5" />
                                    </button>
                                )}
                                {onMoveDown && (
                                    <button
                                        onClick={onMoveDown}
                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                        title="Move down"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                )}
                                <button
                                    onClick={onStartEdit}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                    title="Edit module"
                                >
                                    <Edit2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => confirm('Delete this module and all its lessons?') && onDelete()}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                    title="Delete module"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Lessons List */}
            {isExpanded && (
                <div className="p-4">
                    {module.lessons.length === 0 ? (
                        <EmptyState
                            icon={Video}
                            title="No lessons yet"
                            description="Add your first lesson to this module"
                            actionLabel="Add Lesson"
                            actionIcon={Plus}
                            onAction={addLesson}
                        />
                    ) : (
                        <div className="space-y-3">
                            {module.lessons.map((lesson, index) => (
                                <div key={lesson.id} className="border-2 border-gray-100 rounded-lg p-4 hover:border-gray-200 transition">
                                    {editingLesson === lesson.id ? (
                                        /* Edit Mode */
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Lesson Title *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={lesson.title}
                                                        onChange={(e) => updateLesson(lesson.id, { title: e.target.value })}
                                                        placeholder="Introduction to..."
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Duration (minutes) *
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={lesson.duration}
                                                        onChange={(e) => updateLesson(lesson.id, { duration: parseInt(e.target.value) || 0 })}
                                                        placeholder="15"
                                                        min="1"
                                                        max="300"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            {/* Video Type Selector */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Video Source *
                                                </label>
                                                <div className="flex gap-3 mb-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => updateLesson(lesson.id, { videoType: 'youtube' })}
                                                        className={`flex-1 px-4 py-2 border-2 rounded-lg font-medium transition ${(lesson.videoType || 'youtube') === 'youtube'
                                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                                            }`}
                                                    >
                                                        <Globe className="w-4 h-4 inline mr-2" />
                                                        YouTube URL
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => updateLesson(lesson.id, { videoType: 'cloudinary' })}
                                                        className={`flex-1 px-4 py-2 border-2 rounded-lg font-medium transition ${lesson.videoType === 'cloudinary'
                                                                ? 'border-green-500 bg-green-50 text-green-700'
                                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                                            }`}
                                                    >
                                                        <Upload className="w-4 h-4 inline mr-2" />
                                                        Upload Video
                                                    </button>
                                                </div>

                                                {(lesson.videoType || 'youtube') === 'youtube' ? (
                                                    /* YouTube URL Input */
                                                    <input
                                                        type="url"
                                                        value={lesson.videoUrl}
                                                        onChange={(e) => updateLesson(lesson.id, { videoUrl: e.target.value })}
                                                        placeholder="https://www.youtube.com/watch?v=..."
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none"
                                                    />
                                                ) : (
                                                    /* Cloudinary Video Upload */
                                                    <div>
                                                        <input
                                                            type="file"
                                                            accept="video/*"
                                                            onChange={async (e) => {
                                                                const file = e.target.files[0];
                                                                if (!file) return;

                                                                setIsUploading(true);
                                                                setUploadProgress(0);

                                                                const result = await cloudinaryService.uploadVideo(
                                                                    file,
                                                                    'courses/videos',
                                                                    (progress) => setUploadProgress(progress)
                                                                );

                                                                setIsUploading(false);

                                                                if (result.success) {
                                                                    updateLesson(lesson.id, {
                                                                        videoUrl: result.url,
                                                                        duration: Math.ceil(result.duration / 60) || lesson.duration
                                                                    });
                                                                } else {
                                                                    alert('Upload failed: ' + result.error);
                                                                }
                                                            }}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                                            disabled={isUploading}
                                                        />

                                                        {isUploading && (
                                                            <div className="mt-2">
                                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                                    <span>Uploading...</span>
                                                                    <span>{uploadProgress}%</span>
                                                                </div>
                                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                                    <div
                                                                        className="bg-green-500 h-2 rounded-full transition-all"
                                                                        style={{ width: `${uploadProgress}%` }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {lesson.videoUrl && !isUploading && (
                                                            <p className="mt-2 text-sm text-green-600">
                                                                ✓ Video uploaded successfully
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Description
                                                </label>
                                                <textarea
                                                    value={lesson.description}
                                                    onChange={(e) => updateLesson(lesson.id, { description: e.target.value })}
                                                    placeholder="What will students learn in this lesson?"
                                                    rows="2"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none resize-none"
                                                />
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id={`free-${lesson.id}`}
                                                    checked={lesson.isFree}
                                                    onChange={(e) => updateLesson(lesson.id, { isFree: e.target.checked })}
                                                    className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                                                />
                                                <label htmlFor={`free-${lesson.id}`} className="text-sm text-gray-700">
                                                    Freemium Preview (available without purchase)
                                                </label>
                                            </div>

                                            <div className="flex gap-2 pt-2">
                                                <button
                                                    onClick={() => saveLesson(lesson.id)}
                                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                                                >
                                                    Save Lesson
                                                </button>
                                                <button
                                                    onClick={() => setEditingLesson(null)}
                                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        /* View Mode */
                                        <div className="flex items-start gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h4 className="font-semibold text-gray-900">
                                                        {lesson.title || 'Untitled Lesson'}
                                                    </h4>
                                                    {lesson.isFree && (
                                                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                                            Free Preview
                                                        </span>
                                                    )}
                                                </div>
                                                {lesson.description && (
                                                    <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                                                )}
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    {lesson.videoUrl && (
                                                        <span className="flex items-center gap-1">
                                                            <Video className="w-4 h-4" />
                                                            Video
                                                        </span>
                                                    )}
                                                    {lesson.duration > 0 && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            {lesson.duration} min
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {index > 0 && (
                                                    <button
                                                        onClick={() => moveLesson(lesson.id, 'up')}
                                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                                        title="Move up"
                                                    >
                                                        <ChevronUp className="w-4 h-4" />
                                                    </button>
                                                )}
                                                {index < module.lessons.length - 1 && (
                                                    <button
                                                        onClick={() => moveLesson(lesson.id, 'down')}
                                                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                                        title="Move down"
                                                    >
                                                        <ChevronDown className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => setEditingLesson(lesson.id)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                                    title="Edit lesson"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteLesson(lesson.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                    title="Delete lesson"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Add Lesson Button */}
                            <button
                                onClick={addLesson}
                                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-500 hover:text-green-600 transition font-medium flex items-center justify-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Add Lesson
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
