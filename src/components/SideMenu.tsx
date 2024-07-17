import { FormEvent, useRef, useState } from "react";
import { Input } from "rsuite";
import { getWeatherSearchCity } from "../services/weatherService";
import { IWeatherCity, ILocationSearchModel } from "../models/WeatherModel";
import CitySelect from "./CitySelect";
import { useAppDispatch } from "../store/store";
import { clearDetail, setLoading } from "../store/reducer/reducer";

const SideMenu = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [cityList, setCityList] = useState<IWeatherCity[]>([]);

  const onSearchCity = async (e: FormEvent<HTMLFormElement>) => {
    if (inputRef.current) {
      dispatch(clearDetail());
      e.preventDefault();
      try {
        dispatch(setLoading(true));
        const data: ILocationSearchModel = await getWeatherSearchCity(
          inputRef.current.value
        );
        setCityList(data.list);
        dispatch(setLoading(false));
      } catch {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <div className="w-1/4 bg-orange-400 flex flex-col gap-4">
      <form onSubmit={onSearchCity} className="p-4">
        <Input ref={inputRef} placeholder="Search..." />
        <div className="flex align-top justify-end">
          <span className="text-xs text-white font-bold">Enter to search.</span>
        </div>
      </form>

      <div className="flex flex-col gap-4 overflow-y-auto py-4">
        {cityList.map((c) => {
          return <CitySelect key={`city-${c.id}`} item={c} />;
        })}
      </div>
    </div>
  );
};

export default SideMenu;
