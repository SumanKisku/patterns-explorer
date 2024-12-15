import PatternCard from "@/components/PatternCard";
import { patterns } from "../data/patterns";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {patterns.map((pattern) => (
        <PatternCard
          key={pattern.id}
          id={pattern.id}
          name={pattern.name}
          imageUrl={pattern.imageUrl}
        />
      ))}
    </div>
  );
}
