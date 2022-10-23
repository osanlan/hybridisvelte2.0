<script lang="ts">
  import { getUser } from 'lucia-sveltekit/client';

  const user = getUser();

  let authed = false;
  if (user) {
    authed = true;
  }
</script>

{#if (authed)}
  <slot />
{:else}
No permission, contact admin
{/if}



