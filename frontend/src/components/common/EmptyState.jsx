// 📁 src/components/common/EmptyState.jsx
// ========================================
// Empty state component with call-to-action

import { LucideIcon } from 'lucide-react';

export default function EmptyState({
    icon: Icon,
    title,
    description,
    actionLabel,
    onAction,
    actionIcon: ActionIcon
}) {
    return (
        <div className="text-center py-12 px-4">
            {/* Icon */}
            {Icon && (
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-400" />
                </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
            </h3>

            {/* Description */}
            {description && (
                <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                    {description}
                </p>
            )}

            {/* Action Button */}
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-xl transition font-medium"
                >
                    {ActionIcon && <ActionIcon className="w-5 h-5" />}
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
