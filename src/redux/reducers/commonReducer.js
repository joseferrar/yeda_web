import { SHOW_SPINNER, HIDE_SPINNER, TOAST_MESSAGE } from "../constants";

const initialState = {
  loading: false,
  toastOpen: false,
  toastType: "",
  toastMsg: "",
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        loading: false,
      };
    case TOAST_MESSAGE:
      return {
        ...state,
        toastOpen: true,
        toastType: action.payload.toastType,
        toastMsg: action.payload.toastMsg,
      };
    default:
      return state;
  }
};

export default commonReducer;
