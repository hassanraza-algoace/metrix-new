import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./components/layout/AuthLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import NotFound from "./pages/NotFound";
import {
  RouteDashboard,
  RouteDashboardConversations,
  RouteDashboardCustomers,
  RouteDashboardInventory,
  RouteDashboardInventoryAdd,
  RouteDashboardOrders,
  RouteDashboardSettings,
  RouteLogin,
  RouteSignup,
} from "./pages/Routes";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardInventory from "./pages/DashboardInventory";
import DashboardConversations from "./pages/DashboardConversations";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardCustomers from "./pages/DashboardCustomers";
import CustomerDetailed from "./pages/CustomerDetailed";
import NewInventory from "./pages/NewInventory";
import InventoryDetailed from "./pages/InventoryDetailed";
import { initAuthListener } from "../services/authService";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  useEffect(() => {
    const unsubscribe = initAuthListener();
    return () => unsubscribe();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <AppLayout />
        </PublicRoute>
      ),
      children: [
        {
          path: RouteLogin,
          element: <Login />,
        },
        {
          path: RouteSignup,
          element: <Signup />,
        },
      ],
    },
    {
      path: RouteDashboard,
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: RouteDashboard,
          element: <DashboardHome />,
        },
        {
          path: RouteDashboardOrders,
          element: <DashboardOrders />,
        },
        {
          path: RouteDashboardCustomers,
          element: <DashboardCustomers />,
        },
        {
          path: RouteDashboardCustomers + "/:id",
          element: <CustomerDetailed />,
        },
        {
          path: RouteDashboardInventory,
          element: <DashboardInventory />,
        },
        {
          path: RouteDashboardInventory + "/:id",
          element: <InventoryDetailed />,
        },
        {
          path: RouteDashboardInventoryAdd,
          element: <NewInventory />,
        },
        {
          path: RouteDashboardConversations,
          element: <DashboardConversations />,
        },
        {
          path: RouteDashboardSettings,
          element: <DashboardSettings />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;