import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payments: [],
};
const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setPayments: (state, { payload }) => {
      if (state.payments.length === 0 && payload.length === 0) {
        return;
      }
      state.payments = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;

export const { setPayments } = actions;

export default reducer;
