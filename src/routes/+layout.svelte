<script lang="ts">
  import { beforeNavigate } from "$app/navigation";
  import { handleInternalization } from "$lib/i18n/i18n.layout";
  import "./global.style.css";

  beforeNavigate(handleInternalization);

  let isToggled = false;

  type NavItem = { label: string; url: string; children?: NavItem[] };
  const navItems: NavItem[] = [
    { url: "/", label: "Home" },
    {
      url: "IGNORE",
      label: "Basics",
      children: [
        { url: "/basic/csr-ssr", label: "CSR + SSR" },
        { url: "/basic/csr-only", label: "CSR only" },
        { url: "/basic/ssr-only", label: "SSR only" },
        {
          url: "/media/dog-with-smile/in-subfolder/200/180",
          label: "Media with unlimited url params (Params)",
        },
        { url: "/posts", label: "Posts (Layout + Sublayout)" },
        { url: "/form", label: "Form" },
      ],
    },
    {
      url: "IGNORE",
      label: "i18n",
      children: [
        { url: "/en/greet", label: "Greet in 🇬🇧" },
        { url: "/it/greet", label: "Greet in 🇮🇹" },
        { url: "/greet", label: "Greet" },
        { url: "/about", label: "About" },
        { url: "/contact", label: "Contact" },
      ],
    },
    {
      url: "IGNORE",
      label: "API",
      children: [
        { url: "/api/random-number", label: "api/random-number" },
        { url: "/api/newsletter", label: "api/newsletter" },
        { url: "/api/posts", label: "api/posts" },
        { url: "/api/posts?limit=2", label: "api/posts?limit=2" },
        { url: "/api/posts?limit=random", label: "api/posts?limit=random" },
      ],
    },
    {
      url: "IGNORE",
      label: "Auth",
      children: [
        { url: "/protected", label: "/protected" },
        { url: "/protected/account", label: "/protected/account" },
        { url: "/protected/info", label: "/protected/info" },
      ],
    },
  ];
</script>

<nav class="main-nav">
  <ul>
    {#each navItems as item}
      {#if item.children}
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link">{item.label}</summary>
            <ul role="listbox">
              {#each item.children as subItem}
                <li>
                  <a href={subItem.url}>{subItem.label}</a>
                </li>
              {/each}
            </ul>
          </details>
        </li>
      {:else}
        <li>
          <a href={item.url}>{item.label}</a>
        </li>
      {/if}
    {/each}
  </ul>
  <div>
    <input type="checkbox" name="fake" id="fake" checked={isToggled} />
  </div>
</nav>

<main class="main-content">
  <slot />
</main>

<style lang="scss">
  .main-nav {
    display: flex;
    justify-content: space-between;
    background-color: hsla(0, 0%, 0%, 0.22);
    padding: 0rem 1rem;

    details[role="list"] summary + ul {
      right: initial;
    }
  }
  .main-content {
    margin-top: 1rem;
  }
</style>
