"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import EventCard from "../eventCard/EventCard";

const EventSlide = ({ events }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} >
            <EventCard  key={event.id} event={event} isVisible={true}/>
          </SwiperSlide>
        ))}
      
      </Swiper>
    </>
  );
};

export default EventSlide;
