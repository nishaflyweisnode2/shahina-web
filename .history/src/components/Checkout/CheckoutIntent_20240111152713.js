/** @format */

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { orderSuccesssecond } from "../../Repository/Api";

const CheckoutIntent = ({ url, orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe) {
      return;
    }
    setLoading(true);
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    try {
      const cardElement = elements.getElement(CardElement);
      const clientSecret = url;
      const cardElement = elements.getElement(CardElement);

      const { error } = await stripePromise.confirmCardPayment({
        payment_method: cardElement,
      });

      if (error) {
        console.error(error);
        // Handle error
      } else {
        console.log("Payment successful!");
        // Handle successful payment
      }
    } catch (error) {
      handleError(error);
    }
  };

  const btnStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #000",
    width: "200px",
    display: "block",
    marginTop: "15px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="checked_check">
        <input type="checkbox" required />
        <p>I agree cancellation policy</p>
      </div>
      <button style={btnStyle} type="submit" disabled={!stripe || loading}>
        Checkout
      </button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutIntent;
