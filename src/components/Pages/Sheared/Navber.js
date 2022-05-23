import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);

  const menu = (
    <>
      <li className="mx-2 my-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2 my-2">
        <Link to="/">services</Link>
      </li>
      <li className="mx-2 my-2">
        <Link to="/purchase">Purchase</Link>
      </li>
      <li className="mx-2 my-2">
        <Link to="/">Blog</Link>
      </li>
      <li className="mx-2 my-2">
        <Link to="/">About</Link>
      </li>

      {user ? (
        <li className="mx-2 my-2">
          <Link to="/profile">Profile</Link>
        </li>
      ) : (
        <li className="mx-2 my-2">
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );

  return (
    <div class="navbar bg-base-100 bg-slate-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <h1>
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Car manufacturering Industry
          </Link>
        </h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navber;
