<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
</script>

<section class="account-bar">
  {#if $page.data.user}
    <!-- User Info -->
    {#if $page.data.user?.image}
      <span
        style="background-image: url('{$page.data.user.image}')"
        class="avatar"
      />
    {/if}
    <div>
      <span>
        <small>Signed in as</small><br />
        <strong>{$page.data.user?.github_username ?? "User"}</strong>
      </span>
    </div>
    <!-- Logout -->
    <form method="post" action="/auth/logout" use:enhance>
      <button>Sign out</button>
    </form>
  {:else}
    <div>
      <span>You are not signed in</span>
      <a href="/login">Login</a>
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
