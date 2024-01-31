<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>Protected - Account</h1>
<p>This page is protected by auth</p>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
