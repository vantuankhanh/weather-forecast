import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import storeType from "../type";
import { getWeatherDetail } from "../../services/weatherService";
import { IWeatherDetailModel } from "../../models/WeatherDetailModel";

interface IReducerState {
  isLoading: boolean;
  weatherDetail?: IWeatherDetailModel;
  name: string;
}

const initialState = {
  isLoading: false,
  weatherDetail: undefined,
  name: "",
} satisfies IReducerState as IReducerState;

export const setLoading = createAction<boolean>(storeType.setLoading);

export const getDetailWeather = createAsyncThunk<
  IWeatherDetailModel,
  { lat: number; lon: number }
>(storeType.getWeatherDetail, async (location) => {
  const data: IWeatherDetailModel = await getWeatherDetail(
    location.lat,
    location.lon
  );
  return data;
});

export const setName = createAction<string>(storeType.getName);

export const clearDetail = createAction("CLEAR_DETAIL");

export const reducer = createReducer(initialState, (build) => {
  build
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })

    .addCase(setName, (state, { payload }) => {
      state.name = payload;
    })

    .addCase(getDetailWeather.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getDetailWeather.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.weatherDetail = payload;
    })
    .addCase(getDetailWeather.rejected, (state) => {
      state.isLoading = false;
    })

    .addCase(clearDetail, (state) => {
      state.weatherDetail = undefined;
    });
});
