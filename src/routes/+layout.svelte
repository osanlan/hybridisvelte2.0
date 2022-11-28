<script lang="ts">
    import Header from "$lib/common/Header.svelte";
    import Footer from "$lib/common/Footer.svelte";
    import type { LayoutData } from "./$types";
    import "../app.scss";

    export let data: LayoutData;
</script>

<Header />
<main>
    <slot pageData={data}/>
</main>
<Footer />

<style>
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
