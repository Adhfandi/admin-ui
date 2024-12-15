import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/ForgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goal";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
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
      element: <BalancePage />,
    },
    {
      path: "/goal",
      element: <GoalPage />,
    },
    {
      path: "/expense",
      element: <ExpensesPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
