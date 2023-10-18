import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {FiEdit} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Details = () => {
    const product = useLoaderData()
    const { brandName, description, name, photo, price, rating, type } = product;
    console.log(product)
  return (
    <div className="my-10 pb-10 ">
      <div className="card rounded-none lg:card-side bg-base-100 shadow-xl ">
        <figure className="lg:w-1/2">
          <img
            src={photo}
            alt="Album"
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <h3 className="text-xl font-bold">Brand: {brandName}</h3>
        <p>{description}</p>
        <p className="font-bold">Price: ${price}</p>
        <p className="font-semibold">category: {type}</p>
        <p className="font-semibold">Rating: {rating}</p>
     
        ,
        <div className="card-actions">
         <Link to={`/details/${product._id}`}> <button className="btn bg-[#E74C3C] text-white hover:text-black"><AiOutlineShoppingCart /> Add To Cart</button></Link>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
