import React from "react";
import useParts from "../../utilites/useParts";
import Footer from "../Sheared/Footer";
import Banner from "./Banner";
import DisplayReview from "./DisplayReview";

import PartsHome from "./PartsHome";

const Home = () => {
  const [parts] = useParts([]);
  const cParts = parts.slice(-3);
  return (
    <div>
      <Banner></Banner>
      <section className=" my-10">
        <h1 className="text-2xl font-bold my-10 border-b-4 w-60 mx-auto">
          See All Parts Of Cars
        </h1>
        <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cParts.map((part) => (
            <PartsHome key={part._id} part={part}></PartsHome>
          ))}
        </div>
      </section>
      <section className=" my-10">
        <h1 className="text-2xl font-bold my-10 border-b-4 w-64 mx-auto">
          Customer Review here
        </h1>
        <div className="">
          <DisplayReview></DisplayReview>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Home;
