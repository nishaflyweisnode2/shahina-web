/** @format */

import React, { useEffect, useState } from "react";
import { getReviews } from "../../Repository/Api";
import { ViewDescription } from "../../Helper/Herlper";

// Import necessary Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

const Testimonials = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getReviews(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    response?.length > 0 && (
      <div className="testimonial_container">
        <Swiper
          {...swiperConfig}
          pagination={true}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {response?.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="Testimonial-Box">
                <h5>{i.userName}</h5>
                <ViewDescription description={i.description} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default Testimonials;
