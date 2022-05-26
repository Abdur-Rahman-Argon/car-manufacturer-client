import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../utilites/useAdmin";
import Loading from "../Sheared/Loading";

const Dashbord = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="btn w-full btn-primary drawer-button lg:hidden"
        >
          Open side Nave
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
          {!admin && (
            <>
              <li className="my-2">
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li className="my-2">
                <Link to="/dashboard/review">Add review</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="my-2">
                <Link to="/dashboard/addproduct">Add A Product</Link>
              </li>

              <li className="my-2">
                <Link to="/dashboard/makeadmin">Make Admin</Link>
              </li>

              <li className="my-2">
                <Link to="/dashboard/manageproduct">Manage Products</Link>
              </li>

              <li className="my-2">
                <Link to="/dashboard/manageallorder">Manage All Orders</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
