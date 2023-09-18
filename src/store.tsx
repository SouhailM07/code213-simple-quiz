import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "./components/Container/containerSlice";

let store = configureStore({
  reducer: {
    quiz: containerSlice,
  },
});

export default store;
