import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import EcommercePage from "../Components/EcommercePage/EcommercePage";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import UpdateCard from "../Pages/UpdateCard/UpdateCard";
import MyCard from "../Pages/MyCard/MyCard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path:"/cards/:brand_name",
                element:<PrivateRoute><EcommercePage></EcommercePage></PrivateRoute>,
                loader : ({params}) => fetch(`https://e-commerce-project-server-smoky.vercel.app/cards/${params.brand_name}`)
            },
            {
                path: "/addProducts",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<PrivateRoute><Register></Register></PrivateRoute>
            },
            {
              path: "/myCard",
              element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
              loader: () => fetch("https://e-commerce-project-server-smoky.vercel.app/cart/")
              
            },
            {
                path: "/details/:_id",
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://e-commerce-project-server-smoky.vercel.app/details/${params._id}`)
            },
            {
                path:"/updates/:_id",
                element:<PrivateRoute><UpdateCard></UpdateCard></PrivateRoute>,
                loader: ({params}) => fetch(`https://e-commerce-project-server-smoky.vercel.app/updates/${params._id}`)
            },
            
        ]
    }
])

export default router;