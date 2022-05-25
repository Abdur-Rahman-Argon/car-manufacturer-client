import React from "react";
import { toast } from "react-toastify";

const User = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast("Make Admin  successfull");
        }
      });
  };
  return (
    <tr>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-outline btn-success">
            MAKE ADMIN
          </button>
        )}
      </td>
      <td>
        {role === "admin" && (
          <button className="btn btn-outline btn-warning">Remove Admin</button>
        )}
      </td>
    </tr>
  );
};

export default User;
