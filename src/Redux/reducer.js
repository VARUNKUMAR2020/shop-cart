import data from "../Data/data.json";

const initialState = {
  cartValue: 0,
  products: data.products,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_CART_VALUE":
      return {
        ...state,
        cartValue: state.cartValue + 1,
      };
    case "DECREMENT_CART_VALUE":
      return {
        ...state,
        cartValue: state.cartValue - 1,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
