<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>CSR Only</h1>

<p>This page is :</p>
<ul>
  <li>rendered in browser</li>
</ul>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
