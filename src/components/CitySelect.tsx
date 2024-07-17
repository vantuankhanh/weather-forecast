import { memo } from "react";
import { IWeatherCity } from "../models/WeatherModel";
import {
  clearDetail,
  getDetailWeather,
  setName,
} from "../store/reducer/reducer";
import { useAppDispatch } from "../store/store";

const CitySelect = memo(({ item }: { item: IWeatherCity }) => {
  const dispatch = useAppDispatch();

  const onCityClick = () => {
    dispatch(clearDetail());
    dispatch(getDetailWeather({ lat: item.coord.lat, lon: item.coord.lon }));
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
            }/${item.sys.country.toLowerCase()}.png`}
            alt="flag"
          />
          <h3 className="font-bold text-base">{item.name}</h3>
        </div>
        <div>
          <p className="mr-2 bg-amber-200 px-2 pt-0.5 pb-1.5 rounded-2xl font-bold">
            {item.main.temp}°F
          </p>
        </div>
      </div>

      <div className="items-center leading-6">
        <p>
          Temperature from {item.main.temp_min}° to {item.main.temp_max}°
          <br />
          Wind {item.wind.speed}m/s. Clouds {item.clouds.all}%
          <br />
          Geo coords [{item.coord.lat}, {item.coord.lon}]
        </p>
      </div>
    </div>
  );
});

export default CitySelect;
