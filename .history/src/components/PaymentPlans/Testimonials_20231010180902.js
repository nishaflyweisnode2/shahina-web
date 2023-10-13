/** @format */

import React, { useEffect, useRef, useState } from "react";
import { getReviews } from "../../Repository/Api";
import ReviewCard from "../home/ReviewCard";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Testimonials = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getReviews(setResponse);
  }, []);
  const cardContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        Testimonials
      </h1>
      <p className="text-center mb-5 tetx-lg">
        Don’t just take our word for it! Here’s what other patients have to say
        about Cherry…
      </p>
      <div
        className="grid grid-flow-col gap-3 p-5 overflow-x-scroll no-scrollbar w-full"
        ref={cardContainerRef}
      >
      
      {response?.map((i ,index) =>  
        <ReviewCard   />
      )}
        <ReviewCard />
      </div>
      <div className="flex gap-2 w-32 mx-auto my-5">
        <img
          onClick={() => handleScroll(-100)}
          src="/asessts/leftArrow.svg"
          alt="left"
        />
        <img
          onClick={() => handleScroll(100)}
          src="/asessts/rightArrow.svg"
          alt="right"
        />
      </div>
    </div>
  );
};

export default Testimonials;