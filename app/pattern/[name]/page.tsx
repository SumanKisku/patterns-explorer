"use client"

import { useParams } from "next/navigation";
import { patterns } from "@/data/patterns";

interface Pattern {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  pattern: Pattern;
}

export default function PatternDetail() {
  const { name } = useParams();

  // Find the pattern based on the name
  const pattern = patterns.find((p) => p.id.toString() === name);

  // If no pattern is found, display an error message
  if (!pattern) {
    return <div>Pattern not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{pattern.name}</h1>
      <img src={pattern.imageUrl} alt={pattern.name} className="w-full h-auto mb-4" />
      <p className="text-lg text-gray-700">
        {/* You can add a description or any other details about the pattern here */}
        This pattern represents a {pattern.name} in technical analysis.
      </p>
    </div>
  );
}
;
