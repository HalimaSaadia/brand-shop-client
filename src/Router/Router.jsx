
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";

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
                element:<AddProduct />
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