
import { Search, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  onLocationSelect: (location: google.maps.LatLngLiteral) => void;
}

export const SearchBar = ({ onLocationSelect }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && window.google?.maps?.places) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['geocode'],
          componentRestrictions: { country: 'TR' },
        }
      );

      autoCompleteRef.current.addListener('place_changed', () => {
        const place = autoCompleteRef.current?.getPlace();
        
        if (place && place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          setSearchValue(place.formatted_address || '');
          onLocationSelect(location);
        }
      });
    }
  }, [onLocationSelect]);

  return (
    <div className="fixed bottom-16 left-0 right-0 px-4 py-2 bg-background">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="pl-10 pr-10 w-full bg-white border border-gray-200 rounded-full shadow-sm"
        />
        <Mic className="absolute right-3 w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};
