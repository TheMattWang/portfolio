import Link from "next/link";
import { format, parseISO } from "date-fns";

interface PostCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    category: string;
    readingTime: number;
  };
}

// Define category colors
const categoryColors: Record<string, { bg: string; text: string }> = {
  "Project": { bg: "bg-blue-100", text: "text-blue-800" },
  "Paper": { bg: "bg-purple-100", text: "text-purple-800" },
  "Life": { bg: "bg-green-100", text: "text-green-800" },
  "Tutorial": { bg: "bg-yellow-100", text: "text-yellow-800" },
  "Thoughts": { bg: "bg-pink-100", text: "text-pink-800" },
};

export function PostCard({ post }: PostCardProps) {
  const categoryStyle = categoryColors[post.category] || { bg: "bg-gray-100", text: "text-gray-800" };

  return (
    <article className="group relative flex flex-col space-y-2">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col space-y-2 rounded-lg border border-border bg-card p-6 hover:border-coral-500/50 transition-colors"
      >
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-semibold tracking-tight text-card-foreground group-hover:text-coral-500 transition-colors">
            {post.title}
          </h2>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text}`}>
            {post.category}
          </span>
        </div>
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {format(parseISO(post.date), "MMMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </Link>
    </article>
  );
} 