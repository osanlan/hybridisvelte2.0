<script>
    export let src
    export let alt

    import IntersectionObserver from './intersectionObserver.svelte'
    import Image from './image.svelte'
    
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting}
    <Image {alt} {src} />
    {/if}
</IntersectionObserver>