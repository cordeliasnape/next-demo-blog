import { getPostsBySlug, getPosts } from "@/[lib]/posts";
import { notFound } from "next/navigation";

type blogPostByParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function Page({ params }: blogPostByParams) {
  const post = getPostsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-2xl">{post.title}</h2>
      <img src={post.image} className="w-[30vw] m-auto my-3" />
      <h2 className="bg-white text-xl m-3 p-1">{post.content}</h2>
    </div>
  );
}
