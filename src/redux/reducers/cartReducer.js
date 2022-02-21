import { GETCART } from "../constants";

const initialState = {
  loading: true,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCART:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
