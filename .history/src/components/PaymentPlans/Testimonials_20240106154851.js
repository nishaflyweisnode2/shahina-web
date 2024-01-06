/** @format */

import React, { useEffect, useState } from "react";
import { getReviews } from "../../Repository/Api";
import { View_description } from "../../Helper/Herlper";

// Import necessary Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [response, setResponse] = useState([]);
  const [isAutoplay, setIsAutoPlay] = useState(true);
  const [autoplayConfig, setAutoPlayConfig] = useState({
    delay: 100,
    disableOnInteraction: false,
  });

  function fetchHandler() {
    getReviews(setResponse);
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (isAutoplay === false) {
      setAutoPlayConfig(false);
    } else {
      setAutoPlayConfig({
        delay: 100,
        disableOnInteraction: false,
      });
    }
  }, [isAutoplay]);

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    response?.length > 0 && (
      <div
        className="testimonial_container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          pagination={true}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={autoplayConfig}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {response?.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="Testimonial-Box">
                <h5>{i.userName}</h5>
                <View_description description={i.description} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Slider {...settings} className="Slider_Here">
          {response?.map((i, index) => (
            <div className="Testimonial-Box" key={index}>
              <h5>{i.userName}</h5>
              <View_description description={i.description} />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default Testimonials;
