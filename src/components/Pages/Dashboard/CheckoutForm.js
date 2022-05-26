import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ paymentOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [price, setPrice] = useState("");
  if (paymentOrder) {
    console.log(paymentOrder?.order?.Price);
    // setPrice(paymentOrder?.order?.Price);
  }
  //   useEffect(() => {
  //     fetch(`https://hidden-harbor-39382.herokuapp.com/create-payment`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify({ price }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data?.clientSecret) {
  //           setClientSecret(data.clientSecret);
  //         }
  //       });
  //   }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-wide btn-success my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {cardError && <p>{cardError}</p>}
    </form>
  );
};

export default CheckoutForm;
