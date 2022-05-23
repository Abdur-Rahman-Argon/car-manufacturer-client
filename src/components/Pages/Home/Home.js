import React, { useEffect, useState } from "react";
import Footer from "../Sheared/Footer";
import Banner from "./Banner";
import PartsDetail from "./PartsDetail";

const Home = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {parts.map((part) => (
          <PartsDetail key={part._id} part={part}></PartsDetail>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
