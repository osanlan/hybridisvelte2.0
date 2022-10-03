<h2>signup</h2>
<form method="POST">
    <label for="email">Email</label>
    <input type="text" name="email" id="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <input type="submit" />
</form>

<a href="/admin/login">login</a>
<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 200px
    }
</style>