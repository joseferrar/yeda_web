import { REGISTER, LOGIN, LOGOUT } from "../constants";
import { registerService, loginService } from "../../services/authService";

export const registerAction = (register, navigate) => async (dispatch) => {
  try {
    const { data } = await registerService(register);
    dispatch({ type: REGISTER, payload: data });
    navigate.replace("Login");
  } catch (err) {
    console.log(err.response.data);
  }
};

export const loginAction = (login, navigate) => async (dispatch) => {
  try {
    const { data } = await loginService(login);
    dispatch({ type: LOGIN, payload: data });
    await localStorage.setItem("token", JSON.stringify(data));
    if (data?.user?.role === "user") {
      await navigate("/home", { replace: true });
    } else if (data?.user?.role === "worker") {
      await navigate("/sales", { replace: true });
    } else if (data?.user?.role === "admin") {
      await navigate("/sales", { replace: true });
    } else if (data?.user?.role === "delivery") {
      await navigate.replace("Delivery");
    }
  } catch (err) {
    console.log(err.response.data?.error);
  }
};

export const UserAction = () => async (dispatch) => {
  try {
    const token = await localStorage.getItem("token");
    const data = await JSON.parse(token);
    dispatch({ type: "USER", payload: data.user });
  } catch (err) {
    console.log(err);
  }
};

export const logout = (navigate) => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT, payload: null });
  navigate("/", { replace: true });
};