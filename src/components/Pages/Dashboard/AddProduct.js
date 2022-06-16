import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const { displayName, email } = user;
  const [imgUrl, setImgUrl] = useState();

  const imageStorageKey = "5d8415d9762b37f4d650c5d336c85449";

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgUrl(URL.createObjectURL(file));
    console.log(file);
  };

  const onSubmit = (data) => {
    const name = data.name;
    const Price = data.Price;
    const AvailableStock = data.AvailableStock;
    const minimumOrder = data.minimumOrder;
    const description = data.description;
    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
      });

    const parts = {
      // img,
      name,
      Price,
      AvailableStock,
      minimumOrder,
      description,
      AddedBy: displayName,
    };

    // if (email) {
    //   fetch(`https://hidden-harbor-39382.herokuapp.com/parts`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //     body: JSON.stringify(parts),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // console.log(data);
    //       toast.success("Car Parts Added Succssfully");
    //       reset();
    //     });
    // }
  };
  return (
    <div className="card w-8/12 bg-base-100 shadow-xl mx-auto p-9 text-center">
      <h1 className="text-3xl font-bold text-lime-900 my-5">
        Add A New Cars Parts
      </h1>
      <div>
        <input type="file" onChange={onImageChange} />
        <img src={imgUrl} alt="" className="w-10" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left my-3">
          <label htmlFor="img">Parts Image</label>
          <br />
          {/* <input
            type="file"
            onChange={onImageChange}
            {...register("image", { required: true })}
            placeholder="Parts Image"
            id="img"
            className="input input-bordered w-full max-w-xs"
          /> */}
        </div>
        <div className="text-left my-3">
          <label htmlFor="name">Parts Title</label>
          <br />
          <input
            {...register("name", { required: true })}
            placeholder="Parts Title"
            id="name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="price">Parts Price</label>
          <br />
          <input
            {...register("Price", { required: true })}
            placeholder="Parts Price"
            id="price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="stock">Parts Stocks</label>
          <br />
          <input
            {...register("AvailableStock", { required: true })}
            placeholder="Parts Stocks"
            id="stock"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="text-left my-3">
          <label htmlFor="minimumOrder">Minimum Order</label>
          <br />
          <input
            {...register("minimumOrder", { required: true })}
            placeholder="Minimum Order Input"
            id="minimumOrder"
            className="input input-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs"
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
