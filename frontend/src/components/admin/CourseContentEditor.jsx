// 📁 src/components/admin/CourseContentEditor.jsx
// ========================================
// Course content editor - manage modules and lessons

import { useState } from 'react';
import { Plus, ChevronDown, ChevronRight } from 'lucide-react';
import EmptyState from '../common/EmptyState';
import ModuleEditor from './ModuleEditor';

export default function CourseContentEditor({ modules = [], onChange }) {
    const [expandedModules, setExpandedModules] = useState(new Set());
    const [editingModule, setEditingModule] = useState(null);

    const toggleModule = (moduleId) => {
        const newExpanded = new Set(expandedModules);
        if (newExpanded.has(moduleId)) {
            newExpanded.delete(moduleId);
        } else {
            newExpanded.add(moduleId);
        }
        setExpandedModules(newExpanded);
    };

    const addModule = () => {
        const newModule = {
            id: `module_${Date.now()}`,
            title: '',
            order: modules.length + 1,
            lessons: []
        };
        onChange([...modules, newModule]);
        setEditingModule(newModule.id);
        setExpandedModules(new Set([...expandedModules, newModule.id]));
    };

    const updateModule = (moduleId, updatedModule) => {
        onChange(modules.map(m => m.id === moduleId ? updatedModule : m));
    };

    const deleteModule = (moduleId) => {
        onChange(modules.filter(m => m.id !== moduleId));
    };

    const moveModule = (moduleId, direction) => {
        const index = modules.findIndex(m => m.id === moduleId);
        if (
            (direction === 'up' && index > 0) ||
            (direction === 'down' && index < modules.length - 1)
        ) {
            const newModules = [...modules];
            const targetIndex = direction === 'up' ? index - 1 : index + 1;
            [newModules[index], newModules[targetIndex]] = [newModules[targetIndex], newModules[index]];
            // Update order
            newModules.forEach((m, i) => m.order = i + 1);
            onChange(newModules);
        }
    };

    if (modules.length === 0) {
        return (
            <EmptyState
                icon={Plus}
                title="No modules yet"
                description="Start building your course by adding your first module"
                actionLabel="Add Module"
                actionIcon={Plus}
                onAction={addModule}
            />
        );
    }

    return (
        <div className="space-y-4">
            {/* Modules List */}
            {modules.map((module, index) => (
                <ModuleEditor
                    key={module.id}
                    module={module}
                    isExpanded={expandedModules.has(module.id)}
                    isEditing={editingModule === module.id}
                    onToggle={() => toggleModule(module.id)}
                    onUpdate={(updatedModule) => updateModule(module.id, updatedModule)}
                    onDelete={() => deleteModule(module.id)}
                    onMoveUp={index > 0 ? () => moveModule(module.id, 'up') : null}
                    onMoveDown={index < modules.length - 1 ? () => moveModule(module.id, 'down') : null}
                    onStartEdit={() => setEditingModule(module.id)}
                    onEndEdit={() => setEditingModule(null)}
                />
            ))}

            {/* Add Module Button */}
            <button
                onClick={addModule}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-500 hover:text-green-600 transition font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Module
            </button>
        </div>
    );
}
