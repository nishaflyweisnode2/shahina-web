/** @format */

import React, { useEffect, useState } from "react";
import { Header } from "../../utils/helpingComponent";
import { BiSearch } from "react-icons/bi";
import { getIngredeints } from "../../Repository/Api";

// --chnages
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ingredients = ["COSMETICS", "FOOD INGREDIENTS", "BIRTH CONTROL"];

const CheckIngredients = () => {
  const [selected, setSelected] = useState("COSMETICS");
  const [response, setResponse] = useState([]);
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    getIngredeints(selected, setResponse);
  }, [selected]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const isEmpty = Object.keys(response).length === 0;

  // ---
  const items = response?.map((i) => i.name);

  function clearPast() {
    setValue("");
    setIsMatched(false);
  }

  const [value, setValue] = useState(
    "<p><span>Please insert ingredients here.....</span></p>"
  );

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
  };

  const highlightWords = () => {
    const pattern = new RegExp(items?.join("|"), "gi");
    const matches = value?.match(pattern);
    if (matches) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
    const highlighted = value?.replace(
      pattern,
      (match) => `<span style="color: red;">${match}</span>`
    );
    setValue(highlighted);
  };

  return (
    <section className="bg-primary">
      <Header
        heading={"Check Ingredients"}
        styles={"font-light text-secondary"}
      />

      <main className="flex gap-24 justify-center pb-32 Check_Ingredeints">
        <div className="w-[54rem] left_container ">
          <ul className="flex  justify-between my-6 list">
            {ingredients?.map((list, index) => (
              <li
                className={`${
                  selected === list
                    ? "text-secondary font-extrabold"
                    : "font-medium text-white"
                } whitespace-nowrap text-secondary w-48  text-2xl cursor-pointer flex justify-center `}
                onClick={() => setSelected(list)}
                key={index}
              >
                {list}
              </li>
            ))}
          </ul>

          <div
            className={`w-full flex ${
              selected === "FOOD INGREDIENTS"
                ? "items-center"
                : selected === "BIRTH CONTROL"
                ? "items-end"
                : "items-start"
            } flex-col rounded-full h-1.5 bg-lighterGray`}
          >
            <div
              className={`transition-all duration-700 ease-linear translate-[50%] h-1.5 rounded-full bg-secondary w-52`}
            ></div>
          </div>

          <p className="text-xl text-white font-normal line-clamp-4 my-16">
            If you have acne-prone skin, you need to check skincare, haircare,
            and makeup products for comedogenic (pore-clogging) ingredients.
            Find the ingredients list of the product that you would like to
            check on the Internet, copy and insert it here:
          </p>
          <form>
            <div className="edit-cont">
              <ReactQuill
                className="w-full text-xl font-bold text-secondary placeholder:text-secondary py-5 px-16  h-72 border border-secondary bg-primary rounded-xl ingre outline-none"
                theme="snow"
                value={value}
                onChange={handleChange}
              />
            </div>

            <div className="text-2xl font-semibold flex justify-between items-center my-6 gap-4">
              <button
                type="button"
                onClick={highlightWords}
                className="w-96 bg-secondary text-primary  rouded-xl py-3 rounded-xl"
              >
                Check
              </button>
              <button
                type="button"
                className="w-96 text-secondary border border-secondary rounded-xl py-3"
                onClick={() => clearPast()}
              >
                Clear
              </button>
            </div>
          </form>
          {isMatched && (
            <p className="text-sl text-[#FF0000] font-normal line-clamp-4 ">
              Unfortunately , there are some comedogenic ingredients.
              Comedogenics ingredients are listed in red .
            </p>
          )}
        </div>

        {isEmpty === false && (
          <div className="w-96 bg-secondary text-primary px-5 rounded-xl">
            <div className="flex justify-between my-9  items-center">
              <span className="text-lg font-semibold">Full List</span>
              <BiSearch className="text-4xl " />
            </div>

            <div
              className="font-semibold text-sm"
              style={{ overflowY: "auto", maxHeight: "600px" }}
            >
              {response?.map((list, index) => (
                <p
                  key={`list ${index}`}
                  className={
                    "flex flex-col pt-6 border-b border-b-primary  pb-6 mb-4"
                  }
                >
                  {list?.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default CheckIngredients;
