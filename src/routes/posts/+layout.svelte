<script lang="ts">
  import type { PageData } from "./$types";

  export let data:PageData;
</script>

<div class="wrapper">
  <aside class="sidebar with-title">
    All Posts
    <nav class="list">
      <ul>
        <li>
          <a href="/posts/all-posts-csr">All Posts - CSR</a>
        </li>
        <li>
          <a href="/posts/all-posts-ssr-csr">All Posts - SSR + CSR</a>
        </li>
        <li>
          <a href="/posts/all-posts-ssr-only">All Posts - SSR only</a>
        </li>
      </ul>
    </nav>
    Posts
    <nav class="list">
      <ul>
        {#each data.posts as post}
          <li>
            <a href="/posts/{post.slug}">{post.title}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <div class="content with-title">
    <slot />
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: 30vw minmax(0,1fr);
  }
  .sidebar {
    background-color: hsla(0, 0%, 0%, 0.358);
    padding: 1rem;
    --title-text: "Sidebar";
  }
  .content {
    background-color: hsla(0, 0%, 0%, 0.358);
    padding: 1rem;
    --title-text: "Content";
  }
  .with-title {
    position: relative;
    padding-top: 3rem;
    &::after {
      content: var(--title-text, "Untitled");
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 0.75rem;
      opacity: 0.5;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
  }

</style>