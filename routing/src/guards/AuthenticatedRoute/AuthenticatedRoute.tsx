import { useEffect, useState } from "react";
import styles from "./AuthenticatedRoute.module.scss";
import { AuthenticatedRouteProps } from "./AuthenticatedRoute.types.ts";
import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.tsx";


const AuthenticatedRoute = ({
  redirectRoute = "/"
}: AuthenticatedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  return isAuthenticated ? <HomePage /> : <Navigate to='/' />;
};

export default AuthenticatedRoute;
