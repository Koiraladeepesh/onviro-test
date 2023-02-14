import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContextApi";

const ProtectedRoute = () => {
    const {isLoggedIn}=useContext(AuthenticationContext)
  
    if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to={'/login'} />;
};

export default ProtectedRoute;