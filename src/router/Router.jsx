import { createBrowserRouter } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
