import React from "react";
import { useQuery } from "react-query";
import Loading from "../Sheared/Loading";
import useParts from "./../../utilites/useParts";
import SingleProduct from "./SingleProduct";

const ManageProducts = () => {
  // const [parts, setParts] = useParts([]);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://hidden-harbor-39382.herokuapp.com/parts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-purple-900 my-4">
        Manage Your Parts Of Your Industry
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                refetch={refetch}
              ></SingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
