"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// Centered on the "PORTLAND" label
const PORTLAND: [number, number] = [45.52, -122.6762]

export default function PortlandMap() {
  return (
    <div className="portland-map-wrapper">
      <MapContainer
        center={PORTLAND}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={true}
        dragging={true}
        style={{ height: "100%", width: "100%", background: "#1d222a" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />
      </MapContainer>

      {/* Color tint overlay */}
      <div className="portland-map-tint" />
    </div>
  )
}
