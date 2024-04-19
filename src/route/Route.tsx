import MainLayout from "@/layout/MainLayout";
import AddContact from "@/pages/addContact/AddContact";
import AllContact from "@/pages/allContact/AllContact";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import Favourits from "@/pages/favourits/Favourits";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-contact",
        element: <AddContact />,
      },
      {
        path: "/all-contact",
        element: <AllContact />,
      },
      {
        path: "/favourits",
        element: <Favourits/>,
      },
    ],
  },
]);

export default myCreatedRoute;
