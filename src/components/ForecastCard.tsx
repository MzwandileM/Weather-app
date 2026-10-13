interface ForecastCardProps {
  day: string;
  temperature: number;
  description: string;
  icon: string;
}

const ForecastCard = ({
  day,
  temperature,
  description,
  icon,
}: ForecastCardProps) => {
  return (
    <div className="forecast-card">
      <strong className="forecast-temperature">
        {Math.round(temperature)}°C
      </strong>

      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
        className="forecast-weather-icon"
      />

      <span className="forecast-condition">{description}</span>

      <span className="forecast-day">{day}</span>
    </div>
  );
};

export default ForecastCard;
