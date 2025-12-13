import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

export default function AdminAdd({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await addDoc(collection(db, 'notifications'), {
        title: title.trim(),
        message: content.trim(),
        type: 'info',
        createdAt: serverTimestamp(),
        // Optional: Add author info if current user is available via props or context
      });

      setTitle('');
      setContent('');
      if (onCreate) onCreate(); // Optional callback
    } catch (error) {
      console.error("Error creating notification:", error);
      alert("Erreur lors de la création de la notification");
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Create admin content</h3>
      <div className="mb-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-3">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full border px-3 py-2 rounded" rows={3} />
      </div>
      <div className="text-right">
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Create</button>
      </div>
    </form>
  );
}
