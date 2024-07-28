
import getPosts from "@/src/Actions/GET/getPosts";
import { delay } from "@/src/utils/scripts/delayPost";


interface BlogPostPageProps {
  params: { postSlug: string };
}

export default async function BlogPostPage({
  params: { postSlug },
}: BlogPostPageProps) {
  const postData = await getPosts(postSlug)

  console.log(postData)

  await delay(1000);

  return (
    <article className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{postData!.title}</h1>
      <p className="text-lg">{postData!.shortDesc}</p>
    </article>
  );
}