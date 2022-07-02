import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Bookings = () => {
  const { isAuth } = useSelector((state) => state.reducer);
  if (!isAuth) {
    Navigate({ to: "/login" });
  }
  return <div>Bookings</div>;
};
