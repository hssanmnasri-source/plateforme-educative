// 📁 src/pages/Courses.jsx
// ========================================

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Star, Users } from 'lucide-react';
import PaymentButton from '../components/payment/PaymentButton';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading courses
    setTimeout(() => {
      setCourses([
        {
          id: '1',
          title: 'Introduction à React',
          description: 'Apprenez les bases de React et créez votre première application',
          instructor: 'Ahmed Ben Salem',
          duration: '8 heures',
          rating: 4.8,
          students: 1250,
          price: 99,
          image: '/assets/images/default-course.png',
          level: 'Débutant',
          isFree: false
        },
        {
          id: '2',
          title: 'JavaScript Avancé',
          description: 'Maîtrisez les concepts avancés de JavaScript moderne',
          instructor: 'Fatma Aloui',
          duration: '12 heures',
          rating: 4.9,
          students: 890,
          price: 149,
          image: '/assets/images/default-course.png',
          level: 'Intermédiaire',
          isFree: false
        },
        {
          id: '3',
          title: 'HTML/CSS Gratuit',
          description: 'Apprenez les bases du développement web gratuitement',
          instructor: 'Sara Mohamed',
          duration: '6 heures',
          rating: 4.7,
          students: 2100,
          price: 0,
          image: '/assets/images/default-course.png',
          level: 'Débutant',
          isFree: true
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

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
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  {course.isFree && (
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      Gratuit
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="mr-4">{course.duration}</span>
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span className="mr-4">{course.rating}</span>
                  <Users className="w-4 h-4 mr-1" />
                  <span>{course.students} étudiants</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Par {course.instructor}</span>
                    <span className="text-sm text-gray-500">
                      {course.isFree ? 'Gratuit' : `${course.price} TND`}
                    </span>
                  </div>
                  
                  <PaymentButton course={course} />
                  
                  <Link
                    to={`/course/${course.id}`}
                    className="block text-center text-sm text-green-600 hover:text-green-700 transition"
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
