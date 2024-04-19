import MainLayout from "@/layout/MainLayout";
import AddContact from "@/pages/addContact/AddContact";
import AllContact from "@/pages/allContact/AllContact";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import Home from "@/pages/home/Home";
import UpdateContact from "@/pages/updateContact/UpdateContact";
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
            {
                path: "/add-contact",
                element: <AddContact/>
            },
            {
                path: "updateContact/:id",
                element: <UpdateContact/>,
                loader: ({ params }) =>
                    fetch(
                      `http://localhost:5000/contacts/${params.id}`
                    ),
            },
            {
                path: "/all-contact",
                element: <AllContact/>
            },
           
           
        ]
    }
])

export default myCreatedRoute;