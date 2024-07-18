import { memo } from "react";
import { Daily } from "../models/WeatherDetailModel";

const WeatherDaily = memo(({ detail }: { detail: Daily }) => {
  return (
    <div
      className="bg-red-400 text-center text-white text-xl pb-3 px-2 rounded-3xl max-w-28 cursor-pointer"
      style={{ boxShadow: "0.5rem 0.5rem black" }}
    >
      <img
        className="w-full"
        src={`${import.meta.env.VITE_API_IMG}/${detail.weather[0].icon}@2x.png`}
        alt="weather_icon"
      />
      <p className="mb-1 text-2xl font-bold">
        {new Date(detail.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        })}
      </p>
      <p className="text-sm font-semibold">{detail.temp.max}°C</p>
    </div>
  );
});

export default WeatherDaily;
