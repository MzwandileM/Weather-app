import type { WeatherData } from "../services/weatherApi";
import SunTimes from "./SunTimes";
import WeatherIcon from "./WeatherIcon";

interface WeatherDetailsProps {
  weather: WeatherData;
}

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  const condition = weather.weather[0];

  return (
    <section className="card weather-details-card">
      <div>
        <p className="card-title">Current Weather</p>
      </div>
      <div className="weather-details-layout">
        <div className="weather-overview">
          <div className="temperature-wrapper">
            <span className="temperature">
              {Math.round(weather.main.temp)}°
            </span>
            <span className="feels-like">
              Feels like {Math.round(weather.main.feels_like)}°
            </span>
            <SunTimes weather={weather} />
          </div>

          <div className="weatherIcon-wrapper">
            <WeatherIcon
              icon={condition.icon}
              description={condition.description}
            />
            <span className="weather-description">{condition.description}</span>
          </div>
        </div>

        <div className="weather-metrics">
          <div className="weather-metric">
            <span>〰️</span>
            <span>Humidity</span>
            <strong>{weather.main.humidity}%</strong>
          </div>

          <div className="weather-metric">
            <span>💨</span>
            <span>Wind Speed</span>
            <strong>{weather.wind.speed} m/s</strong>
          </div>

          <div className="weather-metric">
            <span>🌡️</span>
            <span>Pressure</span>
            <strong>{weather.main.pressure} hPa</strong>
          </div>

          <div className="weather-metric">
            <span>☀️</span>
            <span>UV</span>
            <strong>—</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
