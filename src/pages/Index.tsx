
import { StatusBar } from "@/components/layout/StatusBar";
import { Navigation } from "@/components/layout/Navigation";
import { SearchBar } from "@/components/layout/SearchBar";
import Map from "@/components/Map";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StatusBar />
      
      <main className="pb-16">
        {/* Search Section */}
        <SearchBar />

        {/* Map Section */}
        <Map />
      </main>

      <Navigation />
    </div>
  );
};

export default Index;
