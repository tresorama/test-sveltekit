<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1>CSR</h1>

<p>This page is :</p>
<ul>
  <li>
    rendered in server if the request is a direct url navigation:
    <ul>
      <li>when a user click on a link in an external site</li>
      <li>when user is already on this page and refersh with the browser</li>
    </ul>
  </li>
  <li>
    rendered in browser if the request is triggered by clicking an "a" HTML
    element on this page
  </li>
</ul>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
