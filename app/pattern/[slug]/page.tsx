import { getAllPatterns, getPatternBySlug } from "@/lib/patterns";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Image from "next/image";

export default async function PatternDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { metadata, content } = getPatternBySlug(slug);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{metadata.name}</h1>
      <Image width={1000} height={1000} src={metadata.imageUrl} alt={metadata.name} className="my-4 rounded-lg" />
      <div className="badge">{metadata.type}</div>
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
