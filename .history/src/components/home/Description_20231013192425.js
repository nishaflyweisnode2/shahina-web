/** @format */

import React, { useEffect, useState } from "react";
import DescriptionView from "./DescriptionView";
import { getLimitedOffer } from "../../Repository/Api";

const Description = () => {
  const [response, setResponse] = useState([]);
  const [ partners , setPartner ] = useState([])

  function fetchHandler() {
    getLimitedOffer(setResponse, "product");

  }

  useEffect(() => {
    fetchHandler();
    getLimitedOffer(setPartner, "Partner");
  }, []);




  return (
    <section className="MaxComponent">
      {response?.[0] && (
        <DescriptionView
          src={response?.[0]?.bannerImage}
          title={response?.[0]?.bannerName}
          content={response?.[0]?.title}
          desc={response?.[0]?.desc}
          btnName="EXPLORE PRODUCTS"
          link={"/shop"}
        />
      )}

      {partners?.[1] && (
        <DescriptionView
          src={partners?.[1]?.bannerImage}
          title={partners?.[1]?.bannerName}
          content={partners?.[1]?.title}
          desc={partners?.[1]?.desc}
          btnName={"VIEW MORE"}
          styles={"mb-6 text-left"}
          reverse={"flex-row-reverse"}
          link={"/aboutus"}
        />
      )}

      {partners?.[0] && (
        <DescriptionView
          src={partners?.[0]?.bannerImage}
          title={partners?.[0]?.bannerName}
          desc={partners?.[2]?.title}
          desc1={partners?.[2]?.desc}
        />
      )}
    </section>
  );
};

export default Description;
