import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Orders from "./Orders";
import Loading from "./../Sheared/Loading";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/parches?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-purple-700 my-4">
        Your All Orders Here
      </h1>
      {orders.map((order) => (
        <Orders key={order._id} order={order} refetch={refetch}></Orders>
      ))}
    </div>
  );
};

export default MyOrder;
