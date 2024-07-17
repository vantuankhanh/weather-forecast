import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer/reducer";
import { useDispatch, useSelector } from "react-redux";

const appReducers = combineReducers({
  appStore: reducer,
});

export const store = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
