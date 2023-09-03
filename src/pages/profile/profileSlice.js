// profileSlice.js

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    admin: null, // You can initialize this with the initial profile data
    error: null,
  },
  reducers: {
    updateProfileSuccess: (state, action) => {
      state.admin = action.payload;
      state.error = null;
    },
    updateProfileFailure: (state, action) => {
      state.error = action.payload;
    },
    updatePasswordSuccess: (state) => {
      state.error = null;
    },
    updatePasswordFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  updateProfileSuccess,
  updateProfileFailure,
  updatePasswordSuccess,
  updatePasswordFailure,
} = profileSlice.actions;

export default profileSlice.reducer;
