<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

  $: ({ posts } = data);
</script>

<h1>All Posts - SSR + CSR</h1>

<p>Showing {posts.length} posts.</p>
<div class="posts-list">
  {#each posts as post}
    <article>
      <a href={`/posts/${post.slug}`}>{post.title}</a>
    </article>
  {/each}
</div>
