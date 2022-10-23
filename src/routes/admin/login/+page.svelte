<script lang="ts">
    import { applyAction, enhance } from '$app/forms';
</script>

<h2>login</h2>
<form method="post" use:enhance={() => {
    return async ({ result, update }) => {
        if (result.type === "redirect") {
            window.location.href = result.location; // invalidateAll() + goto() will not work
                return;
            }
        applyAction(result);
    };
}}>
    <label for="username">username</label><br />
    <input id="username" name="username" /><br />
    <label for="password">password</label><br />
    <input type="password" id="password" name="password" /><br />
    <input type="submit" value="Continue" class="button" />
</form>

<a href="/admin/signup">signup</a>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 200px
    }
</style>