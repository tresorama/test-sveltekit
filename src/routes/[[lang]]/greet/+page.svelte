<script lang="ts">
  import { page } from "$app/stores";

  $: lang = $page.params.lang ?? 'en';
  $: title = {
    it: 'Italiano',
    en: 'English'
  }[lang];

</script>

<h1>Greet in {title}</h1>

<pre>
  {JSON.stringify( $page ,null,2)}
</pre>