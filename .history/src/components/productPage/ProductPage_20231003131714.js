import React from "react";
import ServiceHead from "../Services/ServiceHead";
import { BiSearch } from "react-icons/bi";
import { PRODUCTS_HEADER_IMAGE } from "../../constants/products";
import AllProducts from "./AllProducts";
import Options from "./Options";

const skintype = [
  "All Skin Types",
  "Aging",
  "Dry",
  "Normal",
  "Oily",
  "Sensitive",
];
const productType = ["Moisturizer", "Cleanser", "Toner"];
const skinConditions = ["Aging", "Pigmentation", "Rosacea", "Sensitive"];
const ProductPage = () => {
  return (
    <section>
      <ServiceHead img={PRODUCTS_HEADER_IMAGE} title={"DMK Products"} />

      <div className=" relative max-w-screen">
      <img
        className="w-full h-[26rem] object-cover"
        src={img}
        alt="service cover"
      />
      <div className="absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-25  justify-around">
        <h1 className="text-6xl text-white text-center  z-50 font-light">
          {title}
        </h1>
        {button && (
          <button className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary">
            {button}
          </button>
        )}
      </div>
      <div
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer top-24 left-12"
      >
        <img src="/asessts/back-button.svg" alt="back-button" />
      </div>
    </div>

    
      <section>
        <div className="relative">
          <h1 className="text-4xl text-center font-medium text-primary my-20">
            ALL PRODUCTS
          </h1>
          <div className="absolute top-0 right-12 flex gap-5 items-center text-xl border-b-2 pb-2   w-80 border-b-primary text-primary">
            <BiSearch className="text-3xl" />
            <input
              className="px-2"
              type="text"
              placeholder="Search Products...."
            />
          </div>
        </div>

        <div className="flex flex-shrink-0 justify-between items-start">
          <div className=" w-[30%] px-12 py-4">
            <Options type={"SKIN TYPE"} options={skintype} />
            <Options type={"PRODUCT TYPE"} options={productType} />
            <Options type={"SKIN CONDITION"} options={skinConditions} />
          </div>
          <div className="w-full border-l-2 border-l-primary mb-20">
            <AllProducts />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;