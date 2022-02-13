import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Hooks/useAuth";

function AuthRedirect() {
  const navigate = useNavigate();
  const auth = useAuth();
  React.useEffect(() => {
    if (auth) {
      navigate("/home", { replace: true });
    } else {
      navigate("/welcome", { replace: true });
    }
  }, []);
  return (
    <div>
      <h2>Sales</h2>
    </div>
  );
}

export default AuthRedirect;
