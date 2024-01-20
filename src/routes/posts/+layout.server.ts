import type { LayoutServerLoad } from "./$types";
import db from "$lib/db";

export const load: LayoutServerLoad = async () => {
  const posts = await db.post.findMany({});
  return {
    layout_posts: 'hello',
    posts
  };
};