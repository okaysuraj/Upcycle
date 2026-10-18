import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequestNotice from './components/RequestNotice';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AuthLayout from './layouts/AuthLayout';
import WorkspaceLayout from './layouts/WorkspaceLayout';
import { authRoutes, featureRoutes } from './routes';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const KycVerification = lazy(() => import('./pages/auth/KycVerification'));
const AuthScreen = lazy(() => import('./components/AuthScreen'));
const FeatureScreen = lazy(() => import('./components/FeatureScreen'));

// Layouts own navigation; screens own page content.
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <RequestNotice />
          <Suspense
            fallback={
              <div role="status" className="p-8 text-sm text-stone-500">
                Loading page...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route element={<WorkspaceLayout />}>
                <Route path="/terms" element={<FeatureScreen feature="terms" />} />
                <Route path="/privacy" element={<FeatureScreen feature="privacy-policy" />} />
              </Route>
              <Route element={<AuthLayout />}>
                {authRoutes.flatMap(({ mode, paths }) =>
                  paths.map((path) => (
                    <Route key={path} path={path} element={<AuthScreen key={path} mode={mode} />} />
                  ))
                )}
                <Route path="/kyc-verification" element={<KycVerification />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route element={<WorkspaceLayout />}>
                  <Route path="/features/:feature" element={<FeatureScreen />} />
                  {featureRoutes.flatMap(({ feature, paths, startCreate }) =>
                    paths.map((path) => (
                      <Route
                        key={path}
                        path={path}
                        element={
                          <FeatureScreen key={path} feature={feature} startCreate={startCreate} />
                        }
                      />
                    ))
                  )}
                </Route>
              </Route>
              <Route
                path="*"
                element={
                  <div className="mx-auto max-w-lg p-8">
                    <h1 className="text-2xl font-bold">Page not found</h1>
                    <p className="mt-3">This page may have moved.</p>
                    <a className="mt-5 inline-block text-emerald-700 underline" href="/">
                      Back to Upcycle
                    </a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
