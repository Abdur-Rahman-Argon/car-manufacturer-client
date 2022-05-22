import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const displayName = data.name;
    const photoURL = data.photoUrl;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);

      await updateProfile({ displayName, photoURL });
    }

    console.log(data);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl mx-auto p-8">
      <div>
        <h2 className="text-2xl my-4 text-indigo-700 font-bold">
          Please Create User
        </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-3">
            <label htmlFor="name">User Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              placeholder="Enter User Name"
              id="name"
              class="input input-bordered w-full max-w-xs"
            />
            {/* {errors.firstName?.type === "required" && "First name is required"} */}
          </div>
          <div className="text-left my-3">
            <label htmlFor="photoUrl">Photo Url</label>
            <br />
            <input
              {...register("photoUrl", { required: true })}
              placeholder="Photo Url"
              id="photoUrl"
              class="input input-bordered w-full max-w-xs"
            />
            {/* {errors.firstName?.type === "required" && "First name is required"} */}
          </div>
          <div className="text-left my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              placeholder="Type here"
              id="email"
              class="input input-bordered w-full max-w-xs"
            />
            {/* {errors.firstName?.type === "required" && "First name is required"} */}
          </div>
          <div className="text-left my-3 ">
            <label htmlFor="password">Password</label>
            <br />
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              id="password"
              class="input input-bordered w-full max-w-xs"
            />
            {/* {errors.firstName?.type === "required" && "First name is required"} */}
          </div>
          <div className="text-left my-3 ">
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
              id="confirm-password"
              class="input input-bordered w-full max-w-xs"
            />
            {/* {errors.firstName?.type === "required" && "First name is required"} */}
          </div>
          <div className="text-left my-3">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-success w-full max-w-xs"
            />
          </div>
        </form>
      </div>
      <div>
        <p>
          Have Account
          <Link to="/login" className="font-semibold text-green-600">
            {" "}
            Log In?
          </Link>
        </p>
      </div>
      <div class="divider">OR</div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          class="btn btn-outline   w-full"
        >
          SIgn In With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
