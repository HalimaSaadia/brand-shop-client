import React from "react";

const HomePageBanner = () => {
  return (

      <div
        className="hero min-h-[550px] my-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1629)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl mx-auto ">
            <h1 className="mb-5 text-5xl font-bold max-w-3xl mx-auto">Gadgets Unleashed: Elevate Your Tech Game!</h1>
            <p className="mb-5">
            tep into the world of cutting-edge technology and empower your lifestyle with our premium selection of phones, cameras, and watches. Capture every moment in stunning detail, connect seamlessly with your world, and conquer your goals with unparalleled precision. Whether you're a photography enthusiast, a tech-savvy individual, or a fitness fanatic, we've got the perfect gadgets to elevate your experience. Embrace the future of innovation and gear up for greatness with us.
            </p>
            
          </div>
        </div>
      </div>

  );
};

export default HomePageBanner;
