import React, { useEffect, useState } from "react";

const DisplayReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default DisplayReview;
