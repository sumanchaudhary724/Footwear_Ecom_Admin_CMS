// adminSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
  updateProfileStatus: null, // Track the update profile status
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
    setadminCollection: (state, { payload }) => {
      state.adminCollection = payload;
    },
  },
});

export const { setAdmin, setadminCollection } = adminSlice.actions;

export default adminSlice.reducer;
