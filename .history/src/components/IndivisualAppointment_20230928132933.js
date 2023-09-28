/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndivisualAppointment = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Individual Appointment</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
          Enter your Details to continue with Individual Appointment{" "}
        </p>

        <form>
          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter Your First Name" />
          </div>

          <div>
            <p>Last Name</p>
            <input type="text" placeholder="Enter Your Last Name" />
          </div>

          <div>
            <p>Email</p>
            <input type="text" placeholder="Enter your Email ID" />
          </div>

          <div>
            <p>Contact Number</p>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your 10-Digit Phone Number"
            />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input type="date" />
          </div>

          <div className="check">
            <input type="checkbox" onClick={() => setShow(!show)} />
            <div>
              <p className="title">Create Profile</p>
              <p className="desc">Mark the Checkbox to Create new Profile </p>
            </div>
          </div>

          {show ? (
            <div>
              <p>Enter New Password</p>
              <input type="password" placeholder="Enter Your New Password" />
            </div>
          ) : (
            ""
          )}

          <div>
              <p>Select </p>
              <input type="password" placeholder="Enter Your New Password" />
            </div>


        </form>
      </div>
    </>
  );
};

export default IndivisualAppointment;
