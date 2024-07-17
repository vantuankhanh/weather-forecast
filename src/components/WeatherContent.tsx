import { useRef, useState } from "react";
import { useHiddenCountHook } from "../hooks/hiddenItemCount";
import { useAppSelector } from "../store/store";
import Time from "./Time";
import WeatherDaily from "./WeatherDaily";
import WeatherDailyDetail from "./WeatherDailyDetail";

const WeatherContent = () => {
  const { weatherDetail, name } = useAppSelector((s) => s.appStore);
  const [weekDayIndex, setWeekDayIndex] = useState(0);

  const dailyContainerRef = useRef<HTMLDivElement>(null);
  const hiddenCount = useHiddenCountHook(
    dailyContainerRef,
    112 + 20,
    weatherDetail!.daily.length
  );

  if (weatherDetail)
    return (
      <div className="flex-1 p-8 overflow-y-auto">
        <Time />

        <h2 className="text-2xl text-red-400 mb-4 font-bold">
          Welcome to {name}
        </h2>

        <div
          ref={dailyContainerRef}
          className="flex flex-wrap gap-6 justify-between"
        >
          {weatherDetail.daily.map((d, i) => {
            return (
              <div key={i} onClick={() => setWeekDayIndex(i)}>
                <WeatherDaily detail={d} />
              </div>
            );
          })}
          {Array(hiddenCount)
            .fill(0)
            .map((_, index) => (
              <div key={`empty-${index}`} className="pb-3 px-2 min-w-28" />
            ))}
        </div>

        <hr className="my-7 border-red-300" />

        <WeatherDailyDetail detail={weatherDetail.daily[weekDayIndex]} />
      </div>
    );

  return null;
};

export default WeatherContent;
