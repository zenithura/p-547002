
import { StatusBar } from "@/components/layout/StatusBar";
import { Navigation } from "@/components/layout/Navigation";
import { SearchBar } from "@/components/layout/SearchBar";
import Map from "@/components/Map";
import { useState } from "react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<google.maps.LatLngLiteral | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <StatusBar />
      
      <main className="pb-16">
        <Map searchLocation={selectedLocation} />
        <SearchBar onLocationSelect={setSelectedLocation} />
      </main>

      <Navigation />
    </div>
  );
};

export default Index;
