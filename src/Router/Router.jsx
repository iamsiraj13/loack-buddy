import { createBrowserRouter } from "react-router-dom";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo";
import PageThree from "../Pages/PageThree";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <PageOne />,
      },
      {
        path: "/verify",
        element: <PageTwo />,
      },
      {
        path: "/resend",
        element: <PageThree />,
      },
    ],
  },
]);

export default router;
