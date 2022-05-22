import React from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    console.log(user);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    console.log(data);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-2xl mx-auto p-8">
      <div>
        <h2 className="text-2xl text-indigo-700 font-bold">Please LogIn</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="text-left my-3">
            <input type="submit" className="btn btn-success w-full max-w-xs" />
          </div>
        </form>
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

export default LogIn;
