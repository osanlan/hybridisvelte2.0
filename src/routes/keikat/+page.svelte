<script>
    import { afterUpdate } from 'svelte';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


    export let data;
    afterUpdate(async () => {
        document.getElementById('bandContent').innerHTML = documentToHtmlString(data.body.pageData.items[0].fields.blocks[0].fields.content)
        document.getElementById('actorContent').innerHTML = documentToHtmlString(data.body.pageData.items[0].fields.blocks[1].fields.content)
    })
    
</script>
<svelte:head>
    <title>Tilaa esiintyjiä - HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksin bändin ja muita esiintyjiä voi tilata keikkailemaan." />
</svelte:head>
<section class="wrap">
    <div class="text">
        <h1>Keik&shy;kail&shy;laanko?</h1>
        <div class="cont" id="bandContent"></div>
        <div class="images">
            <img src="images/gigs/band_1_thumb.jpg" alt="Bändi 1"/>
            <img src="images/gigs/band_2_thumb.jpg" alt="Bändi 2"/>
            <img src="images/gigs/band_3_thumb.jpg" alt="Bändi 3"/>
        </div>
        <!-- <img src="logo.png" alt="HybridiSpeksin logo"/> -->
        <div class="cont" id="actorContent"></div>
        <div class="images">
            <img src="images/gigs/actors_1_thumb.jpg" alt="Esiintyjiä"/>
        </div>
    </div>  
</section>

<style lang="scss">
    section.wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            margin-top: 20px;
            max-width: 50vw;
            text-align: justify;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            :global(h2) {
                text-align: center;
                text-decoration: underline;
                padding: 20px;
            }
            :global(p) {
                padding: 0 50px;
            }
            :global(h3) {
                padding: 10px 50px;
            }
        }
        .images {
            padding: 25px;
            margin: 25px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: fit-content;
            img {
                box-shadow: 2px 3px 20px black inset;
                padding: 3px;
                width: 200px;
            }
        }
        img {
            width: 30vw;
        }
        @media only screen and (max-width: 767px) {
            :global(h1) {
                margin: 0;
            }   
            .text {
                max-width: 95vw;
            }
            p {
                font-size: 1rem;
            }
            img {
                width: 60vw;
            }
        }
    }
</style>