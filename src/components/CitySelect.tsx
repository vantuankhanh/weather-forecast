import { memo } from "react";
import { IWeatherResponse } from "../models/WeatherModel";
import {
  clearDetail,
  getDetailWeather,
  setName,
} from "../store/reducer/reducer";
import { useAppDispatch } from "../store/store";

const CitySelect = memo(({ item }: { item: IWeatherResponse }) => {
  const dispatch = useAppDispatch();

  const onCityClick = () => {
    dispatch(clearDetail());
    dispatch(getDetailWeather({ lat: item.lat, lon: item.lon }));
    dispatch(setName(item.name));
  };

  return (
    <div
      onClick={onCityClick}
      className="bg-white mx-4 p-2 rounded-xl cursor-pointer"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`${
              import.meta.env.VITE_API_IMAGE_FLAGS
            }/${item.country.toLowerCase()}.png`}
            alt="flag"
          />
          <h3 className="font-bold text-base">{item.name}</h3>
        </div>
        <div className="flex items-center">
          <p className="mr-2 bg-amber-200 px-2 pt-0.5 pb-1.5 rounded-md font-bold">
            {item.current.temp}°C
          </p>
        </div>
      </div>

      <div className="items-center leading-6">
        <p>
          Feels like: {item.current.feels_like}°C
          <br />
          Wind speed: {item.current.wind_speed}m/s. Clouds {item.current.clouds}
          %
          <br />
          Geo coords: [{item.lat}, {item.lon}]
        </p>
      </div>
    </div>
  );
});

export default CitySelect;
