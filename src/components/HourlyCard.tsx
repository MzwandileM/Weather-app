interface HourlyCardProps {
  time: string;
  speed: number;
  temperature: number;
  icon: string;
  description: string;
}

const HourlyCard = ({
  time,
  speed,
  temperature,
  icon,
  description,
}: HourlyCardProps) => {
  return (
    <div className="hourly-card">
      <span className="hourly-time">{time}</span>

      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
        className="weather-icon"
      />

      <strong className="hourly-temperature">{Math.round(temperature)}°</strong>

      <span className="hourly-wind-icon" aria-label="Wind">
        💨
      </span>
      <span className="hourly-wind">{speed.toFixed(1)} m/s</span>
    </div>
  );
};

export default HourlyCard;
