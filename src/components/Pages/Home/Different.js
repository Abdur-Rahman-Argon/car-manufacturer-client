import React from "react";
const Different = () => {
  return (
    <div
      style={{
        background: `url(https://i.ibb.co/QKv3FfJ/backgroun.jpg)`,
      }}
      className="card w-11/12 mx-auto text-center  shadow-xl py-16"
    >
      <div>
        <h1 className="text-3xl font-bold text-blue-800 ">
          Why We Are Different To Others?
        </h1>
      </div>
      <div className="mt-16 mb-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20">
        <div className="m-1 w-52 rounded-xl pb-5 text-center bg-gray-100">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/D7tB2Gz/quality.png"
              alt=""
              className="rounded-xl w-28"
            />
          </figure>
          <div className=" text-center">
            <h2 className=" text-center my-3 text-green-500 text-2xl font-bold">
              Parts Quality!
            </h2>
          </div>
        </div>
        <div className="m-1 w-60 rounded-xl pb-5 text-center bg-gray-100">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/d2WNfF1/deliveriy.png"
              alt=""
              className="rounded-xl w-28"
            />
          </figure>
          <div className=" text-center">
            <h2 className=" text-center my-3 text-amber-700 text-2xl font-bold">
              Delivery Process
            </h2>
          </div>
        </div>
        <div className="m-1 w-60 rounded-xl pb-5 text-center bg-gray-100">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/pxPt2NC/payment.png"
              alt=""
              className="rounded-xl w-28"
            />
          </figure>
          <div className=" text-center">
            <h2 className=" text-center text-sky-500 my-3 text-2xl font-bold">
              Payment System
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
