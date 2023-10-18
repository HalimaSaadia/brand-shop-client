
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";

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
                path:"/products/:brand",
                element: <Products />,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.brand}`)
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