/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewDescription } from "../Helper/Herlper";
import { getShippingPrivacy } from "../Repository/Api";

const ShippingPrivacy = () => {
  const [shippingPrivacy, setShippingPrivacy] = useState();
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getShippingPrivacy(setShippingPrivacy);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
          Shipping Privacy
        </p>
      </div>

      <div className="content privacy_policy" style={{ padding: "20px" }}>
        <ViewDescription description={shippingPrivacy} />
      </div>
    </main>
  );
};

export default ShippingPrivacy;
