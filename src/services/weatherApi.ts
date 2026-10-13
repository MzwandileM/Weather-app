const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number; // Shift in seconds from UTC
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
}

export interface ForecastData {
  list: ForecastItem[];
  city: {
    name: string;
    timezone: number;
  };
}

// Fetch weather using GPS coordinates
export const fetchWeatherByCoords = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch local weather");
  }

  return response.json();
};

// Fetch weather using city name
export const fetchWeatherByCity = async (
  city: string,
): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};

export const fetchForecastByCity = async (
  city: string,
): Promise<ForecastData> => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch forecast");
  }

  return response.json();
};
