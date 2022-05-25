import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Orders from "./Orders";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/parches?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user]);

  if (orders) {
    console.log(orders);
  }

  return (
    <div>
      <h2>My all order here </h2>
      {orders.map((order) => (
        <Orders key={order._id} order={order}></Orders>
      ))}
    </div>
  );
};

export default MyOrder;
