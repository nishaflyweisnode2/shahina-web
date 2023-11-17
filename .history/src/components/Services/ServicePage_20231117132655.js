/** @format */

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Pictures from "../home/Pictures";
import {
  addServiceInCart,
  getLimitedOffer,
  getSingleService,
} from "../../Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";
import Testimonials from "../PaymentPlans/Testimonials";
import { addServiceLocally } from "../../store/DummySerivce";
import OfferDrawer from "../Drawer/OfferDrawer";
import { motion } from "framer-motion";

const ServicePage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const quantity = 1;
  const [priceId, setPriceId] = useState("");
  const [size, setSize] = useState("");
  const [sizePrice, setSizeprice] = useState("");
  const [memberprice, setMemberPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [limitedOffer, setLimitedOffer] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [seasonOpen, setSeasonOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [ sizeOpen ,setSizeOpen ] = useState(false)

  useEffect(() => {
    getSingleService(id, setResponse);
    // window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (response?.multipleSize === true) {
      setPriceId(response?.sizePrice?.[0]?._id);
      setSize(response?.sizePrice?.[0]?.size);
      setSizeprice(response?.sizePrice?.[0]?.price);
      setMemberPrice(response?.sizePrice?.[0]?.mPrice);
    }
  }, [response]);

  function BackNavigation() {
    navigate(-1);
  }

  let payload;
  if (response?.multipleSize === true) {
    payload = {
      quantity,
      priceId,
      size,
      sizePrice,
      memberprice,
    };
  } else {
    payload = {
      quantity,
    };
  }

  const addToCart = async () => {
    if (isLoggedIn === true) {
      dispatch(addServiceInCart(id, payload, navigate));
    } else {
      const dummy = { id, payload };
      await dispatch(addServiceLocally(dummy));
      navigate("/appointment");
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  function fetchHandler() {
    getLimitedOffer(setLimitedOffer, "offer");
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  // ------------
  const handleToggleOpen = () => {
    setSeasonOpen(false);
    setIsOpen(!isOpen);
  };
  const handleToggleSeason = () => {
    setIsOpen(false);
    setSeasonOpen(!seasonOpen);
  };
  const handleToggleSeason = () => {
    setIsOpen(false);
    setSeasonOpen(!seasonOpen);
  };

  const TotolData = query
    ? response?.sizePrice?.filter((i) =>
        i?.size?.toLowerCase().includes(query?.toLowerCase())
      )
    : response?.sizePrice;

  console.log(TotolData);

  return (
    <>
      {" "}
      <OfferDrawer onClose={onClose} open={open} />
      <main className="service_details_page">
        <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
          <div>
            <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
            <p style={{ width: "50%" }}></p>
          </div>
          <p className="title" style={{ textTransform: "uppercase" }}>
            {response?.name}
          </p>
        </div>
        <div className="main_Img">
          <img src={response?.images?.[0]?.img} alt="" />
        </div>
        <div className="laser_heading">
          <p> {response?.name} </p>
        </div>
        <div className="content">
          <p className="desc">{response?.description}</p>
        </div>

        <div className="flex-container">
          {response?.benfit?.length > 0 && (
            <div className="list">
              <p> Treatment Benefits? </p>
              <ul>
                {response?.benfit?.map((i, index) => (
                  <li key={`Benefit${index}`}> {i} </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {response?.sizePrice?.length > 0 && (
              <div className="multiple-sizes" style={{ margin: 0 }}>
                <p> Select Size </p>
                <div className="Main">
                  {response?.sizePrice?.map((i, index) => (
                    <div
                      key={`multiple-sizes${index}`}
                      className={`box ${priceId === i._id ? "active" : ""} `}
                      onClick={() => {
                        setPriceId(i?._id);
                        setSize(i?.size);
                        setSizeprice(i?.price);
                        setMemberPrice(i?.mPrice);
                      }}
                    >
                      {i.size} {i.mPrice}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="drop_Down_Container">
          <button className="main_btn" onClick={handleToggleOpen}>
            Area :
            <svg
              className="Icon Icon--select-arrow"
              role="presentation"
              viewBox="0 0 19 12"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="17 2 9.5 10 2 2"
                fill-rule="evenodd"
                stroke-width="2"
                stroke-linecap="square"
              ></polyline>
            </svg>
          </button>
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
              zIndex: 200,
            }}
            transition={{ duration: 0.3 }}
            exit={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            className="animated_dropDown"
          >
            <div className="container">
              {response?.area?.map((i, index) => (
                <button
                  key={`Area${index}`}
                  onClick={() => setQuery(i?.substr(0, 2))}
                >
                  {" "}
                  {i}{" "}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="drop_Down_Container">
          <button className="main_btn" onClick={handleToggleSeason}>
            Session (s) :
            <svg
              className="Icon Icon--select-arrow"
              role="presentation"
              viewBox="0 0 19 12"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="17 2 9.5 10 2 2"
                fill-rule="evenodd"
                stroke-width="2"
                stroke-linecap="square"
              ></polyline>
            </svg>
          </button>
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            animate={{
              height: seasonOpen ? "auto" : 0,
              opacity: seasonOpen ? 1 : 0,
              zIndex: 200,
            }}
            transition={{ duration: 0.3 }}
            exit={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            className="animated_dropDown"
          >
            <div className="container">
              {response?.session?.map((i, index) => (
                <button
                  key={`Season${index}`}
                  onClick={() => setQuery(i?.substr(0, 2))}
                >
                  {" "}
                  {i}{" "}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="drop_Down_Container">
          <button className="main_btn" onClick={handleToggleSeason}>
            Session (s) :
            <svg
              className="Icon Icon--select-arrow"
              role="presentation"
              viewBox="0 0 19 12"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="17 2 9.5 10 2 2"
                fill-rule="evenodd"
                stroke-width="2"
                stroke-linecap="square"
              ></polyline>
            </svg>
          </button>
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            animate={{
              height: seasonOpen ? "auto" : 0,
              opacity: seasonOpen ? 1 : 0,
              zIndex: 200,
            }}
            transition={{ duration: 0.3 }}
            exit={{
              height: 0,
              opacity: 0,
              display: "none",
              zIndex: -100,
            }}
            className="animated_dropDown"
          >
            <div className="container">
              {TotolData?.map((i, index) => (
                <button
                  key={`Season${index}`}
                  onClick={() => {
                    setPriceId(i?._id);
                    setSize(i?.size);
                    setSizeprice(i?.price);
                    setMemberPrice(i?.mPrice);
                  }}
                >
                  {i.size} {i.mPrice}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {response?.beforeAfterImage && (
          <div className="center_img">
            <img src={response?.beforeAfterImage} alt="" />
          </div>
        )}
        <div className="laser_heading mt-5">
          <p></p>
          <button onClick={() => addToCart()}>Book Now</button>
        </div>

        {limitedOffer?.[0]?.bannerImage && (
          <div className="Limited_offer">
            <img
              src={limitedOffer?.[0]?.bannerImage}
              alt=""
              onClick={() => showDrawer()}
            />
          </div>
        )}

        <div className="Review_Title_Container ">
          <h1>Client Reviews</h1>
          <p>
            We are very proud of the service we provide and stand by every
            product we carry. We work hard to address our client's needs and
            have them leave our spa loving their skin. That's why over 400
            people have given us a 5-star rating on Google!
          </p>
          <img src="/asessts/google-review.png" />
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <Testimonials />
        </div>
        <Pictures />
      </main>
    </>
  );
};

export default ServicePage;