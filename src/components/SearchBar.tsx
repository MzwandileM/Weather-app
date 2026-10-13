import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Search city..."
      />
      <button className="primary-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
