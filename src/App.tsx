import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./components/layout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
