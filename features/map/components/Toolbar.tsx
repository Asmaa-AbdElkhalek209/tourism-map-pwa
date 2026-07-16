type ToolbarProps = {
  onShowHotels: () => void;
  onMyLocation: () => void;
};

export default function Toolbar({ onShowHotels, onMyLocation }: ToolbarProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onMyLocation}
        className="rounded-xl border border-[#027C8C] px-5 py-3 text-[#027C8C]"
      >
        📍 My Location
      </button>
      <button
        onClick={onShowHotels}
        className="rounded-xl bg-[#027C8C] px-5 py-3 text-white"
      >
        🏨 Hotels
      </button>
    </div>
  );
}
