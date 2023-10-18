import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const CartItem = ({ cartItem, setCartItems, cartItems }) => {
  const { _id, photo, name, type, price } = cartItem;
  const handleDeleteFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remainingCartItems = cartItems.filter(
                (cartItem) => cartItem._id !== id
              );
              setCartItems(remainingCartItems)
            }
          });
      }
    });
  };
  return (
    <div className="flex  justify-between items-center  gap-5 border-b pb-3 ">
      <div className="flex gap-3 flex-1 items-center">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12 md:w-16 md:h-16">
            <img
              src={photo}
              alt="Avatar Tailwind CSS Component"
              className="w-full"
            />
          </div>
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{type}</p>
        </div>
      </div>

      <div className="flex-1 text-center">
        <p className="font-bold">{price}</p>
      </div>

      <div className="  text-end">
        <button onClick={() => handleDeleteFromCart(_id)}>
          <ImCross className="text-red-500 " />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
