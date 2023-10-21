import { useContext, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
  const {user} = useContext(AuthContext)
  const userEmail = user.email
  const loadedData = useLoaderData();
  const [cartItems, setCartItems] = useState(loadedData);
  
  const userCartItem = cartItems.filter(cartItem => cartItem.loggedInUser === userEmail)


  return (
    <div className="my-10 px-3 md:px-10">
      {userCartItem.length ?  <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 space-y-5">
        {userCartItem.map((cartItem) => (
          <CartItem key={cartItem._id} cartItems={cartItems} setCartItems={setCartItems} cartItem={cartItem} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0  md:gap-10 my-10">
        <div className=" w-full md:w-1/2">
          <input
            className="input w-full input-bordered"
            type="text"
            placeholder="Have a coupon?"
          />
        </div>
        <div className=" w-full md:w-1/2">
          <button className="btn   bg-[#E74C3C] w-full  text-white hover:text-black">
            Place Order
          </button>
        </div>
      </div>
      </div>:  <div className="flex justify-center min-h-screen items-center">
      <div className="card max-w-[390px]  bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src="https://media.istockphoto.com/id/1145096265/photo/shopping-basket-on-floor-in-supermarket-aisle.webp?b=1&s=170667a&w=0&k=20&c=n_nrEMzK82krARcIqOyo-V6k_cDaUKxmIgmPKkuamxQ="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-4xl font-bold">Your cart is empty</h2>
          <p className="md:text-2xl">Start shopping & fill it up! <br /> Happy Shopping🙂</p>
          <div className="card-actions">
            <Link to="/"><button className="btn bg-[#E74C3C] text-white hover:text-black">Go Back To Home</button></Link>
          </div>
        </div>
      </div>
    </div>}
     
     

    </div>
  );
};

export default Cart;
