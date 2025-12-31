import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search EHR records... (e.g., diabetes AND hypertension)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-4 h-14 text-base bg-card border-2 border-border focus:border-primary shadow-search transition-all duration-200"
            />
          </div>
          <Button 
            type="submit" 
            size="lg"
            disabled={isLoading || !query.trim()}
            className="h-14 px-8 font-medium"
          >
            {isLoading ? (
              <span className="animate-pulse-subtle">Searching...</span>
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>Operators:</span>
        <Badge variant="operator">AND</Badge>
        <Badge variant="operator">OR</Badge>
        <Badge variant="operator">CONTAINS</Badge>
        <Badge variant="operator">INCLUDES</Badge>
        <span className="text-xs ml-2 opacity-70">
          Example: "chest pain" AND (diabetes OR hypertension)
        </span>
      </div>
    </div>
  );
}
