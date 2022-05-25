import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../utilites/useAdmin";

const Dashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li className="my-2">
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li className="my-2">
            <Link to="/dashboard/review">Add review</Link>
          </li>

          {admin && (
            <li className="my-2">
              <Link to="/dashboard/addproduct">Add A Product</Link>
            </li>
          )}
          {admin && (
            <li className="my-2">
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
          )}
          {admin && (
            <li className="my-2">
              <Link to="/dashboard/manageproduct">Manage Products</Link>
            </li>
          )}
          {admin && (
            <li className="my-2">
              <Link to="/dashboard/manageallorder">Manage All Orders</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
