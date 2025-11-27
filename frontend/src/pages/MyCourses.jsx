// 📁 src/pages/MyCourses.jsx
// ========================================

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Play, Clock, CheckCircle } from 'lucide-react';
import courseService from '../services/course.service';
import progressService from '../services/progress.service';

export default function MyCourses() {
  const { userProfile, currentUser } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser && userProfile) {
      loadMyCourses();
    }
  }, [currentUser, userProfile]);

  const loadMyCourses = async () => {
    setLoading(true);

    // Get purchased course IDs from user profile
    const purchasedCourseIds = userProfile?.purchasedCourses || [];

    if (purchasedCourseIds.length === 0) {
      setLoading(false);
      return;
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
}

return (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Mes Cours</h1>
        <p className="mt-2 text-gray-600">Continuez votre apprentissage</p>
      </div>
    </div>

    {/* Courses */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {courses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl shadow">
          <BookOpen className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun cours acheté</h3>
          <p className="text-gray-600 mb-6">Commencez par explorer nos cours disponibles.</p>
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-xl transition font-medium"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explorer les cours
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src={course.thumbnail || '/assets/images/default-course.png'}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.category || 'General'}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="font-medium">Progression</span>
                    <span className="font-semibold text-green-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    <span>{course.completedLessons}/{course.totalLessons} leçons</span>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}/view`}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl hover:shadow-xl transition flex items-center justify-center font-medium"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {course.progress === 0 ? 'Commencer' : 'Continuer'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}
