import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Forgot from "../../pages/Auth/Forgot";
import About from "../../pages/UnAuthorized/About";
import Features from "../../pages/UnAuthorized/Features";
import Services from "../../pages/UnAuthorized/Services";
import Welcome from "../../pages/UnAuthorized/Welcome";
import Navbar from "../Navigation/Navbar";
import { useAuth } from "../Hooks/useAuth";
import Home from "../../pages/Home/Home";
import ProtectedRoutes from "../../pages/Auth/ProtectedRoute";
import AuthRedirect from "../../pages/Auth/AuthRedirect";
import Sales from "../../pages/Home/Sales";

function RouteFC() {
  const location = useLocation();
  const isAuth = useAuth();

  return (
    <div className="App">
      {isAuth ||
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot" ? null : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouteFC;
