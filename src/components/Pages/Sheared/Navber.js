import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menu = (
    <>
      <li className="mx-2 my-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2 my-2">
        <Link to="/allparts">All Parts</Link>
      </li>
      {user && (
        <li className="mx-2 my-2">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className="mx-2 my-2">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="mx-2 my-2">
        <a href="https://abdur-rahman-3b5b4.web.app/">Portfolio</a>
      </li>

      {user && (
        <li className="mx-2 my-2">
          <Link to="/profile">My Profile</Link>
        </li>
      )}

      {user ? (
        <li className="mx-2 my-2">
          <button onClick={logOut}>LogOut</button>
        </li>
      ) : (
        <li className="mx-2 my-2">
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokewidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <h1>
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Car Parts Industry
          </Link>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navber;
