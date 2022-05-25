import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "../Sheared/Loading";

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const { displayName, email, phoneNumber, photoURL } = user;

  if (loading) {
    return <Loading></Loading>;
  }

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
  };

  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto text-center">
      <div class="card-body">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src={photoURL} alt="profile" />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-3">
            <label htmlFor="email">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              value={`${displayName}`}
              id="name"
              class="input input-bordered w-full max-w-xs"
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
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="phone">Phone No:</label>
            <br />
            <input
              {...register("phone", { required: true })}
              value={`${phoneNumber}`}
              id="phone"
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          {/* <div className="text-left my-3">
            <label htmlFor="img">Photo Url</label>
            <br />
            <input
              {...register("photoURL", { required: true })}
              placeholder="Enter Photo URL"
              id="img"
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div> */}

          <div className="text-left my-3">
            <Link to="/profile" className="btn btn-success w-full max-w-xs">
              Update
            </Link>
          </div>
        </form>
        <div class="divider">OR</div>
        <div>
          <button onClick={logOut} class="btn btn-primary w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
