import { useState } from "react";
import { Users, FileText, TrendingUp, Database } from "lucide-react";
import { SearchBar, type SearchGroup, type GroupOperator } from "@/components/SearchBar";
import { StatCard } from "@/components/StatCard";
import { ResultsTable, type EHRResult } from "@/components/ResultsTable";
import { searchEHRs } from "@/lib/mockData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<EHRResult[]>([]);
  const [stats, setStats] = useState({
    patientCount: 0,
    noteCount: 0,
    avgNotesPerPatient: 0,
  });

  const handleSearch = async (groups: SearchGroup[], operators: GroupOperator[]) => {
    setIsLoading(true);
    
    // Simulate network delay for realism
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const searchResults = searchEHRs(groups, operators);
    setResults(searchResults.results);
    setStats(searchResults.stats);
    setHasSearched(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Database className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EHR Search</h1>
              <p className="text-xs text-muted-foreground">Electronic Health Records Query Interface</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Search Section */}
        <section className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Search Unstructured Records
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Use boolean operators to find specific patterns across de-identified patient records
            </p>
          </div>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {/* Results Section */}
        {hasSearched && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                label="Patients Found"
                value={stats.patientCount.toLocaleString()}
                icon={<Users className="h-5 w-5" />}
                description="Unique de-identified patients"
              />
              <StatCard
                label="Total Notes"
                value={stats.noteCount.toLocaleString()}
                icon={<FileText className="h-5 w-5" />}
                description="Across matched patients"
              />
              <StatCard
                label="Avg. Notes / Patient"
                value={stats.avgNotesPerPatient.toFixed(1)}
                icon={<TrendingUp className="h-5 w-5" />}
                description="Mean note frequency"
              />
            </section>

            {/* Results Table */}
            <section>
              {results.length > 0 ? (
                <ResultsTable results={results} />
              ) : (
                <div className="text-center py-16 bg-card border border-border rounded-lg">
                  <div className="text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-40" />
                    <p className="text-lg font-medium">No matching records found</p>
                    <p className="text-sm mt-1">Try adjusting your search terms or operators</p>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {/* Initial State */}
        {!hasSearched && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
              <FileText className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Ready to Search
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Enter keywords and operators above to search through de-identified electronic health records. 
              Try searching for terms like "diabetes" or "diabetes AND hypertension".
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="container mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            De-identified data for demonstration purposes only. All patient identifiers are randomized.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
