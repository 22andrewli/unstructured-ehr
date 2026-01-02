import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type GroupOperator = "INCLUDING" | "OR" | "EXCLUDING";

export interface SearchGroup {
  id: string;
  label: string;
  terms: string[];
}

interface SearchBarProps {
  onSearch: (groups: SearchGroup[], operators: GroupOperator[]) => void;
  isLoading?: boolean;
}

const groupLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [groups, setGroups] = useState<SearchGroup[]>([]);
  const [operators, setOperators] = useState<GroupOperator[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTermToGroup();
    }
  };

  const addTermToGroup = () => {
    const term = inputValue.trim();
    if (!term) return;

    const newGroup: SearchGroup = {
      id: crypto.randomUUID(),
      label: groupLabels[groups.length] || `G${groups.length + 1}`,
      terms: [term],
    };

    setGroups([...groups, newGroup]);
    
    // Add operator between groups if this isn't the first group
    if (groups.length > 0) {
      setOperators([...operators, "INCLUDING"]);
    }
    
    setInputValue("");
  };

  const removeGroup = (groupId: string) => {
    const groupIndex = groups.findIndex((g) => g.id === groupId);
    if (groupIndex === -1) return;

    const newGroups = groups.filter((g) => g.id !== groupId);
    
    // Update group labels
    const relabeledGroups = newGroups.map((g, idx) => ({
      ...g,
      label: groupLabels[idx] || `G${idx + 1}`,
    }));

    // Remove the appropriate operator
    const newOperators = [...operators];
    if (groupIndex === 0 && operators.length > 0) {
      newOperators.shift();
    } else if (groupIndex > 0) {
      newOperators.splice(groupIndex - 1, 1);
    }

    setGroups(relabeledGroups);
    setOperators(newOperators);
  };

  const updateOperator = (index: number, value: GroupOperator) => {
    const newOperators = [...operators];
    newOperators[index] = value;
    setOperators(newOperators);
  };

  const handleSearch = () => {
    if (groups.length > 0) {
      onSearch(groups, operators);
    }
  };

  const clearAll = () => {
    setGroups([]);
    setOperators([]);
    setInputValue("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Groups Display */}
        {groups.length > 0 && (
          <div className="mb-3 p-4 bg-card border-2 border-border rounded-lg">
            <div className="flex flex-wrap items-center gap-2">
              {groups.map((group, index) => (
                <div key={group.id} className="contents">
                  {/* Operator Dropdown (appears before groups except the first) */}
                  {index > 0 && (
                    <Select
                      value={operators[index - 1]}
                      onValueChange={(value: GroupOperator) =>
                        updateOperator(index - 1, value)
                      }
                    >
                      <SelectTrigger className="w-[130px] h-8 text-xs font-medium bg-muted border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INCLUDING">INCLUDING</SelectItem>
                        <SelectItem value="OR">OR</SelectItem>
                        <SelectItem value="EXCLUDING">EXCLUDING</SelectItem>
                      </SelectContent>
                    </Select>
                  )}

                  {/* Group Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
                    <span className="text-xs font-bold text-primary">
                      {group.label}:
                    </span>
                    <span className="text-sm text-foreground">
                      {group.terms.join(", ")}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeGroup(group.id)}
                      className="ml-1 p-0.5 rounded-full hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Clear All Button */}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearAll}
                className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
              >
                Clear all
              </Button>
            </div>
          </div>
        )}

        {/* Input Row */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={
                groups.length === 0
                  ? "Type a search term and press Enter..."
                  : "Add another term and press Enter..."
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-12 pr-4 h-14 text-base bg-card border-2 border-border focus:border-primary shadow-search transition-all duration-200"
            />
          </div>
          <Button
            type="button"
            size="lg"
            disabled={isLoading || groups.length === 0}
            onClick={handleSearch}
            className="h-14 px-8 font-medium"
          >
            {isLoading ? (
              <span className="animate-pulse-subtle">Searching...</span>
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>Operators:</span>
        <Badge variant="operator">INCLUDING</Badge>
        <Badge variant="operator">OR</Badge>
        <Badge variant="operator">EXCLUDING</Badge>
        <span className="text-xs ml-2 opacity-70">
          Type a term, press Enter to create a group, then choose operators between groups
        </span>
      </div>
    </div>
  );
}
