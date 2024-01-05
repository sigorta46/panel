import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import demandReducer from "../redux/demandSlice";
import offerReducer from "../redux/offersSlice";
import messageReducer from "../redux/message";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  demand: demandReducer,
  offer: offerReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
