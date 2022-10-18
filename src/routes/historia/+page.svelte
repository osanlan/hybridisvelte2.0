<script>
    import speksit from '$lib/data/speksit.json';
    import Image from '$lib/components/image.svelte';
    import Speksi from '$lib/components/speksi.svelte';
    import { scale } from 'svelte/transition';

    let year = 2022;
    
    function openSpeksi(syear) {
        year = syear;
    }
</script>

<svelte:head>
    <title>Aikaisemmat HybridiSpeksit</title>
</svelte:head>

<section class="wrap">
    <h1>Aikaisemmat HybridiSpeksit</h1>
    <div class="row">
        <div class="posters" id="spkesi">
        {#each speksit as speksi}
            {#if speksi?.year}
            <div class="poster" on:click="{() => openSpeksi(speksi.year)}" in:scale>
                <Image src="./db/{speksi.year}/{speksi.poster}" alt=""  />
            </div>
            {/if}
        {/each}
        </div>
        <div class="speksi">
            {#each speksit as speksi}
                {#if (speksi.year == year)}
                <Speksi {speksi} />
                {/if}
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section.wrap {
        min-height: 100vh;
        .row {
            display: flex;
            flex-direction: row;
            padding: 0 2rem;
            @media only screen and (max-width:850px) {
                flex-direction: column;
                padding: 0;
                .poster {
                    height: 100px!important;
                    width: 70px!important;
                }
            }
            .posters {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-content: flex-start;
                overflow: hidden;
                .poster {
                    display: flex;
                    box-shadow: 5px 5px 15px 5px #000000;
                    border-radius: 10px 10px 0 0;
                    margin: 20px;
                    margin-top: 30px;
                    height: 300px;
                    > :global(img) {
                        border-radius: 10px 10px 0 0;
                    }
                }
                .poster > :global(img:hover) {
                    transform: scale(1.05);
                    box-shadow: 5px 5px 15px 5px #000000;
                }
            }
            .speksi {
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                margin-bottom: 20px;
                border-radius: 10px;
                width: 80%;
                min-width: 600px;
                box-shadow: 5px 5px 15px 5px #000000;
                @media only screen and (max-width:850px) {
                    width: 100%;
                    min-width: 100vw;
                    border-radius: 0;
                    margin: 0;
                    
                }
    
            }
        }
    }
    
    </style>