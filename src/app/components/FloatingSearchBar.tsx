import { Camera, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export function FloatingSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Handle search logic
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6 z-50">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl shadow-primary/10 border border-white/50 rounded-full flex items-center px-6 py-4 gap-4 transition-all hover:shadow-primary/20 hover:scale-[1.01]">
        <Button
          variant="ghost"
          size="icon"
          className="flex-shrink-0 rounded-full w-10 h-10 hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Camera className="w-6 h-6 text-muted-foreground" />
        </Button>

        <Input
          type="text"
          placeholder="Search symptoms, doctors, or upload a bill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-auto text-lg placeholder:text-muted-foreground/60"
        />

        <Button
          size="icon"
          className="flex-shrink-0 rounded-full w-12 h-12 shadow-md bg-gradient-to-tr from-primary to-secondary border-none hover:shadow-lg transition-all"
          onClick={handleSearch}
        >
          <Send className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
