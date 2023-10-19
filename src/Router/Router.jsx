
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import Details from "../pages/Details/Details";
import Update from "../pages/Update/Update";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addProduct",
                element:<PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path:"/products/:brand",
                element: <PrivateRoute><Products /></PrivateRoute>,
                loader: ({params})=> fetch(`https://10-brand-shop-server-six.vercel.app/slider/${params.brand}`)
                
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({params})=> fetch(`https://10-brand-shop-server-six.vercel.app/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element:<PrivateRoute> <Update /></PrivateRoute>,
                loader: ({params})=> fetch(`https://10-brand-shop-server-six.vercel.app/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: ()=> fetch("https://10-brand-shop-server-six.vercel.app/cart")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])

export default router