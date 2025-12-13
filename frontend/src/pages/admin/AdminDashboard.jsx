// 📁 src/pages/admin/AdminDashboard.jsx
// ========================================

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Users, BookOpen, BarChart3, Settings } from 'lucide-react';
import AdminAdd from '../../components/admin/AdminAdd';
import NotificationList from '../../components/notifications/NotificationList';
import CourseList from '../../components/admin/CourseList';
import CourseForm from '../../components/admin/CourseForm';
import UserList from '../../components/admin/UserList';
import { collection, getDocs, query, where, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'courses', name: 'Cours', icon: BookOpen },
    { id: 'users', name: 'Utilisateurs', icon: Users },
    { id: 'settings', name: 'Paramètres', icon: Settings }
  ];

  const [stats, setStats] = useState([
    { name: 'Total Utilisateurs', value: '-', change: '...', changeType: 'neutral' },
    { name: 'Cours Actifs', value: '-', change: '...', changeType: 'neutral' },
    { name: 'Revenus ce mois', value: '-', change: '...', changeType: 'neutral' },
    { name: 'Taux de completion', value: '-', change: '...', changeType: 'neutral' }
  ]);

  useEffect(() => {
    fetchStats();

    // Subscribe to notifications
    const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotifications(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Convert timestamp to readable date or string if needed
        time: doc.data().createdAt?.toDate?.().toLocaleString() || new Date().toLocaleString()
      })));
    });

    return () => unsubscribe();
  }, []);

  const fetchStats = async () => {
    try {
      // 1. Users Count
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const totalUsers = usersSnapshot.size;

      // 2. Active Courses
      const coursesQ = query(collection(db, 'courses'), where('status', '!=', 'archived'));
      const coursesSnapshot = await getDocs(coursesQ);
      const activeCourses = coursesSnapshot.size;

      // 3. Revenue (Completed Payments)
      const paymentsQ = query(collection(db, 'payments'), where('status', '==', 'completed'));
      const paymentsSnapshot = await getDocs(paymentsQ);
      const totalRevenue = paymentsSnapshot.docs.reduce((acc, doc) => acc + (Number(doc.data().amount) || 0), 0);

      // 4. Completion Rate (Certificates / Users)
      // Note: This is an approximation. Ideally calculate unique users with certificates vs total users.
      const certificatesSnapshot = await getDocs(collection(db, 'certificates'));
      const totalCertificates = certificatesSnapshot.size;
      const completionRate = totalUsers > 0 ? Math.round((totalCertificates / totalUsers) * 100) : 0;

      setStats([
        { name: 'Total Utilisateurs', value: totalUsers.toString(), change: '+0%', changeType: 'neutral' },
        { name: 'Cours Actifs', value: activeCourses.toString(), change: 'En ligne', changeType: 'positive' },
        { name: 'Revenus Total', value: `${totalRevenue.toLocaleString()} TND`, change: 'Global', changeType: 'positive' },
        { name: 'Taux de completion', value: `${completionRate}%`, change: `${totalCertificates} Certificats`, changeType: 'positive' }
      ]);
    } catch (error) {
      console.error("Error fetching admin stats:", error);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {stat.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Admin tools + Recent Notifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <AdminAdd />
              </div>
              <div>
                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Notifications récentes</h3>
                  </div>
                  <div className="p-4">
                    <NotificationList items={notifications} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="space-y-6">
            {showCourseForm ? (
              <CourseForm
                courseId={editingCourse?.id}
                onSave={() => {
                  setShowCourseForm(false);
                  setEditingCourse(null);
                }}
                onCancel={() => {
                  setShowCourseForm(false);
                  setEditingCourse(null);
                }}
              />
            ) : (
              <CourseList
                onEdit={(course) => {
                  navigate(`/admin/courses/${course.id}`);
                }}
                onAddNew={() => {
                  setEditingCourse(null);
                  setShowCourseForm(true);
                }}
              />
            )}
          </div>
        );

      case 'users':
        return <UserList />;

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Paramètres</h2>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <p className="text-gray-600">Paramètres de l'application à implémenter</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tableau de bord Admin</h1>
              <p className="text-gray-600">Bienvenue, {userProfile?.displayName}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeTab === tab.id
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
