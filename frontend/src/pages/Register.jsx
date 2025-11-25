// 📁 src/pages/Register.jsx
// ========================================
// Modern 3D register page with glassmorphism effects

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, User, Chrome, CheckCircle, BookOpen, Sparkles } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const result = await register(
      formData.email,
      formData.password,
      formData.displayName
    );

    if (result.success) {
      navigate('/');
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const result = await loginWithGoogle();
    if (result.success) {
      navigate('/');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    const levels = [
      { strength: 1, label: 'Faible', color: 'bg-red-500' },
      { strength: 2, label: 'Moyen', color: 'bg-yellow-500' },
      { strength: 3, label: 'Bon', color: 'bg-blue-500' },
      { strength: 4, label: 'Fort', color: 'bg-green-500' },
      { strength: 5, label: 'Excellent', color: 'bg-green-600' },
    ];

    return levels[strength - 1] || { strength: 0, label: '', color: '' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Register Card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Créer un compte
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" />
              Commencez votre apprentissage
            </p>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="group w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 py-3.5 rounded-2xl transition-all disabled:opacity-50 mb-6 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Chrome className="w-5 h-5 group-hover:rotate-12 transition" />
            <span className="font-medium">S'inscrire avec Google</span>
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

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition" />
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:bg-white transition-all outline-none ${errors.displayName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                  placeholder="Ahmed Ben Salem"
                />
              </div>
              {errors.displayName && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.displayName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:bg-white transition-all outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                  placeholder="exemple@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:bg-white transition-all outline-none ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                  placeholder="••••••••"
                />
              </div>
              {/* Password Strength Indicator */}
              {formData.password && !errors.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {passwordStrength.label}
                    </span>
                  </div>
                </div>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:bg-white transition-all outline-none ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                  placeholder="••••••••"
                />
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Création...
                </span>
              ) : (
                'Créer mon compte'
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-8">
            Vous avez déjà un compte?{' '}
            <Link
              to="/login"
              className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition"
            >
              Se connecter
            </Link>
          </p>
        </div>

        {/* 3D Shadow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
      </div>
    </div>
  );
}