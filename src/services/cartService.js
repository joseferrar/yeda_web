import { REACT_URL } from "../api";
import Authorization from "../api/Authorization";

export const AddCartService = async (data) => {
  const api = REACT_URL.post("/addcart", data, { headers: await Authorization() });
  return api;
};

export const GetCartService = async () => {
  const api = REACT_URL.get("/mycart", { headers: await Authorization() });
  return api;
};

export const UpdateCartService = async (id, updatecart) => {
  const api = REACT_URL.put(`/upcart/${id}`, updatecart, {
    headers: await Authorization(),
  });
  return api;
};

export const DeleteCartService = async (id) => {
  const api = REACT_URL.delete(`/delcart/${id}`, {
    headers: await Authorization(),
  });
  return api;
};
