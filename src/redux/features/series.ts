import { createSlice } from "@reduxjs/toolkit";
import { Series } from "../types/types";

const messageSlice = createSlice({
  name: "Series",
  initialState: {
    loading: true,
    success: false,
    error: "",
    series: [] as Series[],
  },
  reducers: {
    request: (state) => {
      state.loading = true;
      state.success = false;
      state.error = "";
      state.series = [] as Series[];
    },
    getSeriesSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.series = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.series = [] as Series[];
    },
  },
});

export const { request, getSeriesSuccess, failure } = messageSlice.actions;

export default messageSlice.reducer;
