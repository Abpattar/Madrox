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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-card shadow-lg border border-border rounded-full flex items-center px-4 py-3 gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex-shrink-0 rounded-full"
        >
          <Camera className="w-5 h-5" />
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
          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
        />
        
        <Button 
          size="icon" 
          className="flex-shrink-0 rounded-full"
          onClick={handleSearch}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
