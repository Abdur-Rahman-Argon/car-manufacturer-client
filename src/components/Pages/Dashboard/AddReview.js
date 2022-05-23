import React from "react";
import { Outlet } from "react-router-dom";

const AddReview = () => {
  return (
    <div>
      <h1>Added a review here</h1>
      <Outlet />
    </div>
  );
};

export default AddReview;
