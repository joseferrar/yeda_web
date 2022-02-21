import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HomeLayout from "../../components/Navigation/DrawerNavigation/Layout";
import { UserAction } from "../../redux/actions/authAction";

const ProtectedRoutes = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(UserAction());
  }, []);

  return auth ? (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
