// 📁 src/pages/Home.jsx
// ========================================
// Enhanced landing page with featured courses, stats, and modern design

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ADMIN_PATH } from '../config/routes';
import {
  BookOpen, Users, Award, ArrowRight, Play, Star,
  TrendingUp, Clock, CheckCircle, Sparkles
} from 'lucide-react';
import courseService from '../services/course.service';

export default function Home() {
  const { currentUser, userProfile } = useAuth();
  const navigate = useNavigate();
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalHours: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      // Fetch featured courses (top 6 published courses)
      const result = await courseService.getCourses({
        status: 'published',
        limit: 6,
        sortBy: 'enrolledCount',
        sortOrder: 'desc'
      });

      if (result.success) {
        setFeaturedCourses(result.courses);
        setStats({
          totalCourses: result.total || result.courses.length,
          totalStudents: result.courses.reduce((sum, c) => sum + (c.enrolledCount || 0), 0),
          totalHours: result.courses.reduce((sum, c) => sum + (c.duration || 0), 0)
        });
      }
    } catch (error) {
      console.error('Error loading home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { name: 'Programmation', icon: '💻', color: 'bg-blue-100 text-blue-600' },
    { name: 'Design', icon: '🎨', color: 'bg-purple-100 text-purple-600' },
    { name: 'Marketing', icon: '📈', color: 'bg-green-100 text-green-600' },
    { name: 'Business', icon: '💼', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Langues', icon: '🌍', color: 'bg-pink-100 text-pink-600' },
    { name: 'Musique', icon: '🎵', color: 'bg-indigo-100 text-indigo-600' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Ben Ali',
      role: 'Développeur Web',
      photo: 'https://i.pravatar.cc/150?img=12',
      quote: 'Les cours sont excellents et m\'ont aidé à progresser dans ma carrière.',
      rating: 5
    },
    {
      name: 'Fatima Khelifi',
      role: 'Designer UI/UX',
      photo: 'https://i.pravatar.cc/150?img=45',
      quote: 'Une plateforme intuitive avec des instructeurs de qualité. Je recommande!',
      rating: 5
    },
    {
      name: 'Mohamed Trabelsi',
      role: 'Marketing Manager',
      photo: 'https://i.pravatar.cc/150?img=33',
      quote: 'Les certificats obtenus m\'ont permis de valoriser mon profil professionnel.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                EduPlatform
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/courses" className="text-gray-600 hover:text-gray-900 transition">
                Cours
              </Link>
              <Link to="/courses" className="text-gray-600 hover:text-gray-900 transition">
                Catégories
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {currentUser ? (
                <>
                  <Link
                    to="/my-courses"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Mes Cours
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Profil
                  </Link>
                  {userProfile?.role === 'admin' && (
                    <button
                      onClick={() => navigate(ADMIN_PATH)}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition font-medium"
                    >
                      Admin
                    </button>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-gray-900 transition font-medium"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium"
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
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Plateforme d'apprentissage #1 en Tunisie</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Apprenez des compétences qui
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}comptent
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Accédez à des cours de qualité, créés par des experts.
                Développez vos compétences et boostez votre carrière aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition font-medium text-lg group"
                >
                  Découvrir les cours
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                {!currentUser && (
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition font-medium text-lg"
                  >
                    <Play className="w-5 h-5" />
                    Commencer gratuitement
                  </Link>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.totalCourses}+</div>
                  <div className="text-sm text-gray-600">Cours disponibles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.totalStudents}+</div>
                  <div className="text-sm text-gray-600">Étudiants actifs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">De contenu vidéo</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <Play className="w-20 h-20 text-gray-400" />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cours populaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos cours les plus appréciés par les étudiants
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-xl shadow animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-xl"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredCourses.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
                    {course.thumbnail ? (
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-gray-300" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {course.price > 0 ? `${course.price} DT` : 'Gratuit'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {course.category || 'Général'}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {course.level || 'Débutant'}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.shortDescription || course.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.enrolledCount || 0} étudiants</span>
                      </div>
                      {course.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}h</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Aucun cours disponible pour le moment</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg group"
            >
              Voir tous les cours
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explorez par catégorie
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez le domaine qui vous intéresse
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/courses?category=${category.name}`}
                className="group p-6 bg-gray-50 hover:bg-white border-2 border-transparent hover:border-green-500 rounded-xl text-center transition"
              >
                <div className={`w-16 h-16 mx-auto mb-3 ${category.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche?
            </h2>
            <p className="text-lg text-gray-600">
              Commencez votre apprentissage en 3 étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Parcourez les cours
                </h3>
                <p className="text-gray-600">
                  Explorez notre catalogue et trouvez le cours qui correspond à vos objectifs
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Inscrivez-vous
                </h3>
                <p className="text-gray-600">
                  Créez votre compte et achetez le cours en quelques clics sécurisés
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Apprenez et progressez
                </h3>
                <p className="text-gray-600">
                  Suivez les leçons à votre rythme et obtenez votre certificat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-lg text-gray-600">
              Rejoignez des milliers d'étudiants satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre apprentissage?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Rejoignez notre communauté et développez vos compétences dès aujourd'hui
          </p>
          <Link
            to={currentUser ? "/courses" : "/register"}
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg hover:shadow-xl transition font-medium text-lg"
          >
            {currentUser ? "Explorer les cours" : "Commencer gratuitement"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EduPlatform</span>
              </div>
              <p className="text-sm">
                Votre plateforme d'apprentissage en ligne pour développer vos compétences
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Plateforme</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses" className="hover:text-white transition">Cours</Link></li>
                <li><Link to="/courses" className="hover:text-white transition">Catégories</Link></li>
                <li><Link to="/my-courses" className="hover:text-white transition">Mes Cours</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">À propos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">À propos de nous</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Devenir instructeur</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 EduPlatform. Tous droits réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
