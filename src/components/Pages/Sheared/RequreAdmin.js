import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../utilites/useAdmin";
import Loading from "./Loading";

function RequreAdmin({ children }) {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (!user || !admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequreAdmin;
