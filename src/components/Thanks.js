/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserOrder } from "../Repository/Api";

const Thanks = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const giftOrderId = id.split("-")?.[1];

  useEffect(() => {
    if (giftOrderId) {
      getUserOrder(giftOrderId, setData);
    }
  }, [giftOrderId]);

  const couponCode = data?.data?.coupanData?.code;

  return id === "failed" ? (
    <div className="Thanks_Container">
      <p className="desc">
        We apologize, but there was an issue processing your order. <br />
        Please check your payment details and try again. If the problem
        persists, contact customer support for assistance.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  ) : giftOrderId ? (
    <div className="Thanks_Container">
      <p className="title">Thank You for Your Gift Card Purchase!</p>
      <p className="desc">
        We look forward to serving you and hope to exceed your expectations.
      </p>
      <p className="desc">GIFT CARD CODE : {couponCode}</p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  ) : (
    <div className="Thanks_Container">
      <p className="title">Thank you for your order!</p>
      <p className="desc">
        Your order is confirmed. Please check your email for further
        information.
      </p>
      <Link to="/mycart" style={{ cursor: "pointer" }}>
        <button>RETURN TO CART</button>
      </Link>
    </div>
  );
};

export default Thanks;
