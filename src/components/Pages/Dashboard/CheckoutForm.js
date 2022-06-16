import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order, payablePrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [successPayment, setSuccessPayment] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  // if (order) {
  //   console.log(order.Price);
  // }
  const {
    _id,
    userName,
    email,
    Price,
    phoneNumber,
    address,
    productName,
    ordersCountity,
  } = order;

  const price = payablePrice;

  useEffect(() => {
    fetch(`https://hidden-harbor-39382.herokuapp.com/create-payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

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
      // console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setSuccessPayment("");
      //////////////////////////
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: email,
            },
          },
        });
      if (intentError) {
        setCardError(intentError.message);
      } else {
        setCardError("");
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent);
        setSuccessPayment("Congrats! Your Payment Is Completed");
        // payment sent database
        const payment = {
          transactionId: paymentIntent.id,
          productId: _id,
          payerEmail: email,
          payerName: userName,
          productName: productName,
          payBill: Price,
          productCountity: ordersCountity,
          payerPhoneNumber: phoneNumber,
          payerAddress: address,
        };
        fetch(`https://hidden-harbor-39382.herokuapp.com/parches/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
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
        className="btn btn-wide btn-success my-10"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {cardError && <p className="text-red-500 font-semibold">{cardError}</p>}
      {successPayment && (
        <div>
          <p className="text-green-500 font-semibold">{successPayment}</p>
          <p className="text-orange-500 font-bold">
            Your Payment transactionId : {transactionId}
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
