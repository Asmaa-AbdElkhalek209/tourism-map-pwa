"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[30.0444, 31.2357]} //ده الـ Latitude والـ Longitude ارقام ثابته للوكيشن بعد كدا هجبها من api
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //دي الـ URL اللي Leaflet بيجيب منه صور الخريطة
      />
    </MapContainer>
  );
};

export default Map;

// TileLayer;

// الخريطة نفسها عبارة عن صور صغيرة جدًا اسمها Tiles.

// لما تعملي Zoom، المكتبة بتحميل Tiles جديدة.

// فـ TileLayer هو اللي بيجيب الصور دي من OpenStreetMap.
