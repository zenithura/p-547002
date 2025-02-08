
import { Search, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="fixed bottom-16 left-0 right-0 px-4 py-2 bg-background">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search"
          className="pl-10 pr-10 w-full bg-white border border-gray-200 rounded-full shadow-sm"
        />
        <Mic className="absolute right-3 w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};
