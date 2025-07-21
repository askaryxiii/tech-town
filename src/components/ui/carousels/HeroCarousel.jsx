import { lazy, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { CustomSwiperSlide } from "./CustomSwiperSlide";
import srcDesktop from "../../../assets/Carousel Images/carousel.jpg";
import srcMobile from "../../../assets/Carousel Images/carousel-sm.jpg";

export const HeroCarousel = () => {
  return (
    <>
      <Swiper
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="">
        <SwiperSlide>
          <CustomSwiperSlide srcDesktop={srcDesktop} srcMobile={srcMobile} />
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide srcDesktop={srcDesktop} srcMobile={srcMobile} />
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide srcDesktop={srcDesktop} srcMobile={srcMobile} />
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide srcDesktop={srcDesktop} srcMobile={srcMobile} />
        </SwiperSlide>
        <SwiperSlide>
          <CustomSwiperSlide srcDesktop={srcDesktop} srcMobile={srcMobile} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
