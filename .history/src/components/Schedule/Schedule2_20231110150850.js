/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import Calendar from "react-calendar";
import {
  getAllSlot,
  getCart,
  getContactDetails,
  TimeandSlot,
} from "../../Repository/Api";
import { Store } from "react-notifications-component";

const Schedule2 = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [response, setResponse] = useState([]);

  const getHandler = () => {
    getAllSlot(setResponse);
  };

  useEffect(() => {
    getHandler();
  }, []);

  console.log(response);

  const payload = { date, time };

  const submitHandler = () => {
    if (date && time) {
      TimeandSlot(payload, navigate);
    } else {
      Store.addNotification({
        title: "",
        message: "Select Date and Time",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  function BackNavigation() {
    navigate(-1);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchCart = () => {
    getCart(setCart);
  };

  useEffect(() => {
    fetchCart();
    getContactDetails(setContact);
  }, []);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 2 OF 3</p>
        </div>
        <p className="title">Select Time & Slot</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <Calendar
            onChange={(selectedDate) => setDate(formatDate(selectedDate))}
          />

          <p className="title">Select Slot</p>

          <div className="Box" style={{ alignItems: "center" }}>
            {response?.map((i, index) => (
              <div className="Item" key={index}>
                <input
                  type="radio"
                  name="slot"
                  value={i.from - i.to}
                  onClick={(e) => setTime(e.target.value)}
                  style={{ marginTop: "5px" }}
                />

                <div className="description-box" style={{ width: "100%" }}>
                  <p className="title">
                    {" "}
                    {i.from} - {i.to}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src={contact?.image} alt="" />
              <div>
                <p className="title"> {contact?.name} </p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> ({contact?.ratings}) </span>
                </span>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p> {contact?.phone} </p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p> {contact?.email} </p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p> {contact?.instagram} </p>
                </div>
              </div>
            </div>
            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  {contact?.address}
                </p>
              </div>
            </div>

            <a href={contact?.mapLink} target="_blank">
              <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
            </a>

            {/* Service */}
            {cart?.services?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.serviceId?.name} </p>
                  <p className="head">
                    {" "}
                    $
                    {i?.serviceId?.discountActive === true
                      ? i?.serviceId?.discountPrice
                      : i?.serviceId?.price}{" "}
                  </p>
                </div>
              </div>
            ))}

            {/* Ad on Service */}
            {cart?.AddOnservicesSchema?.map((i, index) => (
              <div className="Items" key={index}>
                <div className="two-div">
                  <p className="head"> {i?.addOnservicesId?.name} </p>
                  <p className="head"> ${i.addOnservicesId?.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="book" onClick={() => submitHandler()}>
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Schedule2;