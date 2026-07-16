import { Hotel } from "../types/hotel";
// mock data const hotels = await getHotels()
export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hilton Cairo",
    city: "Cairo",
    price: 220,
    rating: 4.8,
    type: "Hotel",
    location: [30.0444, 31.2357],
  },
  {
    id: 2,
    name: "Steigenberger Pyramids",
    city: "Giza",
    price: 260,
    rating: 4.9,
    type: "Hotel",
    location: [29.9773, 31.1325],
  },
  {
    id: 3,
    name: "Hurghada Marriott",
    city: "Hurghada",
    price: 180,
    rating: 4.7,
    type: "Resort",
    location: [27.2579, 33.8116],
  },
  {
    id: 4,
    name: "Jolie Ville Luxor",
    city: "Luxor",
    price: 150,
    rating: 4.6,
    type: "Hotel",
    location: [25.6872, 32.6396],
  },
];
