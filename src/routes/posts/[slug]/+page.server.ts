import type { PageServerLoad } from './$types';
import db from '$lib/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.slug;
  const post = await db.post.findUnique({ where: { slug } });
  if (!post) throw error(404, `Post with slug "${slug}" not found!`);
  return { post };
};