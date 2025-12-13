import React from 'react';
import NotificationItem from './NotificationItem';

export default function NotificationList({ items = [] }) {
  if (!items.length) {
    return (
      <div className="p-4 text-sm text-gray-500">No notifications</div>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      {items.map((n) => (
        // Ensure we pass data correctly. If NotificationItem expects 'notification' prop with specific fields.
        // Our Firestore has 'title', 'message', 'createdAt'. 
        // AdminDashboard maps 'time' string.
        <div key={n.id} className="border-b border-gray-100 last:border-0 p-4 hover:bg-gray-50 transition-colors">
          <h4 className="font-medium text-gray-900">{n.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{n.message || n.body}</p>
          <p className="text-xs text-gray-400 mt-2">{n.time}</p>
        </div>
      ))}
    </div>
  );
}
