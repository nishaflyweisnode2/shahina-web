/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews } from "../../Repository/Api";
import { ViewDescription } from "../../Helper/Herlper";
import { ImageLazyLoading } from "../../utils/helpingComponent";

const OneNews = () => {
  const { id } = useParams();

  const [response, setResponse] = useState([]);


  const fetchHandler = useCallback(() => {
    getSingleNews(setResponse, id);
  },[id])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const getKeywords = () => {
    if (response?.keyWords) {
      return response?.keyWords?.map(
        (i, index) => i && <button key={`keywords${index}`}> {i} </button>
      );
    }
  };

  return (
    <section
      className="MaxComponent All_News_Page"
      style={{ marginBottom: "40px" }}
    >
      <div className="gap-3  mx-auto  All_News_Page">
        <section className="p-3">
          <div className="my-2">
            <h3 className="my-6 font-medium text-3xl text-primary news-heading">
              {response.title}
            </h3>
            <ImageLazyLoading
              className={"thumb_image"}
              alt={response.title}
              img={response.image}
            />

            <ViewDescription description={response?.description} />
            <div className="keyword_cont">{getKeywords()}</div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OneNews;
