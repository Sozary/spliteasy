import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./features/layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import CreateExpensePage from "./features/pages/CreateExpensePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CreateGroupPage from "./features/pages/CreateGroupPage";
import DashboardPage from "./features/pages/DashboardPage";
import GroupBalancePage from "./features/pages/GroupBalancePage";
import GroupPage from "./features/pages/GroupPage";
import GroupsPage from "./features/pages/GroupsPage";
import LoginPage from "./features/pages/LoginPage";
import SignUpPage from "./features/pages/SignUpPage";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups"
              element={
                <ProtectedRoute>
                  <GroupsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups/create"
              element={
                <ProtectedRoute>
                  <CreateGroupPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups/:id"
              element={
                <ProtectedRoute>
                  <GroupPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups/:id/balance"
              element={
                <ProtectedRoute>
                  <GroupBalancePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups/:id/expenses/create"
              element={
                <ProtectedRoute>
                  <CreateExpensePage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster position="top-center" />
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
