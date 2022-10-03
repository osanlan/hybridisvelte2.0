<script>
import { getSession } from "lucia-sveltekit/client";
const session = getSession();
let authed = false;
if ($session) {
    authed = true;
}
</script>
{#if (authed)} 
jahuu
{:else}
haista vittu
{/if}

<a href="/admin/logout">Logout</a>
