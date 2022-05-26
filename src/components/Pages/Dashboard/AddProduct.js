import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email } = user;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const img = data.img;
    const name = data.name;
    const Price = data.Price;
    const AvailableStock = data.AvailableStock;
    const minimumOrder = data.minimumOrder;
    const description = data.description;

    const parts = {
      img,
      name,
      Price,
      AvailableStock,
      minimumOrder,
      description,
      AddedBy: displayName,
    };

    if (email) {
      fetch(`http://localhost:5000/parts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(parts),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Car Parts Added Succssfully");
          reset();
        });
    }
  };
  return (
    <div class="card w-8/12 bg-base-100 shadow-xl mx-auto p-9 text-center">
      <h1 className="text-3xl font-bold text-lime-900 my-5">
        Add A New Cars Parts
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left my-3">
          <label htmlFor="img">Parts Image</label>
          <br />
          <input
            {...register("img", { required: true })}
            placeholder="Parts Image"
            id="img"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="text-left my-3">
          <label htmlFor="name">Parts Title</label>
          <br />
          <input
            {...register("name", { required: true })}
            placeholder="Parts Title"
            id="name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="price">Parts Price</label>
          <br />
          <input
            {...register("Price", { required: true })}
            placeholder="Parts Price"
            id="price"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="stock">Parts Stocks</label>
          <br />
          <input
            {...register("AvailableStock", { required: true })}
            placeholder="Parts Stocks"
            id="stock"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="minimumOrder">Minimum Order</label>
          <br />
          <input
            {...register("minimumOrder", { required: true })}
            placeholder="Minimum Order Input"
            id="minimumOrder"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            cols="40"
            rows="15"
            {...register("description", { required: true })}
            placeholder=" Parts description here"
            class="input input-bordered w-full max-w-xs"
          ></textarea>
          <input />
        </div>
        <div className="text-left my-3">
          <input type="submit" className="btn btn-success w-full max-w-xs" />
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default AddProduct;
