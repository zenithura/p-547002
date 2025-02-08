
import { Map, Bell, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around items-center py-2">
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Map className="w-6 h-6" />
          <span className="text-xs">Map</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Bell className="w-6 h-6" />
          <span className="text-xs">Notifications</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Points</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <User className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Button>
      </div>
    </nav>
  );
};
