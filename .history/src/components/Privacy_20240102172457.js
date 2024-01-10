/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { View_description } from "../Helper/Herlper";
import { getPrivacyPolicy } from "../Repository/Api";

const Privacy = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    getPrivacyPolicy(setResponse);
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
          Privacy Policy
        </p>
      </div>

      {response && (
        <div className="content privacy_policy" style={{ padding: "20px" }}>
          {response?.map((i, index) => (
            <p className="desc" key={index}>
              <View_description description={i.privacy} />
            </p>
          ))}
        </div>
      )}
    </main>
  );
};

export default Privacy;
