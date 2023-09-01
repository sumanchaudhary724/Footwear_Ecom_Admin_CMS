import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartData: {
    labels: [],
    data: [],
  },
};

const chartInfoSlice = createSlice({
  name: "chartInfo",
  initialState,
  reducers: {
    setChartData: (state, action) => {
      // Update the chartData property in the state
      state.chartData = action.payload;
    },
  },
});

export const { setChartData } = chartInfoSlice.actions;

export default chartInfoSlice.reducer;
