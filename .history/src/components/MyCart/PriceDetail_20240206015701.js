/** @format */

import React from "react";

const PriceDetail = ({
  subTotal,
  shipping,
  total,
  memberShip,
  memberShipPer,
  discount,
  pickupFromStore,
  deliveryAddresss,
}) => {
  return (
    <section className="py-6 px-8 border-2 border-black">
      <h3 className="font-bold text-primary text-xl ">PRICE DETAILS</h3>
      <hr className="w-full h-0.5 my-6 bg-black" />
      <div className="flex flex-col gap-5 text-lg my-8">
        <p className="flex justify-between items-center ">
          Sub Total<span className="font-semibold ">${subTotal} </span>
        </p>
        <p className="flex justify-between items-center ">
          Discount<span className="font-semibold ">${discount} </span>
        </p>
        <p className="flex justify-between items-center ">
          Shipping<span className="font-semibold ">${shipping} </span>
        </p>
        <p className="flex justify-between items-center">
          Gold Membership {memberShipPer}% Discount{" "}
          <span className="text-green font-semibold">${memberShip} </span>
        </p>
      </div>
      <h4 className="text-xl my-2 font-bold">Select Delivery Option</h4>
      <div className="flex justify-between gap-2  my-5">
        <div className="relative flex gap-1 px-3 py-2 border-2">
          <input
            className="absolute top-2 w-6  checked:accent-green h-6 left-2"
            id="doorstep"
            type="radio"
            name="option"
            value={"doostep"}
            checked={pickupFromStore === false ? true : false}
          />
          <label htmlFor="doorstep">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-12 stroke-green fill-green"
                src="/asessts/truck.svg"
                alt="truck"
              />
              <span className="text bold  text-xl font-bold">
                Doorstep Delivery
              </span>
              <p className="text-sm">*Includes Shipping Charges</p>
            </div>
          </label>
        </div>

        <div className="relative flex gap-1 px-3 py-2 border-2">
          <input
            className="absolute top-2 w-6  checked:accent-green h-6 left-2"
            id="store"
            type="radio"
            name="option"
            value={"store"}
            checked={pickupFromStore === true ? true : false}
          />
          <label htmlFor="store">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-12 stroke-green fill-green"
                src="/asessts/store location.svg"
                alt="store"
              />
              <span className="text bold text-xl font-bold">
                Pickup from Store
              </span>
              <p className="text-sm">*No Shipping Charges</p>
            </div>
          </label>
        </div>
      </div>
      <h3 className="text-xl font-medium">Delivery Location:</h3>
      <p className="text-lg font-normal my-3">
        {" "}
        {deliveryAddresss ? deliveryAddresss : "Not Given Yet"}{" "}
      </p>

      <div className="font-semibold text-2xl flex justify-between border-black border-t-2 py-8 border-b-2 my-8">
        <span className="">Total Amount</span>
        <span>${total} </span>
      </div>
      <p className="text-base font-semibold text-green">
        {discount > 0 && (
          <span>
            you will save <span className="text-xl">$200</span> on this order
          </span>
        )}
      </p>
      <div className="flex gap-2 items-center mt-14">
        <img
          className="w-6 h-6"
          src="/asessts/safeAndSecure.svg"
          alt="safe and secure"
        />
        <p>Safe & Secure Payments. 100% Authentic Products.</p>
      </div>
    </section>
  );
};

export default PriceDetail;
