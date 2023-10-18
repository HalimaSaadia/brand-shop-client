
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
                
            },
            {
                path: "/details/:id",
                element: <Details />,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <Cart />,
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