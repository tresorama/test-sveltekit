<script lang="ts">
  import { page } from "$app/stores";

</script>

<p>Somethign crashed! 😩</p>
<p>Error: {$page.status} - {$page.error?.message}</p>

<pre>
  {JSON.stringify( $page ,null,2)}
</pre>