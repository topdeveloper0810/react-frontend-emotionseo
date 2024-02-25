import { lazy } from "react";

// project import
import Loadable from "../Components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - page
const Dashboard = Loadable(lazy(() => import("../pages/Mainpages/Dashboard")));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ],
};

export default MainRoutes;
