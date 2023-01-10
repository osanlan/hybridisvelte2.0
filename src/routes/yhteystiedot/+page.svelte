<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
    import type { PageData } from './$types';

    export let data: PageData;
    let orgData = data.body?.pageData.items[0].fields?.data;
    

</script>
<svelte:head>
    <title>Yhteystiedot - HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksin hallituksen ja tuotantotiimin yhteystiedot." />
</svelte:head>
<section class="row">
    <img class="logo" src="./logo.png" alt="" />
    {#each orgData as group}
    <h2>{group.tableName}</h2>
    <ul>
    {#each group.people as person}
        {#if (group.id == 'yhdenvertaiset' && person.link)}
        <li>
            <span class="text">
                {person.text} <a href="{person.link}" target="_blank" rel="noreferrer">
                    linkki lomakkeeseen</a> <Fa icon={faExternalLink} />
            </span>
        </li>        
        {:else}
        <li>
            <span class="left">{person.name}</span>
            <span class="right">{person.title}</span>
        </li>
        {/if}
    {/each}
    </ul>
    {/each}
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo {
            width: 30vw;
        }
        h2 {
            color: rgb(83, 83, 83);
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            li {
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                
                span {
                    padding: 0.5rem 1rem;
                    width: 25vw;
                    @media screen and (max-width:700px) {
                        width: 50vw;
                    }
                    &.left {
                        text-align: right;
                    }
                    &.right {
                        text-align: left;
                    }
                    &.text {
                        text-align: center;
                        width: 50vw;
                        @media screen and (max-width:700px) {
                            width: 90vw;
                        }
                    }
                }
            }
        }
    }
</style>