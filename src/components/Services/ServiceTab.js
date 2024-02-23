/** @format */

import React, { useEffect, useState } from "react";
import Services from "../home/Services";
import { useNavigate, useParams } from "react-router-dom";
import { getLimitedOffer } from "../../Repository/Api";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";

const ServiceTab = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  const isLoggedIn = useSelector(isAuthenticated);

  useEffect(() => {
    getLimitedOffer(setResponse, "servicePage");
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section>
      {response?.[0] && (
        <div className="relative_product_container">
          <img
            className="full_Image"
            src={response?.[0]?.serviceImage?.[0]}
            alt=""
          />
          <div className="content">
            {isLoggedIn ? (
              <button
                className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary "
                onClick={() => navigate("/schedule1")}
              >
                BOOK ONLINE
              </button>
            ) : (
              <button
                className="w-52 mx-auto py-2 text-lg font-semibold z-50  bg-secondary text-primary "
                onClick={() => navigate("/appointment")}
              >
                BOOK ONLINE
              </button>
            )}
          </div>
          <div className="Image">
            <img
              src="/asessts/back-button.svg"
              alt=""
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      )}

      <Services name={name} />
    </section>
  );
};

export default ServiceTab;
