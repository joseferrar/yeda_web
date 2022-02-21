import { ADDCART, GETCART, DELETECART, UPDATECART } from "../constants";
import {
  AddCartService,
  GetCartService,
  DeleteCartService,
  UpdateCartService,
} from "../../services/cartService";
import { ShowSpinner, HideSpinner } from "./commonAction";

export const AddCartAction = (Add) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await AddCartService(Add);
    await dispatch({ type: ADDCART, payload: data });
    await dispatch(HideSpinner());
  } catch (err) {
    console.log(err.response.data);
  }
};

export const GetCartAction = () => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await GetCartService();
    await dispatch({ type: GETCART, payload: data });
    await dispatch(HideSpinner());
  } catch (err) {
    console.log(err.response.data);
  }
};

export const UpdateCartAction = (id, updatecart) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await UpdateCartService(id, updatecart);
    await dispatch({ type: UPDATECART, payload: data });
    await dispatch(GetCartAction());
    await dispatch(HideSpinner());
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCartAction = (id) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    await DeleteCartService(id);
    await dispatch({ type: DELETECART, payload: id });
    await dispatch(GetCartAction());
    await dispatch(HideSpinner());
  } catch (error) {
    console.log(error);
  }
};
