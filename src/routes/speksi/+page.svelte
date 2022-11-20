<script>
    import ContentfulRichText from "$lib/components/contentfulRichText.svelte";
    export let data;
    // let pageData = data.body.org.items[0].fields.data;
    let content = data.body.pageData.items[0].fields.content.content;
    
    console.log(content[0].content[0].value)
</script>
<svelte:head>
    <title>{data.body.pageData.items[0].fields.title}</title>
    <meta name="description" content="Speksistä ja HybridiSpeksistä" />
</svelte:head>

<section class="wrap">
    <img class="logo" src="./logo.png" alt="" />
    <div class="text">
    {#each content as block}
    <ContentfulRichText nodeType={block.nodeType}>{block.content[0].value}</ContentfulRichText>
    {/each}
            <div class="speksit">
                <a href="https://spex.abo.fi/">
                    <img src="./logos/speksit/abospex.svg" alt="Akademiska Spexet"/>
                    <h3>Akademiska<br>Spexet</h3>
                </a>
                <a href="http://turkulainenhumanistispeksi.fi/">
                    <img src="./logos/speksit/humanisti.svg" alt="Turkulainen humanistispeksi"/>
                    <h3>Turkulainen<br>humanistispeksi</h3>
                </a>
                <a href="https://iospeksi.fi/">
                    <img src="./logos/speksit/io.svg" alt="I/O Speksi"/>
                    <h3>I/O Speksi</h3>
                </a>
                <a href="https://lex.fi/toiminta/spex">
                    <img src="./logos/speksit/lex.svg" alt="LexSpex"/>
                    <h3>LexSpex</h3>
                </a>
                <a href="http://tlksspeksi.fi/">
                    <img src="./logos/speksit/tlks.svg" alt="TLKS Speksi"/>
                    <h3>TLKS Speksi</h3>
                </a>
                <a href="http://speksi.tuky.fi/">
                    <img src="./logos/speksit/tuky.svg" alt="TuKY Speksi"/>
                    <h3>Tuky Speksi</h3>
                </a>
            </div>
        
    </div>
</section>


<style lang="scss">
    :global(h2) {
        color: rgb(83, 83, 83);
        font-size: large;
        font-weight: 700;
        text-align: center;
    }
    h3 {
        text-align: center;
    }
    section.wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            max-width: 50vw;
            text-align: justify;
        }
        .logo {
            width: 30vw;
        }
        @media only screen and (max-width: 767px) {
            .text {
                max-width: 85vw;
            }
            :global(p) {
                font-size: 1rem;
            }
            .logo {
                width: 60vw;
            }
        }
    }
    .speksit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-decoration: none;
        }
        img {
            width: 150px;
        }
    }
</style>
