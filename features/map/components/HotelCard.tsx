import { Hotel } from "../types/hotel";

type Props = {
  hotel: Hotel;
  onView: (hotel: Hotel) => void;
};

export default function HotelCard({ hotel, onView }: Props) {
  return (
    <div className="rounded-2xl border border-[#B8E3E8] p-5 shadow-sm transition hover:shadow-lg">
      <h2 className="text-lg font-bold">{hotel.name}</h2>

      <p>{hotel.city}</p>

      <p>⭐⭐⭐⭐⭐⭐ {hotel.rating}</p>

      <p>${hotel.price}</p>

      <button
        onClick={() => onView(hotel)}
        className="mt-4 rounded-lg bg-[#027C8C] px-4 py-2 text-white"
      >
        عرض على الخريطة
      </button>
    </div>
  );
}
