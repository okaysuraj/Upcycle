import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Inventory from './pages/Inventory';
import Team from './pages/Team';
import Events from './pages/Events';
import Recycling from './pages/Recycling';
import Horticulture from './pages/Horticulture';
import Navbar from './components/Navbar';
import NotificationDrawer from './components/NotificationDrawer';
import './index.css';

const PAGES = {
  dashboard: Dashboard,
  tasks: Tasks,
  inventory: Inventory,
  team: Team,
  events: Events,
  recycling: Recycling,
  horticulture: Horticulture,
};

function AppInner() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState(() => localStorage.getItem('upcycle_current_page') || 'dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const verifyToken = queryParams.get('verify_token');

  const [authMode, setAuthMode] = useState(verifyToken ? 'verify-email' : 'landing');

  // Persist current page to localStorage
  useEffect(() => {
    localStorage.setItem('upcycle_current_page', currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: '20px' }}>
        <div style={{ fontSize: '3rem' }}>🌿</div>
        <div className="spinner" />
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Loading Upcycle...</p>
      </div>
    );
  }

  if (!user) {
    if (authMode === 'login') return <Login onNavigateToSignup={setAuthMode} />;
    if (authMode === 'signup') return <Signup onNavigateToLogin={() => setAuthMode('login')} />;
    if (authMode === 'forgot-password') return <ForgotPassword onNavigateToLogin={() => setAuthMode('login')} />
    if (authMode === 'verify-email') return <VerifyEmail token={verifyToken} onNavigateToLogin={() => setAuthMode('login')} />;
    return <Landing onNavigate={() => setAuthMode('login')} />;
  }


  const PageComponent = PAGES[currentPage] || Dashboard;

  return (
    <div className="app-layout">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onNotifications={() => setShowNotifications(true)}
      />
      <main className="main-content">
        <PageComponent onNavigate={setCurrentPage} />
      </main>
      {showNotifications && (
        <NotificationDrawer onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}
