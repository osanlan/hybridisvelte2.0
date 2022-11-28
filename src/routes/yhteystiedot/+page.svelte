<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
    import type { PageData } from './$types';

    export let data: PageData;
    let orgData = data.body?.pageData.items[0].fields?.data;
    

</script>
<section class="row">
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
            <span>{person.name}</span>
            <span>{person.title}</span>
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
        h2 {
            text-align: center;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            right: 0;
            li {
                list-style: none;
                display: flex;
                span {
                    width: 100%;
                    max-width: 400px;
                    padding: 0 10px;
                    &:first-child {
                        text-align: right;
                    }
                    &.text {
                        text-align: center;
                    }
                }
            }
        }
    }
</style>