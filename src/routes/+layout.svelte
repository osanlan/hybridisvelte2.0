<script lang="ts">
    import Header from "$lib/common/Header.svelte";
    import Footer from "$lib/common/Footer.svelte";
    import "../app.scss";


</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style>
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}

</style>
