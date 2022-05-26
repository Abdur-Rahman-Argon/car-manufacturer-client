import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const DisplayReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const reviewse = reviews.slice(-3);
  return (
    <div className="m-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {reviewse.map((reviewe) => (
        <SingleReview key={reviewe._id} reviewe={reviewe}></SingleReview>
      ))}
    </div>
  );
};

export default DisplayReview;
