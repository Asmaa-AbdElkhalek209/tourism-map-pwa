"use client";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { COMPANY_LOCATION } from "../constants/company-location";

const MapView = () => {
  const companyLocation: [number, number] = [
    COMPANY_LOCATION.lat,
    COMPANY_LOCATION.lng,
  ];
  return (
    <MapContainer
      center={companyLocation}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={companyLocation}>
        <Popup>
          <div>
            <h3>{COMPANY_LOCATION.name}</h3>
            <p>{COMPANY_LOCATION.address}</p>
            <button className="text-red-700">View Details</button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;

//  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //دي الـ URL اللي Leaflet بيجيب منه صور الخريطة
//center={[30.0444, 31.2357]} //ده الـ Latitude والـ Longitude ارقام ثابته للوكيشن بعد كدا هجبها من api
// TileLayer;

// الخريطة نفسها عبارة عن صور صغيرة جدًا اسمها Tiles.

// لما تعملي Zoom، المكتبة بتحميل Tiles جديدة.

// فـ TileLayer هو اللي بيجيب الصور دي من OpenStreetMap.
