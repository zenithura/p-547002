
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = {
  lat: 41.0082,
  lng: 28.9784 // Istanbul coordinates
};

const API_KEY = 'AIzaSyBbUmA0kPB_oaD38rf7pEY1FWKW0pHkKgI';

const Map = () => {
  const [searchValue, setSearchValue] = useState("");
  const [markers, setMarkers] = useState([
    { lat: 41.0082, lng: 28.9784, color: "red" },
    { lat: 41.0095, lng: 28.9784, color: "green" },
    { lat: 41.0070, lng: 28.9790, color: "yellow" },
  ]);

  return (
    <div className="relative w-full h-[calc(100vh-8rem)]">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={15}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: [
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#000000" }]
              },
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }]
              }
            ]
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: marker.color,
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 8,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
