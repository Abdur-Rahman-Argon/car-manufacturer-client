import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../utilites/useToken";
import Loading from "../Sheared/Loading";
import { toast } from "react-toastify";

const SignUp = () => {
  const [errMsg, setErrMsg] = useState("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification, sending, eVriError] =
    useSendEmailVerification(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [token] = useToken(user || gUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || sending || updating) {
    return <Loading></Loading>;
  }
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  // if (user || gUser) {
  //   console.log(user, gUser);
  // }

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const displayName = data.name;
    const photoURL = data.photoUrl;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await sendEmailVerification(email);
      toast.success("Email verification Sent Please Verify");
      await updateProfile({ displayName, photoURL });
      setErrMsg("");
      reset();
    } else {
      setErrMsg("Password & ConfirmPassword Is Not Matched");
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
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              placeholder="Enter User Name"
              id="name"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="text-left my-3">
            <label htmlFor="photoUrl">Photo Url</label>
            <br />
            <input
              {...register("photoUrl")}
              placeholder="Photo Url"
              id="photoUrl"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
              placeholder="Email"
              id="email"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="text-left my-3 ">
            <label htmlFor="password">Password</label>
            <br />

            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 8,
                  message: "Password Minimum Length 8 characters ",
                },
              })}
              placeholder="Password"
              id="password"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-700">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          <div className="text-left my-3 ">
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 8,
                  message: "Password Minimum Length 8 characters",
                },
              })}
              placeholder="Confirm Password"
              id="confirm-password"
              class="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
          </div>
          <p>
            <span className="label-text-alt text-red-500">{errMsg}</span>
          </p>
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
