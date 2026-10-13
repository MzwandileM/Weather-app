interface WeatherIconProps {
  icon: string;
  description: string;
}

const WeatherIcon = ({ icon, description }: WeatherIconProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return <img className="weather-icon" src={iconUrl} alt={description} />;
};

export default WeatherIcon;
