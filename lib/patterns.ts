import fs from "fs";
import path from "path";
import matter from "gray-matter";

const patternsDirectory = path.join(process.cwd(), "content/patterns");

export function getPatternSlugs() {
  return fs.readdirSync(patternsDirectory).map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getPatternBySlug(slug: string) {
  const fullPath = path.join(patternsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data,
    content,
  };
}

export function getAllPatterns() {
  return getPatternSlugs().map((slug) => getPatternBySlug(slug));
}
