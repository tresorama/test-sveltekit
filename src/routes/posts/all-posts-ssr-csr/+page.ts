import type { PageLoad } from "./$types";
import type { Post } from "@prisma/client";

async function fetchPosts() {
  const sleep = (timeInMs: number) => new Promise(res => setTimeout(res, timeInMs));
  await sleep(200);
  const posts = await fetch('/api/posts?limit=random').then(r => r.json());
  return posts as Post[];
}

export const load: PageLoad = async () => {
  return {
    posts: await fetchPosts()
  };
};