// 📁 src/pages/Courses.jsx
// ========================================

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users } from 'lucide-react';
import PaymentButton from '../components/payment/PaymentButton';
import courseService from '../services/course.service';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    const result = await courseService.getCourses({ status: 'published' });
    if (result.success) {
      setCourses(result.courses);
    }
    setLoading(false);
  };

  if (loading) {
    return (
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
          <h1 className="text-3xl font-bold text-gray-900">Nos Cours</h1>
          <p className="mt-2 text-gray-600">Découvrez notre collection de cours de qualité</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun cours disponible</h3>
              <p className="text-gray-600">Revenez bientôt pour découvrir de nouveaux cours!</p>
            </div>
          ) : (
            courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={course.thumbnail || '/assets/images/default-course.png'}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                      {course.category || 'General'}
                    </span>
                    {course.price === 0 && (
                      <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                        Gratuit
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.enrolledCount || 0} étudiants</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">By Admin</span>
                      <span className="text-2xl font-bold text-green-600">
                        {course.price === 0 ? 'Gratuit' : `${course.price} TND`}
                      </span>
                    </div>

                    <PaymentButton course={course} />

                    <Link
                      to={`/course/${course.id}`}
                      className="block text-center text-sm text-green-600 hover:text-green-700 transition font-medium"
                    >
                      Voir les détails
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
