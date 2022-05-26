import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [order, setorder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parches/628cc2c180b02334d4d1ad4d", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setorder(data));
  }, []);

  if (order) {
    console.log(order);
  }
  return <div></div>;
};

export default ManageAllOrders;
