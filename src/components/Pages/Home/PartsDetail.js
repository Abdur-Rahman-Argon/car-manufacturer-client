import React from "react";
import { Link } from "react-router-dom";

const PartsDetail = ({ part }) => {
  const { _id, name, img, description, Price, AvailableStock, minimumOrder } =
    part;
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-60" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2 class="card-title">Price: {Price}</h2>
        <h2 class="card-title">Stock: {AvailableStock}</h2>
        <h2 class="card-title">MinimumOrder:{minimumOrder}</h2>
        <p>
          <b>Description: {description}</b>
        </p>
        <div class="card-actions justify-center">
          <Link to={`/purchase/${_id}`} class="btn btn-primary w-full">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartsDetail;
