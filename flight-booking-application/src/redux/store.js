import { createStore } from "redux";
import bookingReducer from "./flightBooking/bookingReducer";

const store = createStore(bookingReducer);

export default store;
