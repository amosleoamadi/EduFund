import { createBrowserRouter } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import HomeLayouts from "../components/layouts/HomeLayouts";
import Homepage from "../pages/Homepage/Homepage";
import AccoutType from "../auth/AccoutType";
import Terms from "../auth/terms/Terms";
import Policy from "../auth/terms/Policy";
import EmailVerification from "../auth/EmailVerification";
import RouterError from "./RouterError";
import ResetPassword from "../auth/ResetPassword";

export const Element = createBrowserRouter([
  {
    path: "*",
    element: <RouterError />,
  },
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account-type",
    element: <AccoutType />,
  },
  {
    path: "/verify-email",
    element: <EmailVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
