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
            <ul>
                <li>FEATURED</li>
                <li>FEATURED</li>
                <li>FEATURED</li>
                <li>FEATURED</li>
            </ul>
        </div>
        <div className="right_div"></div>
      </div>
    </>
  );
};

export default Schedule1;
