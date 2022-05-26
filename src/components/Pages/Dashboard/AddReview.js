import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email, photoURL } = user;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const review = data.review;
    const ratings = data.ratings;

    const reviews = {
      img: photoURL,
      email: email,
      userName: displayName,
      review: review,
      ratings: ratings,
    };
    if (email) {
      fetch(`https://hidden-harbor-39382.herokuapp.com/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Thanks For Your Important Review");
          reset();
        });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto p-9">
      <h1 className="text-2xl font-bold text-center text-purple-900 my-4">
        Please Give Us Review
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left my-3">
          <div className="form-control w-full max-w-xs">
            <label htmlFor="ratings" className="label">
              <span className="label-text">Ratings</span>
            </label>
            <select
              {...register("ratings")}
              id="ratings"
              className="select select-bordered"
            >
              <option selected>5 Star</option>
              <option> 4.5 Star</option>
              <option> 4 Star</option>
              <option> 3.5 Star</option>
              <option> 3 Star</option>
              <option> 2 Star</option>
            </select>
          </div>
        </div>

        <div className="text-left my-3">
          <label htmlFor="name">Name</label>
          <br />
          <input
            {...register("name", { required: true })}
            value={`${displayName}`}
            id="name"
            className="input input-bordered w-full max-w-xs"
            readOnly
          />
        </div>
        <div className="text-left my-3">
          <label htmlFor="email">Email</label>
          <br />
          <input
            {...register("email", { required: true })}
            value={`${email}`}
            id="email"
            className="input input-bordered w-full max-w-xs"
            readOnly
          />
        </div>
        <div className="text-left my-3">
          <label htmlFor="review">Review</label>
          <br />
          <textarea
            id="review"
            cols="40"
            rows="15"
            {...register("review", { required: true })}
            placeholder=" Enter Your Review"
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

export default AddReview;
