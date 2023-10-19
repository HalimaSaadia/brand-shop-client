
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element:<PrivateRoute> <Update /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: ()=> fetch("http://localhost:5000/cart")
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