<script>
    import { afterUpdate, onMount } from 'svelte';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


    export let data;
    afterUpdate(async () => {
        document.getElementById('bandContent').innerHTML = documentToHtmlString(data.body.pageData.items[0].fields.blocks[0].fields.content)
        document.getElementById('actorContent').innerHTML = documentToHtmlString(data.body.pageData.items[0].fields.blocks[1].fields.content)
    })
    
</script>
<svelte:head>
    <title>Tilaa esiintyjiä - HybridiSpeksi</title>
</svelte:head>
<section class="wrap">
    <div class="text">
        <div id="bandContent"></div>
        <img src="logo.png" alt="HybridiSpeksin logo"/>
        <div id="actorContent"></div>
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
        }
        .images {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            img {
                padding: 3px;
                width: 250px;
            }
        }
        @media only screen and (max-width: 767px) {
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