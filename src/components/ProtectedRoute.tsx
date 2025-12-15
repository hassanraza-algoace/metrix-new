import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";
import { RouteLogin } from "../pages/Routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5570F1]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={RouteLogin} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;