/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const IndivisualAppointment = () => {
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
            <input type="text" placeholder="Enter Your First Name" />
          </div>


          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter Your First Name" />
          </div>


          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter Your First Name" />
          </div>
        </form>
      </div>
    </>
  );
};

export default IndivisualAppointment;
