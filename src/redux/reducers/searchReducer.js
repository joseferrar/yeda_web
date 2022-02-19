import { SEARCHPRODUCT } from "../constants";

const initialState = {
  loading: true,
  searchProduct: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHPRODUCT:
      return {
        ...state,
        loading: false,
        searchProduct: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
