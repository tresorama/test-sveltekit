<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { enhance } from "$app/forms";

  export let data:PageData;
  $: todos = data.todos;

  export let form: ActionData;

</script>

<h1>Form - JS with use:enhance</h1>

<section>
  {#if Object.keys(form?.errors ?? {}).length > 0}
    <p class="error">
      <span>{form?.errors.title ?? ''}</span>
      <span>{form?.errors.content ?? ''}</span>
    </p>
  {/if}
  <form action="?/addTodo" method="post" use:enhance>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" value={form?.title ?? ''}>
    
    <label for="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="2">{form?.content ?? ''}</textarea>
    
    <input type="submit" value="Add Todo">
  </form>
</section>

<section>
  {#if (!todos)}
    <p>Not todo. Create one</p>
  {:else}
    <div class="todos-list">
      {#each todos as todo (todo.id)}
      <div class="todo">
        <input type="checkbox" checked={todo.is_completed}>
        <span>{todo.title}</span>
        <span>{todo.content}</span>
      </div>
      {/each}
    </div>
  {/if}
</section>

<style lang="scss">
  .error {
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: 0.8rem;
    background-color: hsl(0, 100%, 81%);
    color: black;
  }

  .todo {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: baseline;
    
    >:nth-child(1) {
      grid-row: 1/3;
      height: 100%;
      width: 40px;
    }
    >:nth-child(3) {
      opacity: 0.8;
      font-size: 0.8rem;
    }
  }
</style>