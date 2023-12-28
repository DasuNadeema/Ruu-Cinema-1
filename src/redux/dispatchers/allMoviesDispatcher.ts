import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";

import { request, getAllMoviesSuccess, failure } from "../features/allMovies";
import { processMovieData } from "../../utils/processMovies";
// import { APIBASEURI } from "../const/const";

export const getAllMovies = () => async (dispatch: Dispatch) => {
  try {
    dispatch(request());

    // TODO: proxy
    // const { data } = await axios.get(`${APIBASEURI}/all_films.php`);
    const { data } = await axios.get(`/ruu_cinema/ruu_cinema/all_films.php`);

    dispatch(getAllMoviesSuccess(processMovieData(data)));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(failure("Internal Server Error"));
    }
  }
};

// clear errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch(clearError());
// };
