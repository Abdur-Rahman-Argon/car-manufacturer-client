import React from "react";
import { Link } from "react-router-dom";

const partsHome = ({ part }) => {
  const { _id, name, img, Price, AvailableStock, minimumOrder } = part;
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">Price: {Price}</h2>
        <h2 className="card-title">Stock: {AvailableStock}</h2>
        <h2 className="card-title">MinimumOrder:{minimumOrder}</h2>

        <div className="card-actions justify-center">
          <Link to={`/purchase/${_id}`} className="btn btn-primary w-full">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default partsHome;
