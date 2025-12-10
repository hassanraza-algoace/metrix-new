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
  RouteDashboardOrders,
  RouteDashboardSettings,
} from "./pages/Routes";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardInventory from "./pages/DashboardInventory";
import DashboardConversations from "./pages/DashboardConversations";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardCustomers from "./pages/DashboardCustomers";
import CustomerDetailed from "./pages/CustomerDetailed";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: RouteDashboard,
      element: <DashboardLayout />,
      children: [
        {
          path: RouteDashboardCustomers+"/:id",
          element: <CustomerDetailed />,
        },
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
          path: RouteDashboardInventory,
          element: <DashboardInventory />,
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
