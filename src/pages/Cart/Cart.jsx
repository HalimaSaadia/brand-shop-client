import { useState } from "react";

import { useLoaderData } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const loadedData = useLoaderData();
  const [cartItems, setCartItems] = useState(loadedData);

  return (
    <div className="my-10 px-3 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 space-y-5">
        {cartItems.map((cartItem) => (
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
    </div>
  );
};

export default Cart;
