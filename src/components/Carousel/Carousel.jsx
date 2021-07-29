import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination,  Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/thumbs/thumbs.min.css";

// install Swiper modules

SwiperCore.use([Navigation,  Autoplay, Pagination]);

function Carousel({ data, compoment: Component, slideClassName, className, wrapperStartClassName, uniqueKeyProp }) {
  return (
    <Swiper
    style={{
      "--swiper-navigation-color": "#3DC8B8",
      "--swiper-pagination-color": "#3DC8B8",
    }}
    spaceBetween={5}
    roundLengths={true}
    slidesPerView={3}
    pagination={{ clickable: true }}
    centeredSlides={true}
    loop={true}
    loopAdditionalSlides={30}
    initialSlide={2}
    breakpoints={{
       
        200:{
            slidesPerView: 1,
            spaceBetween:10 
        },
         // when window width is >= 640px
         640: {
            slidesPerView: 2,
            spaceBetween:10
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween:10
          },
      }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    className={className}>
     <span slot="container-start" className={wrapperStartClassName} ></span>
      {data &&
        data.map((props, i) => (
          <SwiperSlide key={`${props[uniqueKeyProp]}${i}`} className={slideClassName}>
              {({ isActive }) => (
                  <Component {...props }  isActive={isActive} />
              )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Carousel;
