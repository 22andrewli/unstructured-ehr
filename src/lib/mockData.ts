import type { EHRResult } from "@/components/ResultsTable";
import type { PatientRecord } from "@/components/PatientRecordsDialog";

// Mock EHR data for demonstration
const mockEHRDatabase = [
  {
    patientId: "PT-849271",
    notes: 12,
    texts: [
      "Patient presents with Type 2 diabetes mellitus, uncontrolled. Blood glucose levels elevated at 245 mg/dL. Current medications include Metformin 1000mg BID. History of hypertension, currently managed with Lisinopril.",
      "Follow-up visit for diabetes management. HbA1c improved to 7.2% from 8.1%. Continue current regimen. Blood pressure stable at 128/82.",
    ],
  },
  {
    patientId: "PT-338492",
    notes: 8,
    texts: [
      "Chief complaint: chest pain and shortness of breath. Patient reports intermittent chest pain for 3 days. History includes hypertension and hyperlipidemia. ECG shows normal sinus rhythm.",
      "Cardiac workup completed. Stress test negative. Chest pain likely musculoskeletal in origin. Continue monitoring blood pressure.",
    ],
  },
  {
    patientId: "PT-571038",
    notes: 15,
    texts: [
      "Patient diagnosed with Type 1 diabetes at age 12. Current insulin regimen: Lantus 20 units at bedtime, Humalog sliding scale with meals. Recent episode of hypoglycemia requiring emergency treatment.",
      "Diabetes education completed. Patient demonstrates proper insulin injection technique. Discussed carbohydrate counting and blood glucose monitoring.",
    ],
  },
  {
    patientId: "PT-692847",
    notes: 6,
    texts: [
      "New diagnosis of essential hypertension. Blood pressure readings consistently above 140/90. No evidence of end-organ damage. Starting Amlodipine 5mg daily.",
      "Blood pressure improved to 132/84. Patient reports good medication compliance. Continue current therapy.",
    ],
  },
  {
    patientId: "PT-104958",
    notes: 22,
    texts: [
      "Complex medical history including diabetes mellitus type 2, hypertension, chronic kidney disease stage 3, and heart failure with preserved ejection fraction. Multiple medication adjustments needed.",
      "Renal function stable. eGFR 45 mL/min. Diabetes control suboptimal with HbA1c 8.5%. Adjusting medications to improve glycemic control while protecting kidney function.",
    ],
  },
  {
    patientId: "PT-827364",
    notes: 4,
    texts: [
      "Annual wellness visit. Patient reports occasional headaches and fatigue. Blood pressure elevated at 148/92. No prior diagnosis of hypertension. Recommend lifestyle modifications and follow-up.",
    ],
  },
  {
    patientId: "PT-445623",
    notes: 10,
    texts: [
      "Patient with longstanding diabetes type 2 now presenting with peripheral neuropathy symptoms. Reports numbness and tingling in bilateral feet. HbA1c 7.8%. Starting Gabapentin for neuropathic pain.",
      "Chest pain evaluation: Patient experienced acute chest pain during exercise. Troponins negative. EKG unremarkable. Likely angina - referring to cardiology.",
    ],
  },
  {
    patientId: "PT-913745",
    notes: 7,
    texts: [
      "Gestational diabetes screening positive. Patient at 26 weeks gestation. Fasting glucose 105 mg/dL. Starting dietary modifications and glucose monitoring. Will reassess in 2 weeks.",
      "Follow-up for gestational diabetes. Blood sugars well controlled with diet alone. Fasting average 92 mg/dL. Continue current management.",
    ],
  },
];

function findTermMatches(
  text: string,
  terms: string[]
): { start: number; end: number; term: string }[] {
  const highlights: { start: number; end: number; term: string }[] = [];
  
  terms.forEach((term) => {
    const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      highlights.push({
        start: match.index,
        end: match.index + match[0].length,
        term: term,
      });
    }
  });

  // Sort and merge overlapping highlights
  highlights.sort((a, b) => a.start - b.start);
  
  return highlights;
}

function parseSearchQuery(query: string): { terms: string[]; operator: 'AND' | 'OR' } {
  const upperQuery = query.toUpperCase();
  
  // Determine primary operator
  const hasAnd = upperQuery.includes(' AND ');
  const hasOr = upperQuery.includes(' OR ');
  
  // Extract terms
  let terms = query
    .split(/\s+(?:AND|OR|CONTAINS|INCLUDES)\s+/i)
    .map(t => t.replace(/[()]/g, '').trim())
    .filter(t => t.length > 0);
  
  // Remove operator keywords that might be standalone
  terms = terms.filter(t => !['AND', 'OR', 'CONTAINS', 'INCLUDES'].includes(t.toUpperCase()));
  
  return {
    terms,
    operator: hasAnd ? 'AND' : 'OR',
  };
}

export function searchEHRs(query: string): {
  results: EHRResult[];
  stats: {
    patientCount: number;
    noteCount: number;
    avgNotesPerPatient: number;
  };
} {
  const { terms, operator } = parseSearchQuery(query);
  
  if (terms.length === 0) {
    return {
      results: [],
      stats: { patientCount: 0, noteCount: 0, avgNotesPerPatient: 0 },
    };
  }

  const matchedResults: EHRResult[] = [];
  const matchedPatients = new Set<string>();
  let totalNotes = 0;

  mockEHRDatabase.forEach((patient) => {
    patient.texts.forEach((text) => {
      const textLower = text.toLowerCase();
      
      // Check if text matches based on operator
      const termMatches = terms.map(term => 
        textLower.includes(term.toLowerCase())
      );
      
      const isMatch = operator === 'AND' 
        ? termMatches.every(m => m)
        : termMatches.some(m => m);

      if (isMatch) {
        const highlights = findTermMatches(text, terms);
        
        if (highlights.length > 0) {
          matchedResults.push({
            patientId: patient.patientId,
            matchedText: text,
            highlights,
            totalNotes: patient.notes,
          });
          
          if (!matchedPatients.has(patient.patientId)) {
            matchedPatients.add(patient.patientId);
            totalNotes += patient.notes;
          }
        }
      }
    });
  });

  const patientCount = matchedPatients.size;
  
  return {
    results: matchedResults,
    stats: {
      patientCount,
      noteCount: totalNotes,
      avgNotesPerPatient: patientCount > 0 
        ? Math.round((totalNotes / patientCount) * 10) / 10 
        : 0,
    },
  };
}

// Get all records for a specific patient
export function getPatientRecords(patientId: string): PatientRecord[] {
  const patient = mockEHRDatabase.find(p => p.patientId === patientId);
  
  if (!patient) return [];
  
  // Generate mock dates for each note
  const baseDate = new Date('2024-01-15');
  
  return patient.texts.map((text, index) => {
    const noteDate = new Date(baseDate);
    noteDate.setDate(baseDate.getDate() - (patient.texts.length - 1 - index) * 45);
    
    return {
      noteIndex: index + 1,
      text,
      date: noteDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };
  });
}
