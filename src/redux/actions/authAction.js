import { REGISTER, LOGIN, LOGOUT, AUTH } from "../constants";
import { registerService, loginService } from "../../services/authService";
import { ShowSpinner, HideSpinner, showToast } from "./commonAction";

export const registerAction = (register, navigate) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await registerService(register);
    dispatch({ type: REGISTER, payload: data });
    navigate("/login", { replace: true });
  } catch (err) {
    dispatch(showToast("error", err.response.data.error));
    await dispatch(HideSpinner());
  }
};

export const loginAction = (login, navigate) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await loginService(login);
    dispatch({ type: LOGIN, payload: data });
    await localStorage.setItem("token", JSON.stringify(data));
    await dispatch(HideSpinner());
    if (data?.user?.role === "user") {
      await navigate("/dashboard", { replace: true });
    } else if (data?.user?.role === "worker") {
      await navigate("/sales", { replace: true });
    } else if (data?.user?.role === "admin") {
      await navigate("/sales", { replace: true });
    } else if (data?.user?.role === "delivery") {
      await navigate.replace("Delivery");
    }
  } catch (err) {
    dispatch(showToast("error", err.response.data.error));
    await dispatch(HideSpinner());
  }
};

export const UserAction = () => async (dispatch) => {
  try {
    const token = await localStorage.getItem("token");
    const data = await JSON.parse(token);
    dispatch({ type: AUTH, payload: data.user });
  } catch (err) {
    console.log(err);
  }
};

export const logout = (navigate) => async (dispatch) => {
  await dispatch(ShowSpinner());
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT, payload: null });
  dispatch(showToast("success", "Logout Successfully!!!"));
  navigate("/", { replace: true });
  await dispatch(HideSpinner());
};
