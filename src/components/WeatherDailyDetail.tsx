import { memo } from "react";
import { Daily } from "../models/WeatherDetailModel";
import { toTimeString } from "../utils/dateToString";

const DetailHeader = memo(({ str }: { str: string }) => {
  return <h3 className="text-red-400 pb-2 font-semibold">{str}</h3>;
});

const DetailChild = memo(({ str }: { str: string }) => {
  return <p className="pb-1">{str}</p>;
});

const WeatherDailyDetail = memo(({ detail }: { detail: Daily }) => {
  return (
    <div>
      <h2 className="text-red-400 text-3xl mb-3 font-bold">
        {new Date(detail.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </h2>
      <div className="flex flex-wrap gap-3">
        <div className="mr-6">
          <DetailHeader str="Sun and Moon" />
          <DetailChild
            str={`Sunrise: ${toTimeString(new Date(detail.sunrise * 1000))}`}
          />
          <DetailChild
            str={`Sunset: ${toTimeString(new Date(detail.sunset * 1000))}`}
          />
          <DetailChild
            str={`Moonrise: ${toTimeString(new Date(detail.moonrise * 1000))}`}
          />
          <DetailChild
            str={`Moonset: ${toTimeString(new Date(detail.moonset * 1000))}`}
          />
        </div>
        <div className="mr-6">
          <DetailHeader str="Tempurature" />
          <DetailChild str={`Day: ${detail.temp.day}°`} />
          <DetailChild str={`Min: ${detail.temp.min}°`} />
          <DetailChild str={`Max: ${detail.temp.max}°`} />
          <DetailChild str={`Night: ${detail.temp.night}°`} />
        </div>
        <div className="mr-6">
          <DetailHeader str="Feels like" />
          <DetailChild str={`Day: ${detail.feels_like.day}°`} />
          <DetailChild str={`Night: ${detail.feels_like.night}°`} />
          <DetailChild str={`Evening: ${detail.feels_like.eve}°`} />
          <DetailChild str={`Morning: ${detail.feels_like.morn}°`} />
        </div>
        <div className="mr-6">
          <DetailHeader str="Other" />
          <DetailChild str={`Wind degrees: ${detail.wind_deg}°`} />
          <DetailChild str={`Wind speed: ${detail.wind_speed}m/s`} />
          <DetailChild str={`Cloud: ${detail.clouds}%`} />
          <DetailChild str={`UV: ${detail.uvi}`} />
        </div>
      </div>
    </div>
  );
});

export default WeatherDailyDetail;
