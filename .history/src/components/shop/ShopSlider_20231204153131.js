/** @format */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getSkinType } from "../../Repository/Api";
import ItemCard from "./ItemCard";

export const SkinTypeSlider = () => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    response && (
      <>
             <div style={{ overflow: "hidden" }}>
       <Slider {...settings} >

          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              styles={"w-80 h-80 text-4xl"}
              type={item.name}
              link={`/skinTypeId/${item._id}/${item.name}`}
            />
          ))}
        </div>
       </Slider>
      
      </>
    )
  );
};
