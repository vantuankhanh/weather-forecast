import { getAPI } from "./apiFunction";

export const getWeatherSearchCity = async (q: string) =>
  await getAPI(`${import.meta.env.VITE_API_FIND}q=${q}`);

export const getWeatherDetail = async (lat: number, lon: number) =>
  await getAPI(import.meta.env.VITE_API_ONECALL + `lat=${lat}&lon=${lon}`);
