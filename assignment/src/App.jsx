import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import DashboardWater from "./pages/water";
import { AuthContextProvider } from "./context/authContext";
import AuthProtectedRoute from "./protectedRoutes/authProtectedRoute";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <AuthProtectedRoute>
                <Dashboard />
              </AuthProtectedRoute>
            }
          >
            <Route path="water" element={<DashboardWater />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;