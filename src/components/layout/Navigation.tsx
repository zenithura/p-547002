
import { Map, Bell, Home, User } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center py-2">
        <button className="flex flex-col items-center gap-1 px-4">
          <Map className="w-6 h-6 text-green-600" />
          <span className="text-xs">Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4">
          <Bell className="w-6 h-6 text-gray-400" />
          <span className="text-xs">Notifications</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4">
          <Home className="w-6 h-6 text-gray-400" />
          <span className="text-xs">Points</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4">
          <User className="w-6 h-6 text-gray-400" />
          <span className="text-xs">Home</span>
        </button>
      </div>
    </nav>
  );
};
