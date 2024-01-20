import { PrismaClient } from '@prisma/client';
import { createSlug } from '../src/utils/create-slug';

const prisma = new PrismaClient();

const fetchPosts = async () => {
  type DummyJsonPost = {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number,
  };
  const response = await fetch('https://dummyjson.com/posts');
  const { posts } = await response.json();
  return posts as DummyJsonPost[];
};


async function main() {

  const postsToInsert = await fetchPosts();

  let i = 0;
  for (const post of postsToInsert) {
    i++;
    await prisma.post.create({
      data: {
        slug: createSlug(post.title),
        title: post.title,
        content: post.body,
      }
    });
  }

  console.log("Fetched and inserted in DB " + i + " post fro dummyjson.com");
}




main()
  .then(async () => {
    console.log('Success ✅');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log('Error ❌');
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });