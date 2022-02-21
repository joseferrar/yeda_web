import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthRedirect() {
  const navigate = useNavigate();
  const detectLogin = async () => {
    const token = await localStorage.getItem("token");
    const data = JSON.parse(token);

    if (data?.user?.role === "user") {
      await navigate("/dashboard", { replace: true });
    } else if (data?.user?.role === "worker") {
      await navigate("/login", { replace: true });
    } else if (data?.user?.role === "delivery") {
      await navigate("/login", { replace: true });
    } else if (data?.user?.role === "admin") {
      await navigate("/sales", { replace: true });
    } else {
      await navigate("/login", { replace: true });
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
}

export default AuthRedirect;
