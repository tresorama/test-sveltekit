<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>Protected Home</h1>
<h2>This page is aproteced by Auth</h2>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
