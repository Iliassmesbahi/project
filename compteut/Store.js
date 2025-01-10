import { configureStore } from "@reduxjs/toolkit";
import CompteurReducer from "./CompteurSlice";
const store = configureStore({
  reducer: {
    xxxx: CompteurReducer,
  },
});
export default store;
