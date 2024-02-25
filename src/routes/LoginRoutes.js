import { lazy } from "react";

// project import
import Loadable from "../Components/Loadable";
import AuthLayout from "../layout/AuthLayout";
import AuthLogin from "./../sections/auth/auth-forms/AuthLogin";
import AuthRegister from "../sections/auth/auth-forms/AuthRegister.jsx";
import AuthForgotPassword from "../sections/auth/auth-forms/AuthForgotPassword.jsx";

// render - page


const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <AuthLogin />,
        },
        {
          path: "register",
          element: <AuthRegister />,
        },
        {
          path: "forgot-password",
          element: <AuthForgotPassword />,
        },
      ],
    },
  ],
};

export default LoginRoutes;
