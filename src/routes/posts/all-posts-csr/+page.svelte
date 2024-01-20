<script lang="ts">
  import type { Post } from "@prisma/client";

  async function fetchPosts() {
    const sleep = (timeInMs:number) => new Promise(res => setTimeout(res, timeInMs));
    await sleep(200);
    const posts = await fetch('/api/posts?limit=random').then(r=>r.json());
    return posts as Post[];
  }
  
</script>

<h1>All Posts - CSR</h1>

{#await fetchPosts()}
  <p>Loading ...</p>
{:then posts}
  <p>Showing {posts.length} posts.</p>
  <div class="posts-list">
    {#each posts as post}
      <article>
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </article>
    {/each}
  </div>
{:catch error}
  <p>Error when getting posts 😩</p>
{/await}
