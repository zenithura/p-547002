
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

interface MapProps {
  searchLocation?: google.maps.LatLngLiteral;
}

const Map = ({ searchLocation }: MapProps) => {
  const [center, setCenter] = useState(defaultCenter);
  const [markers, setMarkers] = useState([
    { lat: 41.0082, lng: 28.9784, color: "red" },
    { lat: 41.0095, lng: 28.9784, color: "green" },
    { lat: 41.0070, lng: 28.9790, color: "yellow" },
  ]);

  useEffect(() => {
    if (searchLocation) {
      setCenter(searchLocation);
    }
  }, [searchLocation]);

  return (
    <div className="relative w-full h-[calc(100vh-8rem)]">
      <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
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
          {searchLocation && (
            <Marker
              position={searchLocation}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "blue",
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 8,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
