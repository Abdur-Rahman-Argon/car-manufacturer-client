import React from "react";
import { toast } from "react-toastify";

const SingleProduct = ({ part, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{part.name}</td>
      <td>{part.AvailableStock}</td>
      <td>
        <label
          onClick={""}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default SingleProduct;
