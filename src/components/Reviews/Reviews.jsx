import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "./reviews.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Rating from "react-rating";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";



export default function Reviews() {
  return (
    <div className="my-10 overflow-hidden ">
        <SectionHeading text="Our Happy Client"/>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10 ">

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper swiperReview w-56 md:w-72 swiperReview "
        >
          <SwiperSlide className="swiperSlide swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Emily Johnson</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.5}
                />
                <p className="text-sm font-normal">
                  I absolutely love this product! The quality is top-notch, and
                  the customer service is outstanding.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Michael Smith</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.3}
                />
                <p className="text-sm font-normal">
                  This product has exceeded my expectations in every way. It's
                  very easy to use, and I've already recommended it to several
                  friends.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Sophia Davis</h1>
                <Rating
                  readonly
                  emptySymbol={<AiFillStar />}
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.6}
                />
                <p className="text-sm font-normal">
                  I'm so happy I found this product! It's made a huge difference
                  in my life, and I can't imagine being without it now.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper swiperReview w-56 md:w-72 swiperReview"
        >
          <SwiperSlide className="swiperSlide w-">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Olivia Wilson</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.5}
                />
                <p className="text-sm font-normal">
                  The quality of this product is incredible! I've tried similar
                  products before, but this one is by far the best
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://plus.unsplash.com/premium_photo-1669882305300-38b609862bee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">James Brown</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.7}
                />
                <p className="text-sm font-normal">
                  The quality of this product is incredible! I've tried similar
                  products before, but this one is by far the best.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Ava Smith</h1>
                <Rating
                  readonly
                  emptySymbol={<AiFillStar />}
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.6}
                />
                <p className="text-sm font-normal">
                  I was skeptical at first, but this product has truly exceeded
                  my expectations. I'm so glad I decided to give it a try!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper swiperReview w-56 md:w-72 swiperReview lg:col-span-2 md:mt-10 xl:mt-0 xl:col-span-1"
        >
          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhciUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">William Johnson</h1>
                <Rating
                  readonly
                  emptySymbol={<AiFillStar />}
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.5}
                />
                <p className="text-sm font-normal">
                  This product is a game-changer! It's made my life so much
                  easier, and I can't imagine being without it.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwcGVvcGxlfGVufDB8fDB8fHww" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Emma Miller</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.7}
                />
                <p className="text-sm font-normal">
                I can't believe how much of a difference this product has made in my life. It's worth every penny!
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiperSlide">
            <div className="border grid justify-center items-center h-full">
              <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhciUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Noah Davis</h1>
                <Rating
                  readonly
                  emptySymbol={
                    <AiFillStar />
                   
                  }
                  fullSymbol={<AiFillStar className="text-[#E74C3C]" />}
                  initialRating={4.7}
                />
                <p className="text-sm font-normal">
                I'm so impressed with the quality of this product. I've recommended it to all of my friends and family members
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}
