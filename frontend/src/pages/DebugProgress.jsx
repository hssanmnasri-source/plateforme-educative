import { useState } from 'react';
import { db } from '../config/firebase.config';
import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export default function DebugProgress() {
    const { currentUser } = useAuth();
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const addLog = (msg, type = 'info') => {
        setLogs(prev => [...prev, { msg, type, time: new Date().toLocaleTimeString() }]);
    };

    const testWrite = async () => {
        if (!currentUser) {
            addLog('❌ User not logged in', 'error');
            return;
        }

        setLoading(true);
        addLog(`👤 Testing with User: ${currentUser.uid}`);

        try {
            // 1. Test Writing to 'debug_logs' collection (should work if open)
            addLog('👉 Attempting to write to "debug_logs" collection...');
            await addDoc(collection(db, 'debug_logs'), {
                userId: currentUser.uid,
                timestamp: new Date(),
                message: 'Test write from debug page'
            });
            addLog('✅ Success: Wrote to "debug_logs"', 'success');

            // 2. Test Writing to 'progress' collection
            addLog('👉 Attempting to write to "progress" collection...');
            const progressId = `${currentUser.uid}_debug_test`;
            const progressRef = doc(db, 'progress', progressId);

            await setDoc(progressRef, {
                userId: currentUser.uid,
                courseId: 'debug_test',
                completedLessons: [],
                completedQuizzes: ['test_quiz'],
                updatedAt: new Date(),
                test: true
            });
            addLog(`✅ Success: Wrote to "progress/${progressId}"`, 'success');

            // 3. Test Reading back
            addLog('👉 Attempting to read back...');
            const snap = await getDoc(progressRef);
            if (snap.exists()) {
                addLog('✅ Success: Read document back', 'success');
                addLog(`📄 Data: ${JSON.stringify(snap.data())}`);
            } else {
                addLog('❌ Error: Document not found after write', 'error');
            }

        } catch (error) {
            console.error(error);
            addLog(`❌ ERROR: ${error.message}`, 'error');
            if (error.code) addLog(`Code: ${error.code}`, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Debug Firestore Writes</h1>

            <div className="mb-6 p-4 bg-gray-100 rounded">
                <p><strong>UID:</strong> {currentUser?.uid || 'Not user'}</p>
                <p><strong>Email:</strong> {currentUser?.email}</p>
            </div>

            <button
                onClick={testWrite}
                disabled={loading || !currentUser}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Testing...' : 'Test Firestore Write'}
            </button>

            <div className="mt-8 space-y-2">
                {logs.map((log, i) => (
                    <div key={i} className={`p-2 rounded text-sm font-mono ${log.type === 'error' ? 'bg-red-100 text-red-800' :
                            log.type === 'success' ? 'bg-green-100 text-green-800' :
                                'bg-gray-50 text-gray-800'
                        }`}>
                        <span className="text-gray-400 mr-2">[{log.time}]</span>
                        {log.msg}
                    </div>
                ))}
            </div>
        </div>
    );
}
