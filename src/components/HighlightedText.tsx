import { useMemo } from "react";

interface HighlightedTextProps {
  text: string;
  highlights: { start: number; end: number; term: string }[];
}

export function HighlightedText({ text, highlights }: HighlightedTextProps) {
  const segments = useMemo(() => {
    if (!highlights.length) return [{ text, highlighted: false }];

    // Sort highlights by start position
    const sorted = [...highlights].sort((a, b) => a.start - b.start);
    const result: { text: string; highlighted: boolean; term?: string }[] = [];
    let lastEnd = 0;

    sorted.forEach((h) => {
      // Add non-highlighted text before this highlight
      if (h.start > lastEnd) {
        result.push({ text: text.slice(lastEnd, h.start), highlighted: false });
      }
      // Add highlighted text
      result.push({ 
        text: text.slice(h.start, h.end), 
        highlighted: true, 
        term: h.term 
      });
      lastEnd = h.end;
    });

    // Add remaining text
    if (lastEnd < text.length) {
      result.push({ text: text.slice(lastEnd), highlighted: false });
    }

    return result;
  }, [text, highlights]);

  return (
    <span className="text-sm leading-relaxed">
      {segments.map((segment, i) =>
        segment.highlighted ? (
          <mark
            key={i}
            className="bg-highlight-bg text-foreground px-1 py-0.5 rounded font-medium border-b-2 border-highlight"
            title={`Matched: ${segment.term}`}
          >
            {segment.text}
          </mark>
        ) : (
          <span key={i}>{segment.text}</span>
        )
      )}
    </span>
  );
}
