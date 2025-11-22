import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminStatusOverlay() {
  const { currentUser, userProfile, loading } = useAuth();

  const unregisterSW = async () => {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const r of regs) {
        try { await r.unregister(); } catch (e) { /* ignore */ }
      }
      // reload after unregistering
      window.location.reload(true);
    } else {
      alert('ServiceWorker not supported in this browser');
    }
  };

  return (
    <div style={{position: 'fixed', right: 12, top: 12, zIndex: 9999}}>
      <div className="bg-white border rounded p-3 shadow text-xs w-64">
        <div className="font-semibold text-sm mb-1">Admin Debug</div>
        <div>loading: <strong>{String(loading)}</strong></div>
        <div>uid: <strong>{currentUser?.uid ?? 'null'}</strong></div>
        <div>role: <strong>{userProfile?.role ?? 'null'}</strong></div>
        <div style={{marginTop:8}}>
          <button className="bg-gray-200 px-2 py-1 rounded mr-2" onClick={() => window.location.reload(true)}>Hard reload</button>
          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={unregisterSW}>Unregister SW</button>
        </div>
      </div>
    </div>
  );
}
