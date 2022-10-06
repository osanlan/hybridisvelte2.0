<script>
    import { getSession } from "lucia-sveltekit/client";
    /** @type {import('./$types').PageData} */
    export let data;

    let groups = data.persons
    let hallitus = groups.filter(g => g.group == "HALLITUS");
    let tuottis = groups.filter(g => g.group == "TUOTANTOTIIMI");

    let message = data.message;

    let id="", op="", name="", title="", group="hallitus", order=""
    $: disable_update = (name=="" || id=="" || title=="" )
    $: disable_create = (name=="" || title=="" )
    $: disable_delete = (id == "")
    
    const session = getSession();
    let admin = false;
    if ($session) {
        admin = ($session.user.role == "ADMIN")
    }
</script>
{#if (admin)}
<form method="GET">
    <input type="hidden" name="operation" bind:value={op}>
    <input type="hidden" name="id" bind:value={id}>
    <input type="text" name="name" bind:value={name} placeholder="Nimi">
    <select name="group" bind:value={group}>
        <option value="HALLITUS">Hallitus</option>
        <option value="TOIMIHENKILO">Toimihenkilot</option>
        <option value="TUOTANTOTIIMI">Tuotantotiimi</option>
        <option value="YHDENVERTAISET">Yhdenvertaiset</option>
    </select>
    <input type="text" name="title" bind:value={title} placeholder="Pesti">
    <input type="number" name="order" bind:value={order} placeholder="Järjestys">
    <input type="submit" disable={disable_create} value="Create" on:click={()=>{op='create';id=""}}>
    <input type="submit" disabled={disable_update} value="Update" on:click={()=>{op='update'}}>
    <input type="submit" disabled={disable_delete} value="Delete" on:click={()=>{op='delete'}}>
    <input type="submit" value="Search" on:clock={()=>{op='search'}}>
</form>
<br>
<br>
<h2>HALLITUS</h2>
{#each hallitus.sort((a,b) => a.order - b.order) as p }
    <div>
        <b on:click={() => {
            id = p.id??"Unknown person"
            name = p.name??""
            group = p.group??""
            title = p.title??""
            order = p.order??0
        }}>
       {p.order} {p.name} {p.title} </b>
    </div>
    
{/each}
<h2>TUOTANTOTIIMI</h2>
{#each tuottis.sort((a,b) => a.order - b.order) as p }
    <div>
        <b on:click={() => {
            id = p.id??"Unknown person"
            name = p.name??""
            group = p.group??""
            title = p.title??""
            order = p.order??0
        }}>
        {p.order} {p.name} {p.title} </b>
    </div>
    
{/each}
<div>{message}</div>
{:else}
<h3>Höhö et oo admin!</h3>
{/if}


<style lang="scss">
    form{
        display: flex;
        flex-direction: column;
        width: 250px;
    }
</style>