// 📁 src/pages/admin/AdminDashboard.jsx
// ========================================

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Users, BookOpen, BarChart3, Settings } from 'lucide-react';
import AdminAdd from '../../components/admin/AdminAdd';
import NotificationList from '../../components/notifications/NotificationList';
import CourseList from '../../components/admin/CourseList';
import CourseForm from '../../components/admin/CourseForm';
import UserList from '../../components/admin/UserList';
import QuizManagement from '../../components/admin/QuizManagement';

export default function AdminDashboard() {
  const { userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [showQuizManagement, setShowQuizManagement] = useState(false);
  const [managingQuizForCourse, setManagingQuizForCourse] = useState(null);

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'courses', name: 'Cours', icon: BookOpen },
    { id: 'users', name: 'Utilisateurs', icon: Users },
    { id: 'settings', name: 'Paramètres', icon: Settings }
  ];

  const stats = [
    { name: 'Total Utilisateurs', value: '1,234', change: '+12%', changeType: 'positive' },
    { name: 'Cours Actifs', value: '45', change: '+3', changeType: 'positive' },
    { name: 'Revenus ce mois', value: '€12,345', change: '+8%', changeType: 'positive' },
    { name: 'Taux de completion', value: '78%', change: '+2%', changeType: 'positive' }
  ];

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
                <AdminAdd onCreate={(item) => setNotifications((s) => [item, ...s])} />
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
            {showQuizManagement ? (
              <QuizManagement
                courseId={managingQuizForCourse?.id}
                courseName={managingQuizForCourse?.title}
                onBack={() => {
                  setShowQuizManagement(false);
                  setManagingQuizForCourse(null);
                }}
              />
            ) : showCourseForm ? (
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
                  setEditingCourse(course);
                  setShowCourseForm(true);
                }}
                onAddNew={() => {
                  setEditingCourse(null);
                  setShowCourseForm(true);
                }}
                onManageQuizzes={(course) => {
                  setManagingQuizForCourse(course);
                  setShowQuizManagement(true);
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
