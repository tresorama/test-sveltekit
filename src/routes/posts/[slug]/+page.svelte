<script lang="ts">
  import {page} from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
  $:post  = data.post

  const formatDate = (date:string | Date) => {
    return new Intl.DateTimeFormat('it', {dateStyle: 'long'}).format(new Date(date));
  }
</script>

<section>
  <h1>{post.title}</h1>
  <div class="post-meta">
    <span class="badge">{post.is_published ? 'Published': 'Draft'}</span>
    <span class="post-date">{formatDate(post.created_at)}</span>
  </div>
  <div>{@html post.content}</div>
</section>

<pre>
  {JSON.stringify( $page ,null,2)}
</pre>



<style>
  .badge {
    padding: 0 0.35em 0.12em;
    font-size: 0.6rem;
    border-radius: 3px;
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  h1 {
    line-height: 1;
    margin: 0.5rem 0;
  }
  .post-meta {
    display: flex;
    align-items: baseline;
    gap: .5rem;
    margin-bottom: 1.5rem;
  }
  .post-date {
    opacity: 0.8;
    font-size: 0.6rem;  }
</style>