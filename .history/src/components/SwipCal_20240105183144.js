/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const SwipCal = () => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 7,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
  };

  const stlCont = {
    padding: "20px",
  };

  const dates = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div style={stlCont}>
      <Swiper
        {...swiperConfig}
        pagination={true}
        modules={[Pagination, Autoplay, Keyboard]}
      >
        {dates?.map((item, i) => (
          <SwiperSlide key={i}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipCal;
