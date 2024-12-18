import PatternCard from "@/components/PatternCard";
import { getAllPatterns } from "@/lib/patterns";

export default function Home() {
  const patterns = getAllPatterns();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {patterns.map(({ slug, metadata }, i) => (
        <PatternCard
          key={i}
          slug={slug}
          name={metadata.name}
          imageUrl={metadata.imageUrl}
        />
      ))}

    </div>
  );
}
