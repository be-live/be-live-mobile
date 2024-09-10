import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import memoriesReducer from "./slices/memoriesSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    memories: memoriesReducer,
  },
});

export default store;
