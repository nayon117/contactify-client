import MainLayout from "@/layout/MainLayout";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
           
        ]
    }
])

export default myCreatedRoute;