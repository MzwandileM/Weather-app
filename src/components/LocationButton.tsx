interface LocationButtonProps {
  onLocation: () => void;
}
const LocationButton = ({ onLocation }: LocationButtonProps) => {
  return (
    <button onClick={onLocation} className="secondary-button">
      📍 Current location
    </button>
  );
};

export default LocationButton;
