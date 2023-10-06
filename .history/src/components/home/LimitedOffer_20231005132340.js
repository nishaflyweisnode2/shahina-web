/** @format */

import React, { useState } from "react";
import { getLimitedOffer } from "../../Repository/Api";
import OfferDrawer from "../Drawer/OfferDrawer";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const [ response , setResponse ] = useState([])

  function fetchHandler () {
    getLimitedOffer(setResponse ,'offer')
  }

  useE

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <OfferDrawer onClose={onClose} open={open}  />
      <div className="Limited_offer">
        <img src="/Image/24.png" alt="" onClick={() => showDrawer()} />
      </div>
    </>
  );
};

export default LimitedOffer;