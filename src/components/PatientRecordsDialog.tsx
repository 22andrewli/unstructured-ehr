import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface PatientRecord {
  noteIndex: number;
  text: string;
  date: string;
}

interface PatientRecordsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patientId: string;
  records: PatientRecord[];
}

export function PatientRecordsDialog({
  open,
  onOpenChange,
  patientId,
  records,
}: PatientRecordsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span>Patient Records</span>
            <Badge variant="secondary" className="font-mono">
              {patientId}
            </Badge>
            <Badge variant="outline" className="ml-auto">
              {records.length} notes
            </Badge>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[80px] font-semibold">#</TableHead>
                <TableHead className="w-[120px] font-semibold">Date</TableHead>
                <TableHead className="font-semibold">EHR Record</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.noteIndex}>
                  <TableCell className="font-mono text-sm text-muted-foreground">
                    {record.noteIndex}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                    {record.date}
                  </TableCell>
                  <TableCell className="text-sm leading-relaxed">
                    {record.text}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
