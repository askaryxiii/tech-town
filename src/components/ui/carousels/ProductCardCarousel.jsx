import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../../index.css";
import { Scrollbar } from "swiper/modules";

export const ProductCardCarousel = ({ imgs }) => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper rounded-2xl">
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              className=""
              loading="lazy"
              src={`http://localhost:1337${img.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
