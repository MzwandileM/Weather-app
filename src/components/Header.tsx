import LocationButton from "./LocationButton";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchCity: (city: string) => void;
}

const Header = ({ searchCity }: HeaderProps) => {
  const handleLocation = () => {
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo">
          <div className="logo-icon" style={{ marginRight: "12px" }}>
            ☁️
          </div>
          Skyline<span style={{ color: "var(--primary)" }}>Weather</span>
        </a>
      </div>

      <SearchBar onSearch={searchCity} />
      <LocationButton onLocation={handleLocation} />
    </header>
  );
};

export default Header;
