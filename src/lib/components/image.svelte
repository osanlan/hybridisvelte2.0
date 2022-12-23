<script>
    export let src;
    export let alt;
    
    import { onMount } from 'svelte';

    let loaded = false;
    let thisImage;

    onMount(() => {
        thisImage.onload = () => {
            loaded = true;
        }
    })

    function getDefault() {
        src = 'logo.png'
    }
    
    </script>
    
    
    <img src="{src}" alt="{alt}" loading="lazy" class:loaded bind:this={thisImage} on:error="{() => getDefault()}"/>
    
    <style lang="scss">
        img {
            width: 200px;
            opacity: 0;
            transition: opacity 1200ms ease-out;
            pointer-events: none;
            &.loaded {
                opacity: 1;
            }
        }
    </style>