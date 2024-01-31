<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  // we can acces page.data because of "+page.server.ts"
  $: session = $page.data.session;
</script>

<section class="account-bar">
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <div>
      <span>
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
    </div>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <div>
      <span>You are not signed in</span>
      <button on:click={() => signIn("")}>Sign In</button>
    </div>
  {/if}
</section>

<slot />

<style lang="scss">
  .account-bar {
    background-color: hsla(0, 0%, 0%, 0.22);
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    .avatar {
      display: inline-block;
      width: 2rem;
      aspect-ratio: 1/1;
      background-size: cover;
    }

    button {
      margin: 0;
      margin-left: auto;
      max-width: 15ch;
    }
  }
</style>
