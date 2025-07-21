export const CustomSwiperSlide = ({ srcDesktop, srcMobile }) => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={srcMobile} />
      <source media="(min-width: 769px)" srcSet={srcDesktop} />
      <img
        src={srcDesktop}
        alt="Carousel Img"
        loading="lazy"
        className="swiper-slide"
      />
    </picture>
  );
};
