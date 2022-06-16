import React from "react";
import { useQuery } from "react-query";
import Loading from "../Sheared/Loading";
import Orders from "./Orders";

const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://hidden-harbor-39382.herokuapp.com/orders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (orders) {
    console.log(orders);
  }
  return (
    <div>
      {orders?.map((order) => (
        <Orders key={order._id} order={order} refetch={refetch}></Orders>
      ))}
    </div>
  );
};

export default ManageAllOrders;
