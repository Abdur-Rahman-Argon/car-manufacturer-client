import React from "react";
//
//
//
const Business = () => {
  return (
    <div class="card w-11/12 mx-auto text-center  shadow-xl py-8">
      <h1 className="text-3xl font-extrabold text-center  mx-auto">
        Our Business Summary
      </h1>
      <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20">
        <div class="m-1 w-52 rounded-xl pb-5 text-center">
          <figure class="px-10 pt-10">
            <img
              src="https://i.ibb.co/jLgLp8Z/country5646.png"
              alt=""
              class="rounded-xl w-28"
            />
          </figure>
          <div class=" text-center pt-3">
            <h2 class=" text-center text-2xl font-extrabold">90+</h2>
            <h2 class=" text-center text-2xl font-extrabold">Countries</h2>
          </div>
        </div>
        <div class="m-1 w-60 rounded-xl pb-5 text-center  ">
          <figure class="px-10 pt-10">
            <img
              src="https://i.ibb.co/zSvT2rW/Delivery.png"
              alt=""
              class="rounded-xl w-28"
            />
          </figure>
          <div class=" text-center pt-3">
            <h2 class=" text-center text-2xl font-extrabold">60k+</h2>
            <h2 class=" text-center text-2xl font-extrabold">
              Parts Delivered
            </h2>
          </div>
        </div>
        <div class="m-1 w-60 rounded-xl pb-5 text-center  ">
          <figure class="px-10 pt-10">
            <img
              src="https://i.ibb.co/jR7nTQj/customer.png"
              alt=""
              class="rounded-xl w-28"
            />
          </figure>
          <div class=" text-center pt-3">
            <h2 class=" text-center text-2xl font-extrabold">48k+</h2>
            <h2 class=" text-center text-2xl font-extrabold">Happy Customer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
