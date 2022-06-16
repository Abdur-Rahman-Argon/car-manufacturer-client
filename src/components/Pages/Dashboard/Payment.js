import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Sheared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3GSHFBIBzJAkXUNMseQSrosl7R4NFmV7a9VvAXRxMW4beGhWmXRd6YQi6cuA4gri2o2ny5ycg4SXgd7LXmFrS8002bKK6VZi"
);

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(Number);
  const [totalPayablePrice, setTotalPayablePrice] = useState(Number);

  const { paymentId } = useParams();

  const {
    isLoading,
    error,
    data: order,
    refetch,
  } = useQuery("user", () =>
    fetch(`https://hidden-harbor-39382.herokuapp.com/parches/${paymentId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { img, productName, ordersCountity, Price } = order;

  const singlePrice = parseFloat(Price);
  const countity = parseFloat(ordersCountity);
  const totalprice = singlePrice * countity;
  // setTotalPrice(totalprice);
  const payablePrice = totalprice + totalprice * 0.05;
  // setTotalPayablePrice(payablePrice);

  return (
    <div className="">
      <div className="hero-content flex-col">
        <h1 className="text-2xl lg:text-4xl my-2 font-bold">
          Please Pay For Confirm Order
        </h1>
        <div class="card w-10/12 my-0 p-5 md:p-16 lg:p-20 bg-base-100 shadow-xl">
          <div>
            <h1 className="text-xl font-semibold">
              <span className=" text-xl lg:text-3xl font-bold">
                {productName}
              </span>
            </h1>
          </div>
          <div class="flex flex-col lg:flex-row-reverse">
            <div className=" lg:block hidden lg:flex-1">
              <img src={img} alt="" className=" w-48" />
            </div>
            <div className="flex-1">
              <h1 className="lg:text-xl my-2 font-semibold">
                Price : <span className=" lg:text-2xl font-bold"> {Price}</span>
                <span className=" text-sm text-emerald-900">
                  (Per Single Parts)
                </span>
              </h1>
              <h1 className="lg:text-xl my-2  font-semibold">
                Orders Quantity :{" "}
                <span className=" lg:text-2xl font-bold">{ordersCountity}</span>
              </h1>
              <h1 className="lg:text-xl my-2 font-semibold">
                Total Price :
                <span className=" ;g:text-2xl font-bold"> {totalprice} </span>
              </h1>
              <h1 className="lg:text-xl my-2 font-semibold">
                Tax : <span className=" lg:text-2xl font-bold"> 5 % </span>
              </h1>
            </div>
            <div></div>
          </div>
          <div className="divider"></div>
          <div>
            <h1 className="text-xl lg:my-2 font-semibold">
              Payable Price:
              <span className="text-2xl font-bold"> {payablePrice}</span>
            </h1>
          </div>
        </div>

        <div className="card w-10/12 p-16 bg-base-100 shadow-xl">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              order={order}
              payablePrice={payablePrice}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
