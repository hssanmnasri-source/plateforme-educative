// 📁 src/pages/Home.jsx (exemple simple)
// ========================================

import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import NotificationPrompt from '../components/common/NotificationPrompt';

export default function Home() {
  const { currentUser, userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navbar simple */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                EduPlatform
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/courses" className="text-gray-600 hover:text-gray-800">
                Cours
              </Link>
              {currentUser ? (
                <>
                  <Link to="/my-courses" className="text-gray-600 hover:text-gray-800">
                    Mes Cours
                  </Link>
                  <Link to="/profile" className="text-gray-600 hover:text-gray-800">
                    Profil
                  </Link>
                  {userProfile?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
                    >
                      Admin
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apprenez à votre rythme avec nos cours en ligne
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accédez à des centaines de cours de qualité, créés par des experts,
            et développez vos compétences aujourd'hui.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-medium text-lg"
            >
              Découvrir les cours
              <ArrowRight className="w-5 h-5" />
            </Link>
            {!currentUser && (
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white text-green-500 px-8 py-3 rounded-lg border-2 border-green-500 hover:bg-green-50 transition font-medium text-lg"
              >
                Commencer gratuitement
              </Link>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Cours variés
            </h3>
            <p className="text-gray-600">
              Des centaines de cours dans différents domaines
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Instructeurs experts
            </h3>
            <p className="text-gray-600">
              Apprenez auprès de professionnels qualifiés
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Certificats
            </h3>
            <p className="text-gray-600">
              Obtenez des certificats à la fin de chaque cours
            </p>
          </div>
        </div>
      </div>

      <NotificationPrompt />
    </div>
  );
}
