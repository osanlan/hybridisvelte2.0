<script lang="ts">
    console.clear();
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import InstancedMesh from '$lib/components/stars.svelte';
    import ContentfulRichText from "$lib/components/contentfulRichText.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
    let content = data.body?.pageData.items[0].fields?.content?.content;
</script>

<section class="starfield">
    <SC.Canvas
        background={new THREE.Color(0x161616)}
        shadows={false}
        antialias={false}
        physicallyCorrectLights={false}
    >
        <SC.PerspectiveCamera position={[40, 0, 0]} near={1} far={400} fov={55} />

        <SC.OrbitControls
            enabled={false}
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={1}
            enableDamping={true}
            dampingFactor={0.1}
        />

        <!-- <SC.DirectionalLight
            color={new THREE.Color(0xffffff)}
            position={[0, 10, 10]}
            intensity={0.75}
            shadow={false}
        /> -->
        <!-- <SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} /> -->
        <InstancedMesh />
    </SC.Canvas>

	<div class="welcome">
		<img class="text" src="logo_text.png" alt="Welcome" draggable=false />
		<div class="spin">
			<img class="bow" src="logo_hourglass.png" alt="Welcome" draggable=false />
		</div>
	</div>
</section>
<section>
    <div class="castle">
        <img src="linna.svg" alt=""/>
    </div>
    <div class="text">
        {#each content as block}
        <ContentfulRichText nodeType={block.nodeType}>{block.content[0].value}</ContentfulRichText>
        {/each}
    </div>
</section>


<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        background-color: #161616;
        &.starfield {
            z-index: -1;
            :global(.container) {
                max-width: 2000px!important;
            }
        }
        .castle {
            // height: 300px;
            width: 65vw;
            top: -150px;
            z-index: 1;
            position: relative;
            img {
                z-index: 1;
                filter: invert(98%) sepia(58%) saturate(6%) hue-rotate(255deg) brightness(107%) contrast(100%);
            }
        }
		.welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 80vh;
            z-index: 1;
			.spin {
				animation: spin 2s linear 0s infinite reverse;
				-moz-animation: 2s linear 0s reverse none infinite spin;
				-webkit-animation: spin 2s linear 0s infinite reverse;
				-webkit-animation-play-state: paused;
				-moz-animation-play-state: paused;
				animation-play-state: paused;
				img.bow {
					animation: spin 4s linear 0s normal infinite;
					-moz-animation: 4s linear 0s normal none infinite spin;
					-webkit-animation: spin 4s linear 0s normal infinite;
				}
			}
			img {
				z-index: 1;
				height: 25vw;
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				user-select: none;
				@media only screen and (max-width:800px) {
					height: 50vw;
				}	
			}
			img.text {
				position: absolute;
				&:not(:hover) + .spin {
					animation-play-state: running;
					-webkit-animation-play-state: running;
					-moz-animation-play-state: running;
				}
			}
		}
        .text {
            :global(*) {
                color: gold;
                max-width: 55vw;
                font-size: 1.5rem;
                text-align: center;
            }   
        }
	}

	@keyframes spin {
		0% { transform: rotate(360deg); transform-origin: 50% 50% 0; }
		100% { transform: rotate(0deg); transform-origin: 50% 50% 0; }
	}
	@-moz-keyframes spin {
		0% { -moz-transform: rotate(360deg); -moz-transform-origin: 50% 50% 0; }
		100% { -moz-transform: rotate(0deg); -moz-transform-origin: 50% 50% 0; }
	}
	@-webkit-keyframes spin {
		0% {-webkit-transform: rotate(360deg); -webkit-transform-origin: 50% 50% 0; }
		100% { -webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 50% 0; }
	}


</style>
