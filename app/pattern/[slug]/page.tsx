import { getAllPatterns, getPatternBySlug } from "@/lib/patterns";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Image from "next/image";

export default async function PatternDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { metadata, content } = getPatternBySlug(slug);

  return (

    <div className="p-6 max-w-4xl mx-auto my-8">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{metadata.name}</h1>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          width={1000}
          height={1000}
          src={metadata.imageUrl}
          alt={metadata.name}
          className="w-full sm:w-1/2 md:w-1/3 mx-auto h-auto object-cover transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      {/* Badge */}
      <div className="inline-block mt-4 px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold uppercase rounded-full shadow-sm">
        TYPE: {metadata.type}
      </div>

      {/* Content */}
      <MarkdownRenderer content={content} />
    </div>
  );
}
export async function generateStaticParams() {
  const patterns = getAllPatterns();
  return patterns.map((p) => ({
    id: p.slug.toString(),
  }))
}
