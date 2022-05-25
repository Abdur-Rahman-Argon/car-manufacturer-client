import React from "react";
import useParts from "./../../utilites/useParts";
import SingleProduct from "./SingleProduct";

const ManageProducts = () => {
  const [parts, setParts] = useParts([]);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-purple-900 my-4">
        Manage Your Parts Of Your Industry{" "}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>si</th>
              <th>Parts Name</th>
              <th>Stock Countity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <SingleProduct
                key={part._id}
                index={index}
                part={part}
              ></SingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
