/** @format */

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, LOGOUT } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuOptions from "./MenuOptions";
import { Store } from "react-notifications-component";
import { CartItems } from "../../store/cartSlice";
import MobileBar from "../Sidebar/MobileBar";
import { getCart } from "../../Repository/Api";
import { DummyCartItems } from "../../store/DummyCart";
import { ServiceItems } from "../../store/DummySerivce";
import SearchHeader from "../Search/SearchHeader";

const Navbar = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const myCart = useSelector(CartItems);
  const [dummyLength, setDummyLength] = useState(0);
  const [serviceLength, setServiceLength] = useState(0);
  const dummyItem = useSelector(DummyCartItems);
  const [isOpen, setIsOpen] = useState(false);
  const serviceItem = useSelector(ServiceItems);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart());
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      setCart(myCart);
    } else {
      setDummyLength(dummyItem?.length);
      setServiceLength(serviceItem?.length);
    }
  }, [isLoggedIn, myCart, dummyItem, serviceItem]);

  const length =
    (cart?.AddOnservicesSchema?.length || 0) +
    (cart?.frequentlyBuyProductSchema?.length || 0) +
    (cart?.gifts?.length || 0) +
    (cart?.products?.length || 0) +
    (cart?.services?.length || 0);

  const myLength = dummyLength + serviceLength;

  function LogoutHandler() {
    dispatch(LOGOUT());
    Store.addNotification({
      title: "",
      message: "Logged Out Successfully",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    navigate("/login");
  }

  const cartReturner = () => {
    return isLoggedIn ? (
      <div className="cartCountDiv">
        <Link to={"mycart"}>
          <FaShoppingCart
            className="text-2xl cursor-pointer"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span> {length} </span>
      </div>
    ) : (
      <div className="cartCountDiv">
        <Link to={"/appointment"}>
          <FaShoppingCart
            className="text-2xl cursor-pointer"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span> {myLength} </span>
      </div>
    );
  };

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="Nav_Bar" onMouseLeave={() => setIsOpen(false)}>
      <header className="Header">
        <div className="left">
          <Link to={"/"}>
            <img className="" src="/asessts/navbar/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="right-container">
          <img
            src="/asessts/navbar/search.png"
            style={{ cursor: "pointer" }}
            onClick={() => handleToggleOpen()}
            alt=""
          />

          <SearchHeader isOpen={isOpen} />

          {cartReturner()}
          {isLoggedIn === true ? (
            <div className="prof-container">
              <img
                src="/asessts/navbar/profile.png"
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/my-profile")}
              />
              <span
                className="text-secondary font-medium cursor-pointer"
                onClick={() => LogoutHandler()}
              >
                Logout
              </span>
            </div>
          ) : (
            <div className="prof-container">
              <img src="/asessts/navbar/profile.png" alt="" />
              <Link
                className="text-secondary font-medium"
                to={"/login"}
                style={{ cursor: "pointer" }}
              >
                <span style={{ fontSize: "20px" }}>LOGIN</span>
              </Link>
            </div>
          )}

          <Link to={"membership"}>
            <img src="/asessts/navbar/crown.png" alt="" />
          </Link>
        </div>
      </header>
      <div
        className="mx-auto mt-5 bigEmptyLine "
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
      <MenuOptions />

      <MobileBar />
    </div>
  );
};

export default Navbar;
