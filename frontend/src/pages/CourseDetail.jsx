import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import { useAuth } from '../contexts/AuthContext';
import PaymentButton from '../components/payment/PaymentButton';
import { 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  ArrowLeft,
  CheckCircle,
  PlayCircle,
  Loader
} from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourse();
  }, [id]);

  const loadCourse = async () => {
    try {
      const courseDoc = await getDoc(doc(db, 'courses', id));
      
      if (courseDoc.exists()) {
        setCourse({ id: courseDoc.id, ...courseDoc.data() });
      } else {
        navigate('/courses');
      }
    } catch (error) {
      console.error('Error loading course:', error);
    } finally {
      setLoading(false);
    }
  };

  const hasAccess = userProfile?.purchasedCourses?.includes(id) || 
                    course?.isFree || 
                    userProfile?.role === 'admin';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-green-500" />
      </div>
    );
  }

  if (!course) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-white hover:text-green-100 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux cours
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <img
                src={course.thumbnail || 'https://via.placeholder.com/800x400?text=Cours'}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Course Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                {hasAccess && (
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    ✓ Accès activé
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.totalLessons} leçons</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.enrolledCount} étudiants</span>
                </div>
                {course.rating > 0 && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>

              {/* What you'll learn */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ce que vous allez apprendre
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Maîtriser les concepts fondamentaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Appliquer les connaissances dans des projets réels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Obtenir un certificat de réussite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {course.isFree ? 'Gratuit' : `${course.price} TND`}
                </div>
                {!course.isFree && (
                  <p className="text-sm text-gray-500">Paiement unique</p>
                )}
              </div>

              {/* Action Button */}
              {hasAccess ? (
                <button
                  onClick={() => alert('Page de leçons à venir !')}
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium mb-4"
                >
                  <PlayCircle className="w-5 h-5" />
                  Commencer le cours
                </button>
              ) : (
                <div className="mb-4">
                  <PaymentButton course={course} />
                </div>
              )}

              {/* Course Includes */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Ce cours inclut :</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <PlayCircle className="w-4 h-4 text-green-500" />
                    <span>Vidéos à la demande</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-green-500" />
                    <span>Ressources téléchargeables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accès illimité</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-green-500" />
                    <span>Certificat de réussite</span>
                  </li>
                </ul>
              </div>

              {/* Instructor (optionnel) */}
              {course.instructor && (
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-2">Instructeur</h3>
                  <p className="text-gray-600">{course.instructor}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}