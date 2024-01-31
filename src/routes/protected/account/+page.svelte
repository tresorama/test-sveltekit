<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Protected - Account</h1>
<p>This page is protected by auth</p>
{#if data.user}
  <p>Welcome <strong>{data.user.github_username}</strong></p>
{/if}
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
