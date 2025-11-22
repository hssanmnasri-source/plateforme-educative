import React from 'react';

export default function NotificationItem({ notification }) {
  return (
    <div className="p-3 border-b last:border-b-0 hover:bg-gray-50">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-gray-900">{notification.title}</div>
          <div className="text-xs text-gray-600">{notification.body}</div>
        </div>
        <div className="text-xs text-gray-400">{notification.time}</div>
      </div>
    </div>
  );
}
