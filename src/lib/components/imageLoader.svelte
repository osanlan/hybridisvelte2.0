<script>
    export let src
    export let alt

    import IntersectionObserver from './intersectionObserver.svelte'
    import Image from './image.svelte'
    
    let big_src = src.replace('_thumb.jpg', '.jpg')
    function openImage() {
        console.log(big_src)
        document.getElementById("popup_" + big_src).style.display = 'flex';
        document.getElementById("popup_" + big_src).innerHTML = 
        "<img style='max-width:80vw; max-height:90vh' src ="+ big_src + " />"
    }

    function closeImage() {
        document.getElementById("popup_" + big_src).style.display = 'none';
    }
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting}
    <div on:click={()=>openImage()}>
        <Image {alt} {src}/>
    </div>
    {/if}
</IntersectionObserver>


<div class="popup" id="popup_{big_src}" on:click={()=>closeImage()}></div>

<style lang="scss">
    .popup {
        display: none;
        background-color: rgba(122, 122, 122, 0.342);
        width: 100vw;
        height: 100vh;
        position: fixed;
        justify-content: center;
        align-items: center;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%,-50%);
        -moz-transform:translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        // z-index: 10;
    }
</style>