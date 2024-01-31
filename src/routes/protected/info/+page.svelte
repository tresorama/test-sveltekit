<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>Protected - Info</h1>
<p>This page is aproteced by Auth</p>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
