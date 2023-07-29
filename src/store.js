import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./pages/category/categorySlice";

export default configureStore({
  reducer: {
    catInfo: catReducer,
  },
});
