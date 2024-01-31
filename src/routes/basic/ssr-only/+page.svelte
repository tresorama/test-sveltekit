<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>SSR only</h1>

<p>This page is :</p>
<ul>
  <li>rendered always on server</li>
</ul>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
