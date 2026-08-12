# Upcycle Mobile App Architecture & Audit Report

This document contains a comprehensive manual audit of the Upcycle Expo Mobile App architecture, data fetching patterns, and UI inconsistencies.

## 1. Architectural Overview
The app is built using **Expo Router (File-based Routing)** and structured into distinct authenticated groups.
- **Routing:** Uses `_layout.tsx` files to define navigation. The root layout (`app/_layout.tsx`) acts as an authentication guard. It redirects users to `(auth)` if unauthenticated, or to their respective portal (`(student)` or `(staff)`) based on their role (`VOLUNTEER` vs `PLATFORM_ADMIN`/`staff`).
- **Styling:** NativeWind (Tailwind CSS) is used for component styling across the application.
- **State Management & Auth:** Handled via `context/AuthContext.tsx`. It securely stores JWT tokens using `expo-secure-store` and provides an `authFetch` wrapper for authenticated API requests.
- **UI Components:** Reusable wrappers like `ScreenWrapper`, `Input`, and `Button` exist in `components/ui/` to maintain a consistent aesthetic.

---

## 2. File-by-File Audit Findings

### A. Core & Authentication (`app/` and `app/(auth)/`)
* **`app/_layout.tsx`**: Initializes `AuthProvider`. Contains `RootLayoutNav` which listens to auth state changes and dynamically replaces the routing segments. **Status:** Working correctly. Connected to real logic.
* **`app/index.tsx`**: The splash screen. Uses `Animated` for a scale/fade effect. Redirects to `(auth)/login` automatically after 2.5 seconds. **Status:** Hardcoded timer, but works correctly.
* **`app/(auth)/login.tsx`**: User sign-in screen. Captures email/password and calls `login()` from `AuthContext`. **Status:** Fully connected to backend.
* **`app/(auth)/signup.tsx`**: Registration screen. Captures name, email, password. **Data Note:** Role assignment is currently hardcoded based on email contents (`email.includes('staff') ? 'PLATFORM_ADMIN' : 'VOLUNTEER'`). This needs to be replaced with a secure backend role assignment mechanism.

### B. Student Portal (`app/(student)/`)
The `(student)` group represents the eco-volunteer/student experience. It uses a `Tabs` layout (`_layout.tsx`) to provide native bottom navigation.

* **`app/(student)/_layout.tsx`**: Configures the Expo Router `Tabs`. **Note:** Contains 100+ nested routes explicitly hidden from the tab bar via `href: null` to prevent Expo from automatically rendering them as tabs.
* **`app/(student)/index.tsx`**: The main student dashboard. 
  * **Data Note:** Contains extensively hardcoded sustainability metrics (85% goal, 1240kg waste, 45.2m³ carbon footprint). Action grid and Global Impact Stream are entirely hardcoded.
* **`app/(student)/events/index.tsx`**: Events browsing screen.
  * **Data Note:** Uses fully hardcoded dummy data for "Featured Summits", categories, and "Nearby Workshops". No backend integration.
* **`app/(student)/marketplace/index.tsx`**: Marketplace listings.
  * **Data Note:** Actually uses `authFetch('/marketplace')` to pull live data. However, the hero section and categories are hardcoded.
  * **⚠️ Duplicate Tab Bar Detected:** Lines 157-175 contain a hardcoded `View` acting as a bottom navigation placeholder, which overlaps/duplicates the native layout tab bar.
* **`app/(student)/leaderboard/index.tsx`**: Community ranking page.
  * **Data Note:** Leaderboard data is hardcoded into a local `const leaders` array with dummy names and points.
* **`app/(student)/profile/index.tsx`**: User profile and settings overview.
  * **Data Note:** Partially connected (uses `user?.name` and `user?.profilePicUrl` from Context), but achievements (12 badges) and weekly goals (85%) are hardcoded.
  * **⚠️ Duplicate Tab Bar Detected:** Lines 154-176 contain a hardcoded bottom navigation bar that must be removed.

### C. Staff / Admin Portal (`app/(staff)/`)
The `(staff)` group serves as the platform management portal.

* **`app/(staff)/_layout.tsx`**: Similar to the student layout, it uses `Tabs` for navigation with dynamic safe area insets to prevent Android overlap.
* **`app/(staff)/index.tsx`**: The main staff dashboard.
  * **Data Note:** System health metrics (Active Users, GMV, Pending Approvals) and recent activity logs are completely hardcoded static strings.
* **`app/(staff)/tasks/index.tsx`**: Task management queue.
  * **Data Note:** Shows "Approval Queue" and "Bin Alerts" with hardcoded counts (3 pending submissions, 2 smart bins).

---

## 3. Action Items for API Integration (Next Steps)

Based on this audit, here are the primary targets for the upcoming API integration plan:

1. **Remove Duplicate Navigation UI:** Strip out the hardcoded `absolute bottom-0` navigation blocks from `(student)/marketplace/index.tsx` and `(student)/profile/index.tsx`.
2. **Dashboard Metrics (Student & Staff):** Replace static strings in both `index.tsx` files with dynamic API endpoints (`GET /analytics/dashboard`, etc.).
3. **Events Platform:** Integrate `(student)/events/index.tsx` with a `GET /events` endpoint to dynamically render workshops and seminars.
4. **Leaderboard Engine:** Replace the local array in `(student)/leaderboard/index.tsx` with a backend request that calculates user rankings in real-time.
5. **Role Management:** Remove the client-side role derivation hack in `signup.tsx` and shift role assignment logic to the backend registration controller.
