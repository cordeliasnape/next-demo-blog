import Link from "next/link";
import { getPosts } from "@/[lib]/posts";

export default function Page() {
  const posts = getPosts();

  return (
    <div className="h-[100vh] text-3xl">
      <h2 className="p-3">
        Click on these links to view some of the clunkiest, most awful AI
        generated stories ever!
      </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <ul>
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
