import { useMemo } from "react";
import type { ForecastData } from "../services/weatherApi";
import ForecastCard from "./ForecastCard";

interface FiveDayForecastProps {
  forecast: ForecastData;
}

const FiveDayForecast = ({ forecast }: FiveDayForecastProps) => {
  const dailyForecast = useMemo(() => {
    const days = new Map<string, (typeof forecast.list)[number]>();

    forecast.list.forEach((item) => {
      const date = new Date((item.dt + forecast.city.timezone) * 1000)
        .toISOString()
        .slice(0, 10);

      const existing = days.get(date);

      if (
        !existing ||
        Math.abs(Number(item.dt_txt.slice(11, 13)) - 12) <
          Math.abs(Number(existing.dt_txt.slice(11, 13)) - 12)
      ) {
        days.set(date, item);
      }
    });

    return Array.from(days.entries()).slice(0, 5);
  }, [forecast]);

  return (
    <section className="card five-day-forecast">
      <div className="card-header">
        <div>
          <p className="card-title">5-Day Forecast</p>
        </div>
      </div>

      <div className="forecast-list">
        {dailyForecast.map(([date, item], index) => (
          <ForecastCard
            key={date}
            day={
              index === 0
                ? "Today"
                : new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
                    weekday: "long",
                    timeZone: "UTC",
                  })
            }
            temperature={item.main.temp}
            description={item.weather[0].description}
            icon={item.weather[0].icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FiveDayForecast;
