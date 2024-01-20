<script lang="ts">
  // utils
  const sleep = (timeInMs:number) => new Promise(res => setTimeout(res, timeInMs));
  
  // local state
  let status: 'idle'|'pending'|'success'|'error' = 'idle';
  $: isInteractionEnabled = ['idle', 'error'].includes(status);
  
  // actions
  const handleSubmit = async (event:SubmitEvent) => {
    try {
      debugger;
      const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);

      status = 'pending';
      await sleep(3000);
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error();
      status = 'success';
    } catch (err) {
      status = 'error';
    }

  }
</script>

<div>
  Status: {status}
</div>
{#if status === 'success'}
  <p>You are subscribed!</p>
{:else}
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" value="test@mail.com" disabled={!isInteractionEnabled}>
    </div>
    <input type="submit" value="Join" disabled={!isInteractionEnabled}>
</form>
{/if}