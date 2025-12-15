import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";
import { RouteDashboard } from "../pages/Routes";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5570F1]"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={RouteDashboard} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
