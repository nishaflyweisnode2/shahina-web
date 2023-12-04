/** @format */

import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { products } from "../../constants/products";
import ProductCard from "./ProductCard";
import {
  getAllBrands,
  getAllNutrition,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";
import Slider from "react-slick";

export const SkinType = () => {
  const [response, setResponse] = useState([]);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(response);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="SkinType_Container">
        <Slider {...settings} className="testimonial_slider" ref={sliderRef}>
          {response?.map((i, index) => (
            <div className="Testimonial-Box" key={index}>
              <h5> {i.userName} </h5>
              <p>{i.description}</p>
            </div>
          ))}
        </Slider>
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60 text-4xl"}
            type={item.name}
            link={`/skinTypeId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const ProductType = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
            link={`/productTypeId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Brands = ({ isBrand }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllBrands(setResponse);
  }, []);

  return (
    response && (
      <div
        className={`${
          isBrand
            ? "flex flex-shrink-0 justify-center px-10  gap-10"
            : "SkinType_Container"
        }`}
      >
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            isBrand={isBrand}
            styles={`${
              isBrand ? "w-60 h-60 text-2xl text-center" : "isBrand_container"
            }`}
            link={`/brandId/${item._id}/${item.name}`}
            largeCardType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const SkinConditions = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getSkinCondition(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
            link={`/skinConditionId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Nutrition = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllNutrition(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container ">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            nutritionType={item.name}
            link={`/nutritionId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Products = () => {
  return (
    <div className=" Five_Product_Container ">
      {products.map((item, id) => (
        <ProductCard
          key={id}
          src={item.src}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};
