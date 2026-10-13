import { useState, useEffect } from "react";

import {
  fetchWeatherByCoords,
  fetchWeatherByCity,
  type WeatherData,
  fetchForecastByCity,
  type ForecastData,
} from "../services/weatherApi";

export const useWeather = () => {
  const [localWeather, setLocalWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [searchedWeather, setSearchedWeather] = useState<WeatherData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const initializeWeather = async () => {
      try {
        if (!navigator.geolocation) {
          const data = await fetchWeatherByCity("Mbabane");
          if (!controller.signal.aborted) {
            setLocalWeather(data);
          }
          return;
        }

        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          },
        );

        if (controller.signal.aborted) return;

        const data = await fetchWeatherByCoords(
          position.coords.latitude,
          position.coords.longitude,
        );

        if (!controller.signal.aborted) {
          setLocalWeather(data);
        }
      } catch (err) {
        if (controller.signal.aborted) return;

        try {
          const fallbackData = await fetchWeatherByCity("Mbabane");

          if (!controller.signal.aborted) {
            setLocalWeather(fallbackData);
          }
        } catch {
          if (!controller.signal.aborted) {
            setError(
              err instanceof Error ? err.message : "Failed to load weather",
            );
          }
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void initializeWeather();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!localWeather && !searchedWeather) return;

    const activeWeather = searchedWeather || localWeather;
    if (!activeWeather) return;

    let cancelled = false;

    const loadForecast = async () => {
      try {
        const data = await fetchForecastByCity(activeWeather.name);

        if (!cancelled) {
          setForecast(data);
        }
      } catch (err) {
        console.error("Failed to load forecast:", err);
      }
    };

    void loadForecast();

    return () => {
      cancelled = true;
    };
  }, [localWeather, searchedWeather]);

  const searchCity = async (city: string) => {
    if (!city.trim()) return;

    setError(null);
    setLoading(true);

    try {
      const data = await fetchWeatherByCity(city);

      setSearchedWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const cancelSearch = () => {
    setSearchedWeather(null);
    setError(null);
  };

  const activeWeather = searchedWeather || localWeather;

  return {
    weather: activeWeather,
    forecast,
    isSearching: !!searchedWeather,
    loading,
    error,
    searchCity,
    cancelSearch,
  };
};
