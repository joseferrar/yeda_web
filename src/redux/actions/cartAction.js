import { ADDCART, GETCART, DELETECART, UPDATECART } from "../constants";
import {
  AddCartService,
  GetCartService,
  DeleteCartService,
  UpdateCartService,
} from "../../services/cartService";

export const AddCartAction = (Add) => async (dispatch) => {
  try {
    const { data } = await AddCartService(Add);
    await dispatch({ type: ADDCART, payload: data });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const GetCartAction = () => async (dispatch) => {
  try {
    const { data } = await GetCartService();
    await dispatch({ type: GETCART, payload: data });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const UpdateCartAction = (id, updatecart) => async (dispatch) => {
  try {
    const { data } = await UpdateCartService(id, updatecart);
    await dispatch({ type: UPDATECART, payload: data });
    await dispatch(GetCartAction());
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCartAction = (id) => async (dispatch) => {
  try {
    await DeleteCartService(id);
    await dispatch({ type: DELETECART, payload: id });
  } catch (error) {
    console.log(error);
  }
};
