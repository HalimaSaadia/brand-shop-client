import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";
import Rating from "react-rating";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Details = () => {
  const product = useLoaderData();
  const { brandName, description, name, photo, price, rating, type } = product;

  const handleAddToCart = () => {
    const cartItem = {
      photo,
      brandName,
      name,
      type,
      price,
      description,
      rating,
    };

    fetch("https://10-brand-shop-server-six.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added To Cart Successfully",
            icon: "success",
          });
        }

      });
  };
  return (
    <div className="my-10 pb-10 px-3 md:px-10">
      <SectionHeading text={`All about ${name}`} />
      <div className="card lg:max-h-[500px] justify-between rounded-none lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={photo} alt="Album" className="h-full md:h-[300px] lg:h-full  w-full" />
        </figure>
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="card-body ">
              <h2 className="card-title font-bold text-2xl">{name}</h2>
              <h3 className="text-xl font-bold">Brand: {brandName}</h3>
              <p>{description}</p>
              <p className="font-bold">Price: ${price}</p>
              <p className="font-semibold">category: {type}</p>
              <p className="font-semibold ">Rating: {rating}</p>

              <Rating
                readonly
                emptySymbol={<AiFillStar />}
                fullSymbol={<AiFillStar className="text-[#E74C3C] " />}
                initialRating={rating}
              />
            </div>
          </div>

          <div className="w-full">
            <button
              onClick={handleAddToCart}
              className="btn rounded-t-none lg:rounded-none  bg-[#E74C3C] w-full  text-white hover:text-black"
            >
              <AiOutlineShoppingCart /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
