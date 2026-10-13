import { useEffect, useState } from "react";
import type { WeatherData } from "../services/weatherApi";
import WeatherIcon from "./WeatherIcon";

interface CurrentWeatherProps {
  weather: WeatherData;
}

const CurrentWeather = ({ weather }: CurrentWeatherProps) => {
  const condition = weather.weather[0];

  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const cityTime = new Date(Date.now() + weather.timezone * 1000);

      const options = { timeZone: "UTC" };

      setCurrentTime(
        cityTime.toLocaleTimeString("en-GB", {
          ...options,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );

      setCurrentDay(
        cityTime.toLocaleDateString("en-US", {
          ...options,
          weekday: "long",
        }),
      );

      setCurrentDate(
        cityTime.toLocaleDateString("en-US", {
          ...options,
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      );
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60_000);

    return () => clearInterval(intervalId);
  }, [weather.timezone]);

  return (
    <section className="card current-weather">
      <div className="location">
        <h2>{weather.name}</h2>
        <p>
          {currentDay}, {currentDate}
        </p>
      </div>

      <div className="current-weather-main">
        <div className="temperature-wrapper">
          <span className="temperature">{currentTime}</span>

          <span className="feels-like">
            Feels like {Math.round(weather.main.feels_like)}°
          </span>
        </div>

        <div className="weather-condition">
          <WeatherIcon
            icon={condition.icon}
            description={condition.description}
          />
          <span>{condition.description}</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
