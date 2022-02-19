import { REACT_URL } from "../api";
import Authorization from "../api/Authorization";

export const SearchProduct = async (query) => {
  const api = await REACT_URL.get(`/searchProduct?foodName=${query}`, {
    headers: await Authorization(),
  });
  return api;
};
