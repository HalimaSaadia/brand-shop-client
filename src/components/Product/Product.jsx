import { FiEdit } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Product = ({ product }) => {
  const { brandName, description, name, photo, price, rating, type } = product;
  return (
    <div className="card rounded-none  bg-base-100 shadow-xl">
      <figure className="w-full">
        <img src={photo} alt="Album" className="h-52 w-full object-cover " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <h3 className="text-xl font-bold">Brand: {brandName}</h3>
        <p className="font-bold">Price: ${price}</p>
        <p className="font-semibold">category: {type}</p>
        <p className="font-semibold">Rating: {rating}</p>

        <Rating
          readonly
          emptySymbol={
            <AiFillStar />
            // <img src="assets/images/star-grey.png" className="icon" />
          }
          fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
          initialRating={rating}
        />
        <div className="card-actions">
          <Link to={`/details/${product._id}`}>
            {" "}
            <button className="btn bg-[#E74C3C] text-white hover:text-black">
              <CgDetailsMore /> Details
            </button>
          </Link>
          <Link to={`/update/${product._id}`}>
            <button className="btn bg-[#2B3440] text-white hover:text-black">
              <FiEdit /> Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
