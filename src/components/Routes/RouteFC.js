import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Forgot from "../../pages/Auth/Forgot";
import Welcome from "../../pages/UnAuthorized/Welcome";
import Navbar from "../Navigation/Navbar";
import Home from "../../pages/Home/Home";
import ProtectedRoutes from "../../pages/Auth/ProtectedRoute";
import AuthRedirect from "../../pages/Auth/AuthRedirect";
import Sales from "../../pages/Home/Sales";
import Cart from "../../pages/Users/Cart";
import MyOrders from "../../pages/Users/MyOrders";
import Dashboard from "../../pages/Users/Dashboard";
import Loading from "../Spinner/Loading";
import ToastMessage from "../Toast/ToastMessage";

function RouteFC() {
  const { loading, toastOpen } = useSelector((state) => state.common);
  const location = useLocation();

  return (
    <div className="App">
      {loading && <Loading />}
      {toastOpen && <ToastMessage />}
      {location.pathname === "/welcome" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteFC;
