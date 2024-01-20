/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordChanged = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [3000]);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="forget-password">
      <p className="title">Your Password has been Changed Succesfully!</p>
      
    </div>
  );
};

export default PasswordChanged;