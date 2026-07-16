"use client";

import { useState } from "react";

import Map from "@/features/map/components/Map";
import SearchBox from "@/features/map/components/SearchBox";
import Toolbar from "@/features/map/components/Toolbar";

import { hotels as mockHotels } from "@/features/map/data/hotels";
import { Hotel } from "@/features/map/types/hotel";

import { searchLocation } from "@/features/map/services/searchLocation";

export default function MapFeature() {
  const [center, setCenter] = useState<[number, number]>([
    30.0722502, 31.2861828,
  ]);

  const [hotels, setHotels] = useState<Hotel[]>([]);

  const handleSearch = async (value: string) => {
    const data = await searchLocation(value);

    if (!data.length) return;

    setCenter([Number(data[0].lat), Number(data[0].lon)]);
  };

  const handleShowHotels = () => {
    setHotels(mockHotels);
  };

  return (
    <div className="w-full p-5">
      <div className="mb-5 flex flex-col md:flex-row items-center gap-4">
        <SearchBox onSearch={handleSearch} />

        <Toolbar onShowHotels={handleShowHotels} />
      </div>

      <Map center={center} hotels={hotels} />
    </div>
  );
}
