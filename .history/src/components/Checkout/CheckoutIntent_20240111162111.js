/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess } from "../../Repository/Api";

const CheckoutIntent = ({ url, orderId }) => {
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

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
      orderSuccess(orderId);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" />
      <button
        disabled={processing}
        style={{ backgroundColor: "grey", width: "200px", padding: "10px" }}
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
  );
};

export default CheckoutIntent;
