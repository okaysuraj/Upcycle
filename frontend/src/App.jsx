import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import Landing from './pages/Landing';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Inventory from './pages/Inventory';
import Team from './pages/Team';
import Events from './pages/Events';
import Campuses from './pages/Campuses';
import WasteAdmin from './pages/WasteAdmin';
import ESGReports from './pages/ESGReports';
import NotificationDrawer from './components/NotificationDrawer';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-4xl animate-bounce">🌿</div>
        <p className="text-gray-500 font-medium">Loading Upcycle...</p>
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Admin/User Dashboard Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="campuses" element={<Campuses />} />
          <Route path="users" element={<Team />} />
          <Route path="waste" element={<WasteAdmin />} />
          <Route path="marketplace" element={<Inventory />} />
          <Route path="events" element={<Events />} />
          <Route path="reports" element={<ESGReports />} />
          <Route path="settings" element={<div>Settings Component</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
