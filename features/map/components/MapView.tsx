"use client";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { COMPANY_LOCATION } from "../constants/company-location";
import MapUpdater from "./MapUpdater";
import { MapProps } from "../types/map-type";

export default function MapView({ center, hotels }: MapProps) {
  const companyLocation: [number, number] = [
    COMPANY_LOCATION.lat,
    COMPANY_LOCATION.lng,
  ];
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{
        height: "600px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater center={center} />

      <Marker position={center}>
        <Popup>
          <div>
            <h3>{COMPANY_LOCATION.name}</h3>
            <p>{COMPANY_LOCATION.address}</p>
          </div>
        </Popup>
      </Marker>

      {hotels.map((hotel) => (
        <Marker key={hotel.id} position={hotel.location}>
          <Popup>
            <div className="space-y-2">
              <h3 className="font-bold">{hotel.name}</h3>

              <p>{hotel.city}</p>

              <p>⭐⭐⭐⭐ {hotel.rating}</p>

              <p>${hotel.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
