import Link from "next/link";
import { format, parseISO } from "date-fns";

interface PostCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    category: "writing" | "builds";
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className="flex flex-col space-y-2 rounded-lg border border-border bg-card p-6 hover:border-coral-500/50 transition-colors"
      >
        <h2 className="text-xl font-semibold tracking-tight text-card-foreground group-hover:text-coral-500 transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
        <time
          dateTime={post.date}
          className="text-sm text-muted-foreground"
        >
          {format(parseISO(post.date), "MMMM d, yyyy")}
        </time>
      </Link>
    </article>
  );
} 