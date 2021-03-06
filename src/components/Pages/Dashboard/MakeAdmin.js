import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Sheared/Loading";
import User from "./User";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("https://hidden-harbor-39382.herokuapp.com/users", {
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
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Make Admin</th>
            <th>Remove admin</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <User key={user.id} user={user} refetch={refetch}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
