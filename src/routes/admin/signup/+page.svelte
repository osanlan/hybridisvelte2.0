<script lang="ts">
    import { applyAction, enhance } from '$app/forms';
</script>
<h2>signup</h2>
<form method="POST" use:enhance={() => {
    return async ({ result, update }) => {
        if (result.type === "redirect") {
            window.location.href = result.location;
            return;
        }
        update(result);
    }
}}>
    <label for="username">username</label>
    <input id="username" name="username" />
    <label for="password">password</label>
    <input type="password" name="password" id="password" />
    <input type="submit" value="Jatka"/>
</form>

<a href="/admin/login">login</a>
<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 200px
    }
</style>