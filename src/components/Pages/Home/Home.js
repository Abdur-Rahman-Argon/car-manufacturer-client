import React from "react";
import useParts from "../../utilites/useParts";
import Footer from "../Sheared/Footer";
import Banner from "./Banner";
import DisplayReview from "./DisplayReview";
import PartsDetail from "./PartsDetail";

const Home = () => {
  const [parts] = useParts([]);
  return (
    <div>
      <Banner></Banner>
      <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {parts.map((part) => (
          <PartsDetail key={part._id} part={part}></PartsDetail>
        ))}
      </div>
      <DisplayReview></DisplayReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
