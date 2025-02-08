import { Battery, Signal, Wifi } from "lucide-react";

export const StatusBar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-background">
      <div className="text-sm font-medium">9:41</div>
      <div className="flex items-center gap-2">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </header>
  );
};