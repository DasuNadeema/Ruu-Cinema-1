import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/types";

const messageSlice = createSlice({
  name: "AllMovies",
  initialState: {
    loading: true,
    success: false,
    error: "",
    movies: [] as Movie[],
  },
  reducers: {
    request: (state) => {
      state.loading = true;
      state.success = false;
      state.error = "";
      state.movies = [] as Movie[];
    },
    getAllMoviesSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.movies = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.movies = [] as Movie[];
    },
    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { request, getAllMoviesSuccess, failure, clearError } =
  messageSlice.actions;

export default messageSlice.reducer;
