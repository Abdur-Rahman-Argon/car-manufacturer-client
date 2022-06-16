import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/vzsZrHH/video-prew.jpg')] bg-cover hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <div className="m-1 flex-1">
          <img
            src="https://i.ibb.co/jTHj5kf/carbanner.png"
            alt=""
            className=" w-96"
          />
        </div>
        <div className="m-1 flex-1 p-5 text-center">
          <h1 className="text-2xl  font-semibold">
            Take a look at the important parts of your car
          </h1>
          <h1 className="text-3xl   font-bold">Before Driving Your Car</h1>
          <p className="py-6 text-sm">
            A car is an important part of many individual's daily lives. Driving
            a car can be stressful but it can also give you some relaxation and
            pleasure. Knowing about car basics will help with an overall better
            understanding of how it works and what to do in different
            situations.
          </p>
          <Link to="/allparts" className="btn btn-success">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
