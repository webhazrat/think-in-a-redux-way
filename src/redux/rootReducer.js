import { combineReducers } from "redux";
import productsReducer from "../redux/products/reducer";
import cartsReducer from "../redux/carts/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
});

export default rootReducer;
