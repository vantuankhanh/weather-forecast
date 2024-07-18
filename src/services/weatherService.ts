import { ILocationCoord } from "../models/LocationCoord";
import { IWeatherResponse } from "../models/WeatherModel";
import { getAPI } from "./apiFunction";

export const getWeatherDetail = async (lat: number, lon: number) =>
  await getAPI(
    import.meta.env.VITE_API_ONECALL + `lat=${lat}&lon=${lon}&units=metric`
  );

export const getWeatherSearchCity = async (q: string) => {
  try {
    const locations: ILocationCoord[] = await getAPI(
      `${import.meta.env.VITE_API_GEO_DIRECT}q=${q}`
    );
    if (locations) {
      const res: IWeatherResponse[] = [];
      for (const location of locations) {
        const weather_location = await getAPI(
          import.meta.env.VITE_API_ONECALL +
            `lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,daily,alerts&units=metric`
        );
        res.push({ ...location, ...weather_location });
      }
      console.log(res);
      return res;
    }
    return false;
  } catch {
    return false;
  }
};
