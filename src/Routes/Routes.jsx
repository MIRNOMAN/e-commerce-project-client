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
                element:<EcommercePage></EcommercePage>,
                loader : ({params}) => fetch(`http://localhost:5000/cards/${params.brand_name}`)
            },
            {
                path: "/addProducts",
                element:<AddProduct></AddProduct>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
              path: "/"
            },
            {
                path: "/details/:_id",
                element:<DetailsPage></DetailsPage>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params._id}`)
            },
            {
                path:"updates/:_id",
                element:<UpdateCard></UpdateCard>,
                loader: ({params}) => fetch(`http://localhost:5000/updates/${params._id}`)
            },
            
        ]
    }
])

export default router;