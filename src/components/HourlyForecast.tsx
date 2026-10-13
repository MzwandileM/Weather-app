import type { ForecastData } from "../services/weatherApi";
import HourlyCard from "./HourlyCard";

interface HourlyForecastProps {
  forecast: ForecastData;
}

const HourlyForecast = ({ forecast }: HourlyForecastProps) => {
  return (
    <section className="card hourly-forecast">
      <div className="card-header">
        <div>
          <p className="card-title">Hourly Forecast</p>
        </div>
      </div>

      <div className="hourly-list">
        {forecast.list.slice(0, 8).map((item) => (
          <HourlyCard
            key={item.dt}
            time={new Date(item.dt * 1000).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
            temperature={item.main.temp}
            speed={item.wind.speed}
            icon={item.weather[0].icon}
            description={item.weather[0].description}
          />
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
