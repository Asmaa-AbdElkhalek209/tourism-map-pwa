export interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
  rating: number;
  type: "Hotel" | "Resort";
  location: [number, number];
}
