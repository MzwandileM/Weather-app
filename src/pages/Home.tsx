import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import WeatherDetails from "../components/WeatherDetails";
import FiveDayForecast from "../components/FiveDayForecast";
import HourlyForecast from "../components/HourlyForecast";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import { useWeather } from "../hooks/useWeather";

const Home = () => {
  const { weather, forecast, loading, error, searchCity } = useWeather();

  return (
    <div className="container">
      <Header searchCity={searchCity} />
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && weather && (
        <main className="dashboard">
          <CurrentWeather weather={weather} />

          <WeatherDetails weather={weather} />

          {forecast && <FiveDayForecast forecast={forecast} />}

          {forecast && <HourlyForecast forecast={forecast} />}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Home;
