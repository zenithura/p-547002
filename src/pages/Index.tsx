import { StatusBar } from "@/components/layout/StatusBar";
import { Navigation } from "@/components/layout/Navigation";
import { SearchBar } from "@/components/layout/SearchBar";
import { Card } from "@/components/ui/card";
import { ChevronRight, ThermometerSun } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StatusBar />
      
      <main className="pb-16">
        {/* Weather Section */}
        <section className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ThermometerSun className="w-6 h-6" />
              <span className="text-2xl font-semibold">2°</span>
            </div>
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </div>
        </section>

        {/* Search Section */}
        <SearchBar />

        {/* Content Cards */}
        <section className="p-4 space-y-4">
          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-semibold">Featured Content</h3>
                <p className="text-sm text-muted-foreground">
                  Discover what's new today
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-semibold">Quick Actions</h3>
                <p className="text-sm text-muted-foreground">
                  Frequently used features
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-semibold">Recent Activity</h3>
                <p className="text-sm text-muted-foreground">
                  Your latest interactions
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Index;