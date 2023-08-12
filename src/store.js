import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import adminReducer from "./pages/signin-signup/adminSlice";
import opReducer from "./pages/payment-option/poSlice";

export default configureStore({
  reducer: {
    catInfo: catReducer,
    system: systemReducer,
    adminInfo: adminReducer,
    opInfo: opReducer,
  },
});
