<script>
    import speksit from '$lib/data/speksit.json';
    import Image from '$lib/components/image.svelte';
    import Speksi from '$lib/components/speksi.svelte';
    import { scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let root;
    let toggle; // Quick view <button>.
    let toggleParent; // <li>.
    let fullwidth; // Fullwidth card to be "injected".

    onMount(() => {
        const quickViewButtons = root.querySelectorAll('[data-quick-view]');
        const closeButtons = root.querySelectorAll('[data-close]');
        const fullwidthCards = root.querySelectorAll('.fullwidth');

        quickViewButtons.forEach(quickView => {
            // Add appropriate ARIA attributes for "toggle" behaviour.
            fullwidth = quickView.parentElement.nextElementSibling;
            quickView.setAttribute('aria-expanded', 'false');
            quickView.setAttribute('aria-controls', fullwidth.id);

            quickView.addEventListener('click', (e) => {
                toggle = e.target;
                toggleParent = toggle.parentElement;
                fullwidth = toggleParent.nextElementSibling;

                // Open (or close) fullwidth card.
                if (toggle.getAttribute('aria-expanded') === 'false') {
                    console.log("haha");
                    // Do we have another fullwidth card already open? If so, close it.
                    fullwidthCards.forEach(fullwidthOpen => {
                        if (!fullwidthOpen.classList.contains('is-hidden')) {
                            let toggleParentOpen =
                                fullwidthOpen.previousElementSibling;
                            let toggleOpen = toggleParentOpen.querySelector(
                                '[data-quick-view]'
                            );

                            closeQuickView(toggleOpen, toggleParentOpen, fullwidthOpen);
                        }
                    });

                    openQuickView(toggle, toggleParent, fullwidth);
                } else {
                    closeQuickView(toggle, toggleParent, fullwidth);
                }
            });
        });

        closeButtons.forEach(close => {
            close.addEventListener('click', (e) => {
                fullwidth = e.target.parentElement;
                toggleParent = e.target.parentElement.previousElementSibling;
                toggle = toggleParent.querySelector('[data-quick-view]');

                closeQuickView(toggle, toggleParent, fullwidth);
                toggle.focus(); // Return keyboard focus to "toggle" button.
            });
        })
    })



    const openQuickView = (toggle, toggleParent, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'true');
        toggleParent.classList.toggle('is-selected');
        fullwidth.classList.toggle('is-hidden');
        // Make fullwidth card keyboard focusable.
        fullwidth.setAttribute('tabIndex', '0');
    };

    const closeQuickView = (toggle, toggleParent, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'false');
        toggleParent.classList.toggle('is-selected');
        fullwidth.classList.toggle('is-hidden');
        fullwidth.removeAttribute('tabIndex');
    };

    

    
</script>

<svelte:head>
    <title>Aikaisemmat HybridiSpeksit</title>
</svelte:head>

<section class="wrap" bind:this={root}>
    <h1>Aikaisemmat HybridiSpeksit</h1>
    <ul class="grid">
        {#each speksit as speksi}
        <li class="poster">
            <button type="button" data-quick-view style="
            background-image: url(./db/{speksi.year}/{speksi.poster});
            background-size: cover;
            width: 100%;
            height: 300px">

                <!-- <Image src="./db/{speksi.year}/{speksi.poster}" alt=""  /> -->
            </button>            

        </li>
        <li class="fullwidth is-hidden" id="quickview-{speksi.year}">
            <button type="button" data-close>Close 2</button>
            <p>fullwidth {speksi.year}</p>
            <p>This grid item needs to stretch the full width of the page,
                and force other grid items to reflow around it,
                whilst remaining "visually connected" to the preceeding grid item.</p>
        </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    ul[class] {
        margin: 0;
        padding: 0;
    }

    ul[class] li {
        list-style: none;
    }

    ul[class] li > * {
        margin: 1rem;
    }

    :focus {
        box-shadow: 0 0 0 0.25rem rebeccapurple;
        outline: 0;
    }

    /* [1] 'auto-fit' grid columns, so no media queries required. */
    /* [2] 'dense' packing fills in holes earlier in the grid. */
    .grid {
        display: grid;
        gap: 1rem;
        grid-auto-flow: dense; /* [2] */
        grid-template-columns: repeat(auto-fit, 20rem); /* [1] */
        justify-content: center;
    }

    .grid > * {
        align-items: flex-start;
        background: rgb(211, 126, 126);
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    /* [3] Make fullwidth card span all grid columns. */
    .fullwidth {
        grid-column: 1 / -1;
    }

    .is-hidden {
        display: none;
    }

    .fullwidth,
    .is-selected {
        background: wheat;
    }
</style>