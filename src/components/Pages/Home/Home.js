import React from "react";
import useParts from "../../utilites/useParts";
import Footer from "../Sheared/Footer";
import Banner from "./Banner";
import Business from "./Business";
import ContactUs from "./ContactUs";
import Different from "./Different";
import DisplayReview from "./DisplayReview";

import PartsHome from "./PartsHome";

const Home = () => {
  const [parts] = useParts([]);
  const cParts = parts.slice(-3);
  return (
    <div>
      <div class=" w-11/12 mx-auto text-center ">
        <Banner></Banner>
      </div>
      <section className=" my-10">
        <div class="card w-11/12 mx-auto text-center px-8  shadow-xl py-8">
          <h1 className="text-3xl font-extrabold text-center  mx-auto">
            See Cars Parts
          </h1>
          <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-2">
            {cParts.map((part) => (
              <PartsHome key={part._id} part={part}></PartsHome>
            ))}
          </div>
        </div>
      </section>
      <section className=" my-10">
        <div class="card w-11/12 mx-auto text-center px-8 shadow-xl py-8">
          <h1 className="text-3xl font-extrabold text-center  mx-auto">
            Customer Review here
          </h1>

          <DisplayReview></DisplayReview>
        </div>
      </section>

      <section className=" my-10">
        <Business></Business>
      </section>

      <section className=" my-10">
        <Different></Different>
      </section>

      <section className=" my-10">
        <ContactUs></ContactUs>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
