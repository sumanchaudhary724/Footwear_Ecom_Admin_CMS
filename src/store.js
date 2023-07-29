import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";

export default configureStore({
  reducer: {
    catInfo: catReducer,
    system: systemReducer,
  },
});
