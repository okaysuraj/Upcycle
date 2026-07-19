import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Auth Pages (Epic 1)
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ChooseRole from './pages/auth/ChooseRole';
import KycVerification from './pages/auth/KycVerification';
import OtpVerification from './pages/auth/OtpVerification';
import WelcomeOnboarding from './pages/auth/WelcomeOnboarding';

// Dashboard Pages (Epic 2)
import VolunteerDashboard from './pages/dashboards/VolunteerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import VendorDashboard from './pages/dashboards/VendorDashboard';
import VendorAnalyticsDashboard from './pages/dashboards/VendorAnalyticsDashboard';
import MainDashboard from './pages/dashboards/MainDashboard';

// Operations Pages (Epic 3)
import WasteDashboard from './pages/operations/WasteDashboard';
import EnergyUsageDashboard from './pages/dashboards/EnergyUsageDashboard';
import AddEditBuilding from './pages/operations/AddEditBuilding';
import BuildingsZones from './pages/operations/BuildingsZones';
import BuildingsZonesList from './pages/operations/BuildingsZonesList';
import CampusApprovalQueue from './pages/dashboards/CampusApprovalQueue';
import CampusComparisonDashboard from './pages/dashboards/CampusComparisonDashboard';
import CampusDashboardAdmin from './pages/dashboards/CampusDashboardAdmin';
import CampusMapView from './pages/dashboards/CampusMapView';
import CampusOverviewAnalytics from './pages/dashboards/CampusOverviewAnalytics';
import CampusReports from './pages/dashboards/CampusReports';
import CampusReportsExportScreen from './pages/dashboards/CampusReportsExportScreen';
import CarbonFootprintAnalytics from './pages/dashboards/CarbonFootprintAnalytics';
import CircularEconomyDashboard from './pages/dashboards/CircularEconomyDashboard';
import ComplianceTracking from './pages/dashboards/ComplianceTracking';
import ConsumptionAnalytics from './pages/dashboards/ConsumptionAnalytics';
import CollectionSchedule from './pages/operations/CollectionSchedule';
import CreatePickupRequest from './pages/operations/CreatePickupRequest';
import AddSmartBin from './pages/operations/AddSmartBin';
import AddWasteEntry from './pages/operations/AddWasteEntry';
import AlertDetail from './pages/operations/AlertDetail';

// ESG Pages (Epic 4)
import ESGDashboard from './pages/esg/ESGDashboard';

// Marketplace Pages (Epic 5)
// Marketplace Pages (Epic 5)
import MarketplaceHome from './pages/marketplace/MarketplaceHome';
import CompareVendorQuotes from './pages/marketplace/CompareVendorQuotes';
import ContractDetails from './pages/marketplace/ContractDetails';
import AiVendorMatchRecommendation from './pages/marketplace/AiVendorMatchRecommendation';

// Community Pages (Epic 6)
import CommunityFeed from './pages/community/CommunityFeed';
import CommunityFeedHome from './pages/community/CommunityFeedHome';
import ConnectedOrganizations from './pages/community/ConnectedOrganizations';
import CreateOrganization from './pages/community/CreateOrganization';

// Education Pages
import CourseDetail from './pages/education/CourseDetail';

// Admin Pages (Epic 7)
// Admin Pages (Epic 7)
import Settings from './pages/admin/Settings';
import NotificationsCenter from './pages/admin/NotificationsCenter';
import AiInsights from './pages/admin/AiInsights';
import AiInsightsRecommendations from './pages/admin/AiInsightsRecommendations';
import UserManagement from './pages/admin/UserManagement';
import TermsPolicies from './pages/admin/TermsPolicies';
import PrivacySettings from './pages/admin/PrivacySettings';
import ContactSupport from './pages/admin/ContactSupport';
import ContentModeration from './pages/admin/ContentModeration';
import AccountDeactivation from './pages/user/AccountDeactivation';
import AccountSettings from './pages/user/AccountSettings';
import EditProfile from './pages/user/EditProfile';
import UserProfile from './pages/user/UserProfile';
import AchievementsBadges from './pages/user/AchievementsBadges';
import ActivityHistory from './pages/user/ActivityHistory';
import AppSettings from './pages/user/AppSettings';

// Newly added components (Batch 4)
import EventsHub from './pages/community/EventsHub';
import GroupDetail from './pages/community/GroupDetail';
import ExportPdfReport from './pages/dashboards/ExportPdfReport';
import GlobalSearch from './pages/dashboards/GlobalSearch';
import GoalProgressTracking from './pages/dashboards/GoalProgressTracking';
import FaqPage from './pages/admin/FaqPage';
import FeatureFlagsManager from './pages/admin/FeatureFlagsManager';
import FinalizeProjectDetails from './pages/operations/FinalizeProjectDetails';

// Newly added components (Batch 5)
import HelpCenter from './pages/admin/HelpCenter';
import JoinOrganization from './pages/community/JoinOrganization';
import LeaderboardRewards from './pages/community/LeaderboardRewards';
import LearningHub from './pages/education/LearningHub';
import ListItem from './pages/marketplace/ListItem';
import LiveCollectionMonitoring from './pages/operations/LiveCollectionMonitoring';
import LiveSeminarsSpeakers from './pages/education/LiveSeminarsSpeakers';

// Newly added components (Batch 6)
import MarketplaceModeration from './pages/admin/MarketplaceModeration';
import MatchSuggestions from './pages/marketplace/MatchSuggestions';
import MaterialFlowTracker from './pages/operations/MaterialFlowTracker';
import MilestoneTracking from './pages/dashboards/MilestoneTracking';
import MonthlyESGReportViewer from './pages/esg/MonthlyESGReportViewer';
import NotificationBroadcastSystem from './pages/admin/NotificationBroadcastSystem';

// Newly added components (Batch 7)
import NotificationSettings from './pages/admin/NotificationSettings';
import OverflowAlert from './pages/operations/OverflowAlert';
import PaymentEscrowManagement from './pages/marketplace/PaymentEscrowManagement';

// Newly added components (Batch 8)
import PickupAlerts from './pages/operations/PickupAlerts';
import PickupVerification from './pages/operations/PickupVerification';
import PlatformSettings from './pages/admin/PlatformSettings';
import RolePermissionsManager from './pages/admin/RolePermissionsManager';
import RouteOptimizationMap from './pages/operations/RouteOptimizationMap';
import PortfolioShowcase from './pages/esg/PortfolioShowcase';

import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Epic 1: Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/onboarding" element={<WelcomeOnboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/choose-role" element={<ChooseRole />} />
            <Route path="/kyc-verification" element={<KycVerification />} />
            <Route path="/verify-otp" element={<OtpVerification />} />
          </Route>

          {/* Core Dashboards & Shell */}
          <Route element={<DashboardLayout />}>
            <Route path="/student" element={<VolunteerDashboard />} />
            <Route path="/volunteer" element={<VolunteerDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/platform_admin" element={<AdminDashboard />} />
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/vendor/analytics" element={<VendorAnalyticsDashboard />} />
            <Route path="/eco-professional" element={<MainDashboard />} />
            
            {/* Epic 3: Waste Management & Energy */}
            <Route path="/operations/waste" element={<WasteDashboard />} />
            <Route path="/operations/energy" element={<EnergyUsageDashboard />} />
            <Route path="/operations/buildings" element={<BuildingsZones />} />
            <Route path="/operations/buildings/list" element={<BuildingsZonesList />} />
            <Route path="/operations/buildings/add" element={<AddEditBuilding />} />
            <Route path="/operations/buildings/edit/:id" element={<AddEditBuilding />} />
            <Route path="/operations/approvals" element={<CampusApprovalQueue />} />
            <Route path="/operations/comparison" element={<CampusComparisonDashboard />} />
            <Route path="/operations/campus-admin" element={<CampusDashboardAdmin />} />
            <Route path="/operations/map" element={<CampusMapView />} />
            <Route path="/operations/analytics" element={<CampusOverviewAnalytics />} />
            <Route path="/operations/reports" element={<CampusReports />} />
            <Route path="/operations/reports/export" element={<CampusReportsExportScreen />} />
            <Route path="/operations/carbon" element={<CarbonFootprintAnalytics />} />
            <Route path="/operations/collection-schedule" element={<CollectionSchedule />} />
            <Route path="/operations/pickup-request/new" element={<CreatePickupRequest />} />
            <Route path="/operations/circular-economy" element={<CircularEconomyDashboard />} />
            <Route path="/operations/compliance" element={<ComplianceTracking />} />
            <Route path="/operations/compliance" element={<ComplianceTracking />} />
            <Route path="/operations/consumption" element={<ConsumptionAnalytics />} />
            <Route path="/operations/smart-bins/new" element={<AddSmartBin />} />
            <Route path="/operations/waste/entry" element={<AddWasteEntry />} />
            <Route path="/operations/alerts/:id" element={<AlertDetail />} />

            {/* Epic 4: ESG & Resource Analytics */}
            <Route path="/sustainability" element={<ESGDashboard />} />

            {/* Epic 5: Eco-Marketplace */}
            <Route path="/marketplace" element={<MarketplaceHome />} />
            <Route path="/marketplace" element={<MarketplaceHome />} />
            <Route path="/marketplace/quotes/compare" element={<CompareVendorQuotes />} />
            <Route path="/marketplace/contracts/:id" element={<ContractDetails />} />
            <Route path="/marketplace/match-recommendation" element={<AiVendorMatchRecommendation />} />

            {/* Epic 6: Community */}
            <Route path="/community" element={<CommunityFeed />} />
            <Route path="/community/feed" element={<CommunityFeedHome />} />
            <Route path="/community/organizations" element={<ConnectedOrganizations />} />
            <Route path="/community/organizations/new" element={<CreateOrganization />} />
            <Route path="/education/courses/:id" element={<CourseDetail />} />

            {/* Epic 7: Settings */}
            <Route path="/settings" element={<Settings />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/achievements" element={<AchievementsBadges />} />
            <Route path="/activity" element={<ActivityHistory />} />
            <Route path="/app-settings" element={<AppSettings />} />
            <Route path="/notifications" element={<NotificationsCenter />} />
            <Route path="/ai-insights" element={<AiInsights />} />
            <Route path="/ai-insights/recommendations" element={<AiInsightsRecommendations />} />
            <Route path="/deactivate" element={<AccountDeactivation />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/terms" element={<TermsPolicies />} />
            <Route path="/privacy" element={<PrivacySettings />} />
            <Route path="/support" element={<ContactSupport />} />
            <Route path="/admin/moderation" element={<ContentModeration />} />

            {/* Newly added routes (Batch 4) */}
            <Route path="/community/events" element={<EventsHub />} />
            <Route path="/community/groups/:id" element={<GroupDetail />} />
            <Route path="/operations/reports/export-pdf" element={<ExportPdfReport />} />
            <Route path="/search" element={<GlobalSearch />} />
            <Route path="/sustainability/goals" element={<GoalProgressTracking />} />
            <Route path="/admin/faq" element={<FaqPage />} />
            <Route path="/admin/features" element={<FeatureFlagsManager />} />
            <Route path="/operations/projects/new" element={<FinalizeProjectDetails />} />

            {/* Newly added routes (Batch 5) */}
            <Route path="/admin/help-center" element={<HelpCenter />} />
            <Route path="/community/organizations/join" element={<JoinOrganization />} />
            <Route path="/community/leaderboard" element={<LeaderboardRewards />} />
            <Route path="/education/learning-hub" element={<LearningHub />} />
            <Route path="/marketplace/items/new" element={<ListItem />} />
            <Route path="/operations/live-collection" element={<LiveCollectionMonitoring />} />
            <Route path="/education/live-seminars" element={<LiveSeminarsSpeakers />} />

            {/* Newly added routes (Batch 6) */}
            <Route path="/admin/marketplace-moderation" element={<MarketplaceModeration />} />
            <Route path="/marketplace/suggestions" element={<MatchSuggestions />} />
            <Route path="/operations/material-flow" element={<MaterialFlowTracker />} />
            <Route path="/sustainability/milestones" element={<MilestoneTracking />} />
            <Route path="/sustainability/reports/monthly" element={<MonthlyESGReportViewer />} />
            <Route path="/admin/broadcasts" element={<NotificationBroadcastSystem />} />

            {/* Newly added routes (Batch 7) */}
            <Route path="/admin/notifications-settings" element={<NotificationSettings />} />
            <Route path="/operations/overflow-alerts" element={<OverflowAlert />} />
            <Route path="/marketplace/escrow" element={<PaymentEscrowManagement />} />

            {/* Newly added routes (Batch 8) */}
            <Route path="/operations/pickup-alerts" element={<PickupAlerts />} />
            <Route path="/operations/pickup-verification" element={<PickupVerification />} />
            <Route path="/admin/platform-settings" element={<PlatformSettings />} />
            <Route path="/admin/role-permissions" element={<RolePermissionsManager />} />
            <Route path="/operations/route-optimization" element={<RouteOptimizationMap />} />
            <Route path="/sustainability/portfolio" element={<PortfolioShowcase />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}