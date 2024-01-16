/** @format */

import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { getQuiz, ReviewQuiz } from "../../Repository/Api";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const submitHandler = () => {
    if (answer1 && answer2 && answer3 && answer4) {
      ReviewQuiz(answer1, answer2, answer3, answer4, navigate);
    }
  };

  const [items, setItems] = useState([]);

  const fetchHandler = () => {
    getQuiz(setItems);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    submitHandler();
  }, [answer1, answer2, answer3, answer4]);

  function Reverse() {
    if (step === 1) {
    } else {
      setStep(step - 1);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  console.log(item)

  return (
    <div className="mb-14">
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p className="title">Acne Quiz</p>
      </div>

      <div className="w-11/12 border border-black mx-auto py-14 px-14 Acne_Quiz_Container">
        <h3 className="text-4xl flex items-center text-primary font-medium Title">
          <span className="mr-9 cursor-pointer" onClick={() => Reverse()}>
            <BiArrowBack />
          </span>
          STEP {step} OF 4
        </h3>

        {step === 1 && (
          <Question
            text={items?.[0]?.question}
            styles={"w-72 h-72"}
            setStep={setStep}
            step={step}
            option1={items?.[0]?.option1}
            option1image={items?.[0]?.option1image}
            option2={items?.[0]?.option2}
            option2image={items?.[0]?.option2image}
            option3={items?.[0]?.option3}
            option3image={items?.[0]?.option3image}
            option4={items?.[0]?.option4}
            option4image={items?.[0]?.option4image}
            query={setAnswer1}
          />
        )}

        {step === 2 && (
          <Question
            text={items?.[1]?.question}
            styles={"w-72 h-72"}
            setStep={setStep}
            step={step}
            option1={items?.[1]?.option1}
            option1image={items?.[1]?.option1image}
            option2={items?.[1]?.option2}
            option2image={items?.[1]?.option2image}
            option3={items?.[1]?.option3}
            option3image={items?.[1]?.option3image}
            option4={items?.[1]?.option4}
            option4image={items?.[1]?.option4image}
            query={setAnswer2}
          />
        )}
        {step === 3 && (
          <Question
            text={items?.[2]?.question}
            styles={"w-72 h-72"}
            setStep={setStep}
            step={step}
            option1={items?.[2]?.option1}
            option1image={items?.[2]?.option1image}
            option2={items?.[2]?.option2}
            option2image={items?.[2]?.option2image}
            option3={items?.[2]?.option3}
            option3image={items?.[2]?.option3image}
            option4={items?.[2]?.option4}
            option4image={items?.[2]?.option4image}
            query={setAnswer3}
          />
        )}
        {step === 4 && (
          <Question
            text={items?.[3]?.question}
            styles={"w-72 h-72"}
            setStep={setStep}
            step={step}
            option1={items?.[3]?.option1}
            option1image={items?.[3]?.option1image}
            option2={items?.[3]?.option2}
            option2image={items?.[3]?.option2image}
            option3={items?.[3]?.option3}
            option3image={items?.[3]?.option3image}
            option4={items?.[3]?.option4}
            option4image={items?.[3]?.option4image}
            query={setAnswer4}
            submitHandler={submitHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
