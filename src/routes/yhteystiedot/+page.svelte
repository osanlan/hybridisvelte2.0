<script lang="ts">
    export let data;
    let org = data.body.org.items[0].fields.data;
    console.log(org)
</script>
<h2>HALLITUS</h2>
<table class="row">
    {#each org as group}
    <h2>{group.tableName}</h2>
        {#each group.people as person}
        <tr>
            <td>{person.name}</td>
            <td>{person.title}</td>
        </tr>
        {/each}
    {/each}
</table>