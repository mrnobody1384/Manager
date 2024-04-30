import React, { useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMapEvents } from "react-leaflet";
import Modal from "react-modal";
import ModalHeader from "../ModalHeaders/ModalHeader";
function LocationMarker({ positiona }) {
  //   const [position, setPosition] = useState(null);
  const map = useMapEvents({
    mouseover() {
      //   map.locate();
      console.log("yes");
      map.flyTo(positiona, 15);
    },
  });

  return positiona === null ? null : (
    <Marker position={positiona}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapModal({ isOpen, closeModal, position }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            padding: "2px 10px",
            margin: "auto",
            width: "500px",
            height: "200px",
          },
        }}
      >
        <MapContainer
          center={{ lat: 38, lng: 61 }}
          zoom={4}
          scrollWheelZoom={false}
          minZoom={1}
          maxZoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker positiona={position} />
        </MapContainer>
      </Modal>
    </div>
  );
}

export default MapModal;
