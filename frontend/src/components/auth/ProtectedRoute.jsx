import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { currentUser, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // Debug logs to help diagnose routing/authorization issues
  console.log('ProtectedRoute - adminOnly:', adminOnly, 'currentUser:', !!currentUser, 'userProfile:', userProfile);

  if (!currentUser) {
    console.log('ProtectedRoute redirecting to /login because no currentUser');
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && userProfile?.role !== 'admin') {
    console.log('ProtectedRoute blocking admin route - userProfile.role:', userProfile?.role);
    return <Navigate to="/" replace />;
  }

  return children;
}