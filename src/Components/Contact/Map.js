import React, { useState } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export const showDataOnMap = () => (
  <Popup>
    <div className="info-container"></div>
  </Popup>
);

const Map = () => {
  return (
    <div className="map">
      <MapContainer
        center={[28.4595, 77.0266]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[28.4595, 77.0266]}>
          <Popup>
            <div className="map__popup">
              <p>Sahil Rao</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
