import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/ForgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expense";
import GoalPage from "./pages/goal";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><DashboardPage /></RequireAuth>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/balance",
      element: <RequireAuth><BalancePage /></RequireAuth>,
    },
    {
      path: "/goal",
      element: <RequireAuth><GoalPage /></RequireAuth>,
    },
    {
      path: "/expense",
      element: <RequireAuth><ExpensesPage /></RequireAuth>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
