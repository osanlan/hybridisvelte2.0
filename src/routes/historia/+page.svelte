<script>
    import speksit from '$lib/data/speksit.json';
    import Speksi from '$lib/components/speksi.svelte';
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
    <meta name="description" content="Aikaisemmat HybridiSpeksin produktiot" />
</svelte:head>

<section class="wrap" bind:this={root}>
    <h1>Aikaisemmat HybridiSpeksit</h1>
    <ul class="grid">
        {#each speksit as speksi}
        <li class="poster">
            <button type="button" id="{speksi.name}button" title="{speksi.name}" data-quick-view style="background-image: url(./db/{speksi.year}/{speksi.poster});">
            </button>            
        </li>
        <li class="fullwidth is-hidden" id="quickview-{speksi.year}">
            <!-- <button type="button" data-close>Close 2</button> -->
            <Speksi {speksi}/>
        </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    .wrap {
        margin: 0 10vw;
        @media only screen and (max-width:800px) {
            margin: 0 5vw;
        }
        @media only screen and (max-width:600px) {
            margin: 0;
        }
    }
    ul.grid {
        margin: 0;
        margin-bottom: 20px;
        padding: 0;
        display: grid;
        gap: 2rem;
        grid-auto-flow: dense; /* 'dense' packing fills in holes earlier in the grid. */
        grid-template-columns: repeat(auto-fit, 240px); /* 'auto-fit' grid columns, so no media queries required. */
        justify-content: center;
        overflow: overlay;
        @media only screen and (max-width:600px) {
            grid-template-columns: 100vw;
        }
        li {
            list-style: none;
            max-width: 100%;
            grid-column-start: auto;
            margin: 0 auto;
            &.poster {
                width: 240px;
                button {
                    all: unset;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: 350px;
                }
                :focus {
                    box-shadow: 0 0 0 0.25rem grey;
                    outline: 0;
                }
            }
            &.fullwidth {
                grid-column: 1 / -1; /* Make fullwidth card span all grid columns. */
            }

            &.is-hidden {
                display: none;
            }
            &.is-selected {
                button {
                    transition: all 200ms ease-in;
                    transform: scale(1.05);
                }
            }
        }
    }



</style>