import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../../redux/actions/authAction'

function Home() {
  const navigate = useNavigate();
  console.log("home");
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <a href="/sales">Go sales</a>
      <button onClick={() => dispatch(logout(navigate))}>logout</button>
    </div>
  );
}

export default Home;
