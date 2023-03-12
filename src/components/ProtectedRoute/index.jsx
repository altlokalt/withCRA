import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const guestkey = localStorage.getItem("guestkey");

  if (
    !guestkey &&
    ["/register", "/login", "/forgotpassword"].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
