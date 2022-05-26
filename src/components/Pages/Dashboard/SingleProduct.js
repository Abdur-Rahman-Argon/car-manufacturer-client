import React from "react";
import { toast } from "react-toastify";

const SingleProduct = ({ part, index, refetch }) => {
  const removeParts = (id) => {
    const deleteConfirm = window.confirm(
      `Are you sure Your "${part.name}" Parts Remove?`
    );
    if (deleteConfirm) {
      fetch(`https://hidden-harbor-39382.herokuapp.com/parts/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
            toast.success(` Your Order Is Remove Success`);
            refetch();
          }
        });
    } else {
      toast.error("Remove Cancel");
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{part.name}</td>
      <td>{part.AvailableStock}</td>
      <td>
        <label
          onClick={() => removeParts(part._id)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default SingleProduct;
