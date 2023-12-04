/** @format */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getProductType, getSkinType } from "../../Repository/Api";
import ItemCard from "./ItemCard";

export const SkinTypeSlider = () => {
  const [response, setResponse] = useState([]);
  
  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);


  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
        <div style={{ overflow: "hidden", maxWidth: "1400px", margin: "auto" }}>
          <Slider {...settings}>
            {response?.map((item, i) => (
              <ItemCard
                key={i}
                src={item.image}
                styles={"w-80 h-80 text-4xl"}
                type={item.name}
                link={`/skinTypeId/${item._id}/${item.name}`}
              />
            ))}
          </Slider>
        </div>
      </>
    )
  );
};

export const ProductTypeSlider = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
      <div style={{ overflow: "hidden", maxWidth: "1400px", margin: "auto" }}>
        <Slider {...settings}>
          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              styles={"w-60 h-60"}
              baseType={item.name}
              link={`/productTypeId/${item._id}/${item.name}`}
            />
          ))}
        </Slider>
      </div>
    )
  );
};


