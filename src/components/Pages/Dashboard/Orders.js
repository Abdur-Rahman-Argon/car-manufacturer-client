import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ order }) => {
  const { _id, img, ordersCountity, Price, paid, productName } = order;
  return (
    <div className="card p-8 bg-base-100 shadow-xl m-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mx-auto items-center">
      <div className="w-96">
        <img src={img} alt="" className=" w-28 mx-auto" />
      </div>
      <div className="w-96 mx-auto my-2">
        <div className="w-full text-center">
          <h1>{productName}</h1>
          <h1>
            price:{Price} <span className="text-sm">(per Pice)</span>
          </h1>
          <h1>Orders Quantity: {ordersCountity} </h1>
        </div>
      </div>
      <div className="w-96 my-2 text-center">
        {Price ? (
          <Link to={`/dashboard/payment/${_id}`}>
            <button class="btn btn-active btn-primary mx-auto ">Pay Now</button>
          </Link>
        ) : (
          <button class="btn btn-active btn-primary mx-auto "> Paid </button>
        )}
      </div>
      <div className="w-96 my-2 text-center">
        {Price && (
          <button class="btn w-20 btn-active btn-warning mx-auto ">
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Orders;
