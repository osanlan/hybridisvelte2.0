<script lang="ts">
    export let data;
    let org = data.body.org.items[0].fields.data;
    console.log(org);

</script>



<div class="row">
    {#each org as group}
    <h2>{group.tableName}</h2>
        <div class="column">
        </div>
    {/each}

</div>