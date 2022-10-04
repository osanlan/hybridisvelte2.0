<script lang="ts">
  import { getSession } from 'lucia-sveltekit/client';

  const session = getSession();
  let authed = false;
  if ($session) {
    authed = true;
  }
</script>

{#if (authed)}
  <slot />
{:else}
No permission, contact admin
{/if}



