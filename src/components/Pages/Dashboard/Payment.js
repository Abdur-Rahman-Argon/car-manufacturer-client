import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Sheared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3GSHFBIBzJAkXUNMseQSrosl7R4NFmV7a9VvAXRxMW4beGhWmXRd6YQi6cuA4gri2o2ny5ycg4SXgd7LXmFrS8002bKK6VZi"
);

const Payment = () => {
  const [order, setorder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parches/628cc2c180b02334d4d1ad4d", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setorder(data));
  }, []);

  if (order) {
    console.log(order);
  }
  const paymentOrder = { order };

  const { productName, ordersCountity, Price } = order;

  const totalPrice = "540000";
  const payablePrice = "5124000";

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full">
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentOrder={paymentOrder}></CheckoutForm>
          </Elements>
        </div>
        <div className="w-96">
          <h1> {productName}</h1>
          <h1>
            Price : {Price}
            <span></span>
          </h1>
          <h1> Orders Quantity : {ordersCountity} </h1>
          <h1>Total Price : {totalPrice}</h1>
          <h1>Tax : 5 % </h1>
          <div class="divider"></div>
          <div>
            <h1>Payable Price: {payablePrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
