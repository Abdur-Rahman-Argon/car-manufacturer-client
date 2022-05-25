import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../utilites/useToken";
import Loading from "../Sheared/Loading";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, LUser, Lloading, error] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, reset } = useForm();

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const [token] = useToken(LUser || gUser);

  useEffect(() => {
    // const token = localStorage.getItem("accessToken");
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  // if (user || LUser) {
  //   console.log("uaer auth", user, LUser);
  // }

  if (loading || Lloading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
    // console.log(data);
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
              placeholder="Enter Your Email"
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
            <input
              type="submit"
              value="LogIn"
              className="btn btn-success w-full max-w-xs"
            />
          </div>
        </form>
      </div>
      <div>
        <p>
          New User
          <Link to="/signup" className="font-semibold text-green-600">
            {" "}
            Create Account?
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

export default LogIn;
