import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Update = () => {
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email, phoneNumber, photoURL } = user;

  if (user) {
    console.log(user);
  }
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const displayName = data.displayName;
    const photoURL = data.photoURL;
    const phoneNumber = data.phoneNumber;
    updateProfile({ displayName, photoURL, phoneNumber });
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
