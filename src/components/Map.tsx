
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Input } from "@/components/ui/input";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultCenter = {
  lat: 41.0082,
  lng: 28.9784 // Istanbul coordinates
};

const Map = () => {
  const [apiKey, setApiKey] = useState('');

  if (!apiKey) {
    return (
      <div className="p-4">
        <p className="mb-2 text-sm text-muted-foreground">Please enter your Google Maps API key to view the map:</p>
        <Input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter Google Maps API key"
          className="mb-2"
        />
        <p className="text-xs text-muted-foreground">
          You can get your API key from the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Google Cloud Console</a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[calc(100vh-8rem)]">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={14}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
