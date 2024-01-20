<div class="wrapper">
  <aside class="sidebar with-title">
    <nav class="list">
      <ul>
        <li>
          <a href="/form/form-no-js">Form - No JS</a>
        </li>
        <li>
          <a href="/form/form-js-use-enhance">Form - JS with use:enhance</a>
        </li>
      </ul>
    </nav>
  </aside>
  <div class="content with-title">
    <slot />
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: 30vw minmax(0,1fr);
  }
  .sidebar {
    background-color: hsla(0, 0%, 0%, 0.358);
    padding: 1rem;
    --title-text: "Sidebar";
  }
  .content {
    background-color: hsla(0, 0%, 0%, 0.358);
    padding: 1rem;
    --title-text: "Content";
  }
  .with-title {
    position: relative;
    padding-top: 3rem;
    &::after {
      content: var(--title-text, "Untitled");
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 0.75rem;
      opacity: 0.5;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
  }

</style>