"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation, Autoplay } from "swiper/modules";
import ArticleCard from "../articleCard/ArticleCard";

const ArticleSlide = ({ articles }) => {
  if (!articles) return null;
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <ArticleCard key={article.id} article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ArticleSlide;
