import type { WeatherData } from "../services/weatherApi";

interface WeatherDetailsProps {
  weather: WeatherData;
}
const SunTimes = ({ weather }: WeatherDetailsProps) => {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div className="sun-times">
      <div className="sun-time">
        <div className="sun-time-icon">🌅</div>

        <div className="sun-time-content">
          <span className="sun-time-label">Sunrise</span>

          <strong className="sun-time-value">
            {formatTime(weather.sys.sunrise)}
          </strong>
        </div>
      </div>

      <div className="sun-time">
        <div className="sun-time-icon">🌇</div>

        <div className="sun-time-content">
          <span className="sun-time-label">Sunset</span>

          <strong className="sun-time-value">
            {formatTime(weather.sys.sunset)}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default SunTimes;
