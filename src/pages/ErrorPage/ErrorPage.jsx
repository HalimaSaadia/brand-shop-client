import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card max-w-[390px]  bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src="https://media.istockphoto.com/id/1200474333/photo/lifebuoy-404.webp?b=1&s=170667a&w=0&k=20&c=Yf0ZquiZuKEB-Y0iX0-gIHwNtPK01VrAfgTWFwsvubk="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl font-bold">Ooops!</h2>
          <p className="text-2xl">Page Not Found</p>
          <div className="card-actions">
            <Link to="/"><button className="btn bg-[#E74C3C] text-white hover:text-black">Go Back To Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
