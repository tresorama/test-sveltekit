<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { handleInternalization } from "$lib/i18n/i18n.layout";
  import "./global.style.css";

  beforeNavigate(handleInternalization);
</script>

<nav class="main-nav">
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link">Basics</summary>
        <ul role="listbox">
          <li>
            <a href="/simple-svelte-page">Simple Svelte Page</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link">i18n</summary>
        <ul role="listbox">
          <li>
            <a href="/en/greet">Greet in 🇬🇧</a>
          </li>
          <li>
            <a href="/it/greet">Greet in 🇮🇹</a>
          </li>
          <li>
            <a href="/greet">Greet</a>
          </li>
          <li>
            <a href="/">---</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link">Media</summary>
        <ul role="listbox">
          <li>
            <a href="/media/dog-with-smile/in-subfolder/200/180"
              >Media with unlimited url params</a
            >
          </li>
        </ul>
      </details>
    </li>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link">API</summary>
        <ul role="listbox">
          <li>
            <a href="/api/random-number">api/random-number</a>
          </li>
          <li>
            <a href="/api/newsletter">api/newsletter GET</a>
          </li>
          <li>
            <a href="/api/posts">api/posts GET</a>
          </li>
          <li>
            <a href="/api/posts?limit=2">api/posts?limit=2 GET</a>
          </li>
          <li>
            <a href="/api/posts?limit=random">api/posts?limit=random GET</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <a href="/posts">Posts</a>
    </li>
    <li>
      <a href="/form">Form</a>
    </li>
  </ul>
</nav>

<main class="main-content">
  <slot />
</main>

<style>
  .main-nav {
    background-color: hsla(0, 0%, 0%, 0.22);
    padding: 0rem 1rem;
  }
  .main-content {
    margin-top: 1rem;
  }
</style>
