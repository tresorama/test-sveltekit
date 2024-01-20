<script lang="ts">
  let formValues = {
    title: 'Article Three',
    content: 'Lorem Ipsum bla bla bla ....'
  };
</script>

<h1>Create Post</h1>

<form method="POST" action="">
  <div>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" bind:value={formValues.title}>
  </div>
  <div>
    <label for="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="4">{formValues.content}</textarea>
  </div>
  <input type="submit" value="Create">
</form>