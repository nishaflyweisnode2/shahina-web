/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Schedule1 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <ul className="Menu_List">
            <li tabIndex={0} active>FEATURED</li>
            <li>BODY </li>
            <li>TREATMENTS</li>
            <li>CONSULTATIONS</li>
            <li>FACIALS</li>
          </ul>

          <p className="title">Featured Services</p>

          <div className="Box">
            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">RF NEEDLING</p>
                <p className="desc">1 Hour</p>
              </div>

              <div className="price-Box">
                <p className="title">Starting from $499</p>
                <p className="desc">2 ADD-ONS AVAILABLE</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">JetPeel Facial</p>
                <p className="desc">1 Hour</p>
              </div>

              <div className="price-Box">
                <p className="title">$499</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">Microneedling</p>
                <p className="desc">1 Hour</p>
                <ul>
                  <li>Fine lines & Wrinkles are Softened</li>
                  <li> Skin is tightened & thickend </li>
                  <li> Elastin & Colagen Restores </li>
                  <li> Acne Scarring is Reduced </li>
                  <li> Stretch Marks are Improved </li>
                </ul>
              </div>

              <div className="price-Box">
                <p className="title">Starting from $499</p>
                <p className="desc">2 ADD-ONS AVAILABLE</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">RF NEEDLING</p>
                <p className="desc">1 Hour</p>
              </div>
              <div className="price-Box">
                <p className="title">Starting from $499</p>
                <p className="desc">2 ADD-ONS AVAILABLE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_div"></div>
      </div>
    </>
  );
};

export default Schedule1;
