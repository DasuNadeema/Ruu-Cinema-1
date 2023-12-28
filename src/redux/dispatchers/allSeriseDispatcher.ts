import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";

import { request, getSeriesSuccess, failure } from "../features/series";
import { processSeriesData } from "../../utils/processSeries";
// import { APIBASEURI } from "../const/const";

export const getAllSeries = () => async (dispatch: Dispatch) => {
  try {
    dispatch(request());

    // TODO: proxy
    // const { data } = await axios.get(`${APIBASEURI}/all_films.php`);
    const { data } = await axios.get(`/ruu_cinema/ruu_cinema/tv_series.php`);

    dispatch(getSeriesSuccess(processSeriesData(data)));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(failure("Internal Server Error"));
    }
  }
};
