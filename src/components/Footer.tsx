const Footer = () => {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} SkylineWeather.</span>
      <span>Weather data provided by</span>
      <a
        href="https://openweathermap.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        OpenWeather
      </a>
    </footer>
  );
};

export default Footer;
