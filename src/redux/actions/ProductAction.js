import { SearchProduct } from "../../services/ProductService";
import { SEARCHPRODUCT } from "../constants";

export const SearchProductAction = (query) => async (dispatch) => {
  try {
    const { data } = await SearchProduct(query);
    dispatch({ type: SEARCHPRODUCT, payload: data });
  } catch (err) {
    console.log(err.response.data);
  }
};
