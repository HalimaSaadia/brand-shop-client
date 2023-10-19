import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageBrand = ({ brand, theme }) => {
  const { brandName, brandImage } = brand;
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/products/${brandName}`)} className={`card p-0 bg-base-100 shadow-xl  image-full hover:cursor-pointer `}>
      <figure>
        <img src={brandImage} alt="Shoes" className="object-top" />
      </figure>
      <div className="card-body p-0 justify-end items-center ">
        <div className="w-full text-center bg-[#2B3440] rounded-b-lg ">
          <h2 className=" text-4xl py-2  text-white">
            {brandName.toUpperCase()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePageBrand;
