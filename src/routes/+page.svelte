<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import type { PageData } from './$types';

    export let data: PageData;

    afterUpdate(async () => {
        document.getElementById('frontContent').innerHTML = documentToHtmlString(data.body.pageData.items[0].fields.blocks[0].fields.content)
    })



</script>

<!-- <section class="starfield">
	<div class="welcome">
		<img src="gold_logo.png" alt="Welcome" draggable=false />
	</div>
</section> -->
<section class="wrap" >
    <div class="text" id="content">
        <div id="frontContent"></div>
    </div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        background-color: $color-kreivi-white;
        &.starfield {
            z-index: -1;
            :global(.container) {
                max-width: 2000px!important;
            }
        }
        &.wrap {
            position: relative;
            width: 100%;
            height: auto;
        }
		.welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			max-width: 80%;
            z-index: 1;
            img {
				z-index: 1;
				height: 70vh;
                margin: 4rem 0;
                @media (max-width: 800px) {
                    height: 100%;
                    width: 90vw;
                }
            }
		}
        .text {
            margin-bottom: 50px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
            width: 75%;
            margin: 2rem 0;
            padding: 4rem;
            box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
            background: #fffef0;
            :global(*) {
                color: $color-kreivi-dark;
                max-width: 55vw;
                font-size: 1.5rem;
                text-align: center;
                font-family: 'hightower';
            }   
            :global(h2) {
                font-family: 'cardinal';
                font-size: 3rem;
            }
            :global(h2::first-letter) {
                // font-family:'chomsky';
                font-size: 5rem;
                text-shadow: 1px 1px 1px #000;
                margin: 0 .5rem;
            }

            :global(p:not(:first-child)::first-letter) {
                font-family: 'cardinal';
                font-size: 3rem;
                text-shadow: 1px 1px 1px #000;
                margin: 0 .5rem;
            }

            @media (max-width: 600px){
                width: 100%;
                padding: 0;
                margin-bottom: 0;
                :global(*) {
                    max-width: 80vw;
                    font-size: 1.1rem;
                }   
                :global(h2) {
                    font-size: 2rem;
                }
            }
        }
	}
</style>
