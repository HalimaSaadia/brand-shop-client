import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

const ProductsPageSlider = () => {
  const loadedData = useLoaderData()

  const [sliders, setSliders] = useState(loadedData);

  if(sliders.length){
    return (
      <div className="my-10">
         <Swiper
         style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[300px] md:h-[500px] w-full"
        >
          
          {sliders.map(slider =>  <SwiperSlide className={`bg-no-repeat bg-cover `} style={{
              'background-image':`url(${slider.sliderBackground})`,
            }}>
              
          <div className="flex h-full justify-center items-center md:p-10 hero-overlay bg-center ">
            <h1 className="text-xl md:text-4xl text-white font-bold text-center md:px-10">{slider.content}</h1>
          </div>
        
          </SwiperSlide>)}
         
    
          
        </Swiper>
      </div>
    );
  }

 
};

export default ProductsPageSlider;
