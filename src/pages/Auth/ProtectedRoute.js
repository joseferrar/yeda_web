import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../components/Hooks/useAuth";
import HomeLayout from "../../components/Navigation/DrawerNavigation/Layout";

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
