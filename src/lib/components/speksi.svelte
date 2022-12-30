<script>
    import Image from '$lib/components/image.svelte';
    import ImageLoader from '$lib/components/imageLoader.svelte';
    import { slide } from 'svelte/transition';

    export let speksi;

    let src = "./db/" + speksi.year + "/" + speksi.banner
    let year = speksi.year;
    let photos = [];
    for (let i = 1; i < speksi.images; i++) {
        photos.push(i+1);
    }

</script>

{#if (year)}
<div class="container" style="--bg1: {speksi.colors?.bg1}; --bg2: {speksi.colors?.bg2}"
    transition:slide="{{duration: 1000}}">
    <div class="speksi" style="--bg1: {speksi.colors?.bg1}; --bg2: {speksi.colors?.bg2}">
        <Image {src} alt=""/>
        <h2>{speksi.name}</h2>
        <ul class="stats">
            {#each speksi.statistics as stat}
            <li><p><strong>{Object.keys(stat)}</strong>: {#if (speksi.year == 2020 && Object.keys(stat) =="Ensi-ilta")}<strike>{Object.values(stat)}</strike> TBA{:else}{Object.values(stat)}{/if}</p></li>
            {/each}
        </ul>
        {#each speksi.text as text}
        <p class="synopsis">{text}</p>
        {/each}
        <div class="buttons" style="--btncol: {speksi.colors.button}; --buttonColor: {speksi.colors?.buttonColor}">
            {#each speksi.resources as resource}
            <a class="button" href="{resource.url}">
                <span>{resource.title}</span>
            </a>
            {/each}
        </div>
        <div class="photos">
            {#each photos as photo }
            <ImageLoader src="{'./db/' + speksi.year + '/' + speksi.year + '_' + photo + '_thumb.jpg'}" alt="kuva"></ImageLoader>
            {/each}
        </div>
    </div>
</div>
{/if}

<style lang="scss">
    .container {
        font-family: 'Red Hat Display', sans-serif;
        display: flex;
        margin: 0 auto;
        justify-content: center;    
        align-items: center;                 
        background-image: linear-gradient(to right, var(--bg1), var(--bg2), var(--bg1));
        @media only screen and (max-width:850px) {
            background-image: none;
            border-radius: 0; 
            padding-left: 0;
            padding-right: 0;  
        }

        .speksi {
            width: 70%;
            max-width: 90%;
            text-align: center;
            background-color: white;
            margin: 5rem auto;
            border-radius: 10px;
            > :global(img) {
                border-radius: 10px 10px 0 0;
                width: 100%;
                @media only screen and (max-width:850px) {
                    border-radius: 0;
                }
            }
            @media only screen and (max-width:850px) {
                max-width: 100vw;
                font-size: 1rem;
                width: 100%;
                margin: 0;
                border-radius: 0;
            }
            @media only screen and (min-width:1300px) {
                max-width: 100%;
                margin: 25px;
                border-radius: 0;
                > :global(img) {
                    border-radius: 0;
                }
            }
            h2 {
                margin: 20px auto;
                width: 90%;
                text-transform: uppercase;
                color: var(--bg1);
                text-align: center;
            }
            .stats {
                list-style-type: none;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                max-width: 90%;
                @media only screen and (max-width:850px) {
                    flex-direction: column;
                    align-items: center;
                }
                li {
                    padding: 0 10px;
                    p {
                        font-weight: 100;
                    }
                }
            }
            .synopsis {
                width: 80%;
                text-align: justify;
                margin: 2rem auto;
            }
            .buttons {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                a {
                    background-color: var(--btncol);
                    border: none;
                    border-radius: 5px;
                    display: inline-block;
                    padding: 5px 2rem;
                    margin: 1rem;
                    transition: all 0.3s;
                    box-shadow: 0px 2px 5px #484848;
                    color: var(--buttonColor);
                    // width: 7rem;
                    // span {
                    //     margin: 1px;
                    // }
                    &:hover {
                        transform: scale(1.05);
                        box-shadow: 0px 2px 9px #484848;
                        text-decoration: none;
                    }
                }
            }

            .photos {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                @media only screen and (max-width:500px) {
                    :global(div) {
                        width: 100%;
                }}
            }
        }

    }
</style>
