import { Hotel } from "../types/hotel";
import HotelCard from "./HotelCard";

type Props = {
  hotels: Hotel[];
  onView: (hotel: Hotel) => void;
};

export default function HotelList({ hotels, onView }: Props) {
  return (
    <aside
      className="
        w-full
        lg:w-85
        xl:w-95
        shrink-0
      "
    >
      <div
        className="
          max-h-150
          overflow-y-auto
          rounded-2xl
          bg-[#F8FCFC]
          p-4
          shadow-lg
        "
      >
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onView={onView} />
          ))}
        </div>
      </div>
    </aside>
  );
}
