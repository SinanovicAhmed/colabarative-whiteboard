import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
