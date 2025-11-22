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
        <NotificationItem key={n.id} notification={n} />
      ))}
    </div>
  );
}
