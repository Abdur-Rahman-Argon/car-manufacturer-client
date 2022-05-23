import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/M53wrKP/banner23.png")`,
      }}
      class="hero bg-base-200"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="m-1 flex-1">
          <img
            src="https://i.ibb.co/jTHj5kf/carbanner.png"
            alt=""
            class="max-w-lg  "
          />
        </div>
        <div className="m-1 flex-1 p-5 text-center">
          <h1 className="text-2xl text-pink-600 font-semibold">
            Take a look at the important parts of your car
          </h1>
          <h1 class="text-5xl text-pink-700 font-bold">
            Before Driving Your Car
          </h1>
          <p class="py-6 text-sm">
            A car is an important part of many individual's daily lives. Driving
            a car can be stressful but it can also give you some relaxation and
            pleasure. Knowing about car basics will help with an overall better
            understanding of how it works and what to do in different
            situations.
          </p>
          <button class="btn btn-primary">See details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
