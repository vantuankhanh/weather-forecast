import { memo, useEffect, useState } from "react";
import { toDateString, toTimeString } from "../utils/dateToString";
import { useAppSelector } from "../store/store";

const Time = memo(() => {
  const { weatherDetail } = useAppSelector((s) => s.appStore);
  const [time, setTime] = useState(new Date(weatherDetail!.current.dt * 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((pre) => new Date(pre.getTime() + 60000));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-5">
      <h2 className="text-4xl text-red-400 font-bold">{toTimeString(time)}</h2>
      <h4 className="text-xl">
        {toDateString(new Date(weatherDetail!.current.dt * 1000))}
      </h4>
    </div>
  );
});

export default Time;
