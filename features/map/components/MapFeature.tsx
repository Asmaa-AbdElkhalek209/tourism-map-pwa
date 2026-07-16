"use client";

import { useState } from "react";

import Map from "@/features/map/components/Map";
import SearchBox from "@/features/map/components/SearchBox";
import Toolbar from "@/features/map/components/Toolbar";
import HotelFilter from "@/features/map/components/HotelFilter";
import HotelList from "./HotelList";

import { hotels as mockHotels } from "@/features/map/data/hotels";
import { Hotel } from "@/features/map/types/hotel";

import { searchLocation } from "@/features/map/services/searchLocation";

export default function MapFeature() {
  const [center, setCenter] = useState<[number, number]>([
    30.0722502, 31.2861828,
  ]);

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (value: string) => {
    setLoading(true);
    setError("");

    try {
      const data = await searchLocation(value);

      if (!data.length) {
        setError("Location not found.");
        return;
      }

      setCenter([Number(data[0].lat), Number(data[0].lon)]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShowHotels = () => {
    setHotels(mockHotels);
  };

  const handleViewHotel = (hotel: Hotel) => {
    setCenter(hotel.location);
  };

  const filteredHotels =
    filter === "All" ? hotels : hotels.filter((hotel) => hotel.type === filter);

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCenter([coords.latitude, coords.longitude]);
      },
      () => {
        setError("Unable to get your location.");
      }
    );
  };
  return (
    <div className="w-full p-5">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center">
        <Toolbar
          onShowHotels={handleShowHotels}
          onMyLocation={handleMyLocation}
        />
        {hotels.length > 0 && (
          <HotelFilter value={filter} onChange={setFilter} />
        )}

        <SearchBox onSearch={handleSearch} loading={loading} />
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5 lg:flex-row">
        {filteredHotels.length > 0 && (
          <HotelList hotels={filteredHotels} onView={handleViewHotel} />
        )}

        <div className="flex-1">
          <Map center={center} hotels={filteredHotels} />
        </div>
      </div>
    </div>
  );
}
