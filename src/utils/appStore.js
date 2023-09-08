import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
