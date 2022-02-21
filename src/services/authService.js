import { REACT_URL } from "../api";

export const registerService = (data) => {
  const api = REACT_URL.post("/register", data);
  return api;
};

export const loginService = (data) => {
  const api = REACT_URL.post("/login", data);
  return api;
};
