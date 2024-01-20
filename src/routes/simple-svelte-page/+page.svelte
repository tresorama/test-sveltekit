<script lang="ts">
  import {page} from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Simple Svelte Page</h1>

<pre>
  Page Data
  {JSON.stringify( $page ,null,2)}
</pre>