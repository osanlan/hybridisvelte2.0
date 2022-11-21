<script>
    import ContentfulRichText from "$lib/components/contentfulRichText.svelte";
    export let data;

    let content = data.body.pageData.items[0].fields.content.content;

</script>
<svelte:head>
  <title>Tilaa esiintyjiä - HybridiSpeksi</title>
</svelte:head>
<section class="wrap">
    <div class="text">
        {#each content as block}
        <ContentfulRichText nodeType={block.nodeType}>{block.content[0].value}</ContentfulRichText>
        {/each}
        
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