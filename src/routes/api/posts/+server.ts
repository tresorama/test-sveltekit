import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import db from '$lib/db';

export const GET: RequestHandler = async (event) => {
  console.log(event);

  // parse request params
  const options = {
    limit: event.url.searchParams.get('limit') ?? '',
  };
  console.log(options);

  // read from database
  const posts = await db.post.findMany({
    take: (() => {
      if (options.limit === 'random') return Math.max(1, Math.round(Math.random() * 6));
      return options.limit ? Number(options.limit) : undefined;
    })()
  });

  // respond
  event.setHeaders({
    'Cache-Control': 'max-age=60',
  });
  return json(posts);

};