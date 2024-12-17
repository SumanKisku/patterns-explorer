import Image from "next/image";
import { patterns } from "@/data/patterns";

interface Pattern {
  id: number;
  name: string;
  imageUrl: string;
}

export default async function PatternDetail({ params }: { params: Promise<{ name: string }> }) {
  const name = (await params).name;

  // Find the pattern based on the name
  const pattern = patterns.find((p) => p.id.toString() === name);

  // If no pattern is found, display an error message
  if (!pattern) {
    return <div>Pattern not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{pattern.name}</h1>
      <Image src={pattern.imageUrl} width={1000} height={1000} alt={pattern.name} className="w-full h-auto mb-4" />
      <p className="text-lg text-gray-700">
        {/* You can add a description or any other details about the pattern here */}
        This pattern represents a {pattern.name} in technical analysis.
      </p>
    </div>
  );
};

export async function generateStaticParams() {
  return patterns.map((p: Pattern) => ({
    id: p.id.toString(),
  }))
}
