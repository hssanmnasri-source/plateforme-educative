// 📁 src/pages/Login.jsx
// ========================================
// Modern 3D login page with glassmorphism effects

import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Chrome, AlertCircle, BookOpen, Sparkles } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const { login, loginWithGoogle, error, setError, userProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      setTimeout(() => {
        if (result.user) {
          const checkProfile = setInterval(() => {
            if (userProfile) {
              clearInterval(checkProfile);
              if (userProfile.role === 'admin') {
                navigate('/admin', { replace: true });
              } else {
                navigate(from, { replace: true });
              }
            }
          }, 100);

          setTimeout(() => {
            clearInterval(checkProfile);
            navigate(from, { replace: true });
          }, 3000);
        } else {
          navigate(from, { replace: true });
        }
      }, 500);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const result = await loginWithGoogle();

    if (result.success) {
      setTimeout(() => {
        if (result.user) {
          const checkProfile = setInterval(() => {
            if (userProfile) {
              clearInterval(checkProfile);
              if (userProfile.role === 'admin') {
                navigate('/admin', { replace: true });
              } else {
                navigate(from, { replace: true });
              }
            }
          }, 100);

          setTimeout(() => {
            clearInterval(checkProfile);
            navigate(from, { replace: true });
          }, 3000);
        } else {
          navigate(from, { replace: true });
        }
      }, 500);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Bon retour !
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" />
              Connectez-vous pour continuer
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="group w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 py-3.5 rounded-2xl transition-all disabled:opacity-50 mb-6 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Chrome className="w-5 h-5 group-hover:rotate-12 transition" />
            <span className="font-medium">Continuer avec Google</span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/70 backdrop-blur-sm text-gray-500 font-medium">
                Ou avec email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-white transition-all outline-none"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Mot de passe
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-600 hover:text-green-700 font-medium transition"
                >
                  Oublié?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 focus:bg-white transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Connexion...
                </span>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-8">
            Pas encore de compte?{' '}
            <Link
              to="/register"
              className="text-green-600 hover:text-green-700 font-semibold hover:underline transition"
            >
              S'inscrire gratuitement
            </Link>
          </p>
        </div>

        {/* 3D Shadow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
      </div>
    </div>
  );
}