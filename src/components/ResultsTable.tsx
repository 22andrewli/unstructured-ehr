import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HighlightedText } from "./HighlightedText";
import { Badge } from "@/components/ui/badge";
import { PatientRecordsDialog, type PatientRecord } from "./PatientRecordsDialog";
import { getPatientRecords } from "@/lib/mockData";

export interface EHRResult {
  patientId: string;
  matchedText: string;
  highlights: { start: number; end: number; term: string }[];
  totalEncounters: number;
}

interface ResultsTableProps {
  results: EHRResult[];
}

export function ResultsTable({ results }: ResultsTableProps) {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRowClick = (patientId: string) => {
    const records = getPatientRecords(patientId);
    setSelectedPatient(patientId);
    setPatientRecords(records);
    setDialogOpen(true);
  };

  if (!results.length) return null;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-stat animate-fade-in">
      <div className="px-6 py-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground">
          Matched Records
          <Badge variant="secondary" className="ml-2">
            {results.length} results
          </Badge>
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[140px] font-semibold">Patient #</TableHead>
              <TableHead className="font-semibold">Matched EHR Text</TableHead>
              <TableHead className="w-[120px] text-right font-semibold">Encounters</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow 
                key={`${result.patientId}-${index}`}
                className="group cursor-pointer hover:bg-muted/50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleRowClick(result.patientId)}
              >
                <TableCell className="font-mono text-sm text-primary font-medium">
                  {result.patientId}
                </TableCell>
                <TableCell className="max-w-2xl">
                  <div className="py-1">
                    <HighlightedText 
                      text={result.matchedText} 
                      highlights={result.highlights} 
                    />
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary" className="tabular-nums">
                    {result.totalEncounters}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <PatientRecordsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        patientId={selectedPatient || ""}
        records={patientRecords}
      />
    </div>
  );
}
