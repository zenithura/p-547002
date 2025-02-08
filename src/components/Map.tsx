
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [41.0082, 28.9784], // Istanbul coordinates
      zoom: 14
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => {
      map.current?.remove();
    };
  }, [token]);

  if (!token) {
    return (
      <div className="p-4">
        <p className="mb-2 text-sm text-muted-foreground">Please enter your Mapbox public token to view the map:</p>
        <Input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter Mapbox token"
          className="mb-2"
        />
        <p className="text-xs text-muted-foreground">
          You can get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary">mapbox.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[calc(100vh-8rem)]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
