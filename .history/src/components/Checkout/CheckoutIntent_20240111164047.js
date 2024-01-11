/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess } from "../../Repository/Api";
import { useDispatch } from "react-redux";

const CheckoutIntent = ({ url, orderId }) => {
  const [processing, setProcessing] = useState("");
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const clientSecret = url;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      orderFailed(orderId);
      setProcessing(false);
    } else {
      setProcessing(false);
      dispatch(orderSuccess(orderId));
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        color: "#32325d",
        "::placeholder": {
          color: "#aab7c4",
        },
        border: "1px solid #ccc", // Add border style
        padding: "10px", // Add padding to make it visually appealing
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="schedule_1">
      <div className="left_div" style={{ width: "100%" }}>
        <div className="review_box">
          <p className="title">Confirm Payment</p>
          <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" options={cardElementOptions} />
            <button
              disabled={processing}
              style={{
                backgroundColor: "grey",
                width: "200px",
                padding: "10px",
              }}
              id="submit"
            >
              <span id="button-text">
                {processing ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
          </form>

       

          <div className="content" style={{ width: "100%", marginTop: "20px" }}>
            <p>
              {" "}
              <strong>Important info</strong>{" "}
            </p>
            <p className="desc">
              Please understand that when you forget or cancel your appointment
              without giving enough <br />
              notice , I miss the oppurtunity to fill that appointment time ,
              and clients on my waiting list miss <br />
              the oppurtunity to recieve services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutIntent;
