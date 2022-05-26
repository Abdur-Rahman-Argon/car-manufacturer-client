import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Sheared/Loading";
import { useNavigate } from "react-router-dom";

const Update = () => {
  // const [users, setUsers] = useState([]);
  const [user, loading] = useAuthState(auth);
  const { email } = user;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("user", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (users) {
    console.log(users);
  }

  const { _id } = users;

  const onSubmit = async (data) => {
    const displayName = data.name;
    const photoURL = data.photoURL;
    const phoneNumber = data.phone;
    const linkedIn = data.linkedin;
    const faceBook = data.facebook;
    const User = {
      displayName,
      photoURL,
      phoneNumber,
      linkedIn,
      faceBook,
    };
    console.log(data, _id);
    await updateProfile({ displayName, photoURL });

    if (email) {
      fetch(`http://localhost:5000/users/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(User),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("user information", data);
          if (data.result.modifiedCount === 1) {
            toast.success("user information updated success");
            navigate("/profile");
            reset();
          }
        });
    }
  };

  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto text-center">
      <div class="card-body">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src={user.photoURL} alt="profile" />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-3">
            <label htmlFor="email">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              placeholder="Enter displayName"
              id="name"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              value={`${email}`}
              id="email"
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="phone">Phone No:</label>
            <br />
            <input
              {...register("phone", { required: true })}
              placeholder="phoneNumber"
              id="phone"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="img">Photo Url</label>
            <br />
            <input
              {...register("photoURL", { required: true })}
              placeholder="Enter Photo URL"
              id="img"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="facebook">Facebook</label>
            <br />
            <input
              {...register("facebook", { required: true })}
              placeholder="Enter Facebook URL"
              id="facebook"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="linkedin">LinkedIn Url</label>
            <br />
            <input
              {...register("linkedin", { required: true })}
              placeholder="LinkedIn Photo URL"
              id="linkedin"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="text-left my-3">
            <input
              type="submit"
              value="Update"
              className="btn btn-success w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
