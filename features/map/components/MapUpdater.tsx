"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

// Move Map when position changes use (useMap)
type MapUpdaterProps = {
  center: [number, number];
};
export default function MapUpdater({ center }: MapUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, map.getZoom(), {
      animate: true,
      duration: 1.5,
    });
  }, [center, map]);

  return null;
}
