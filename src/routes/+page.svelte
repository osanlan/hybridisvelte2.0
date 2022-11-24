<script>
    console.clear();
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import InstancedMesh from '$lib/components/stars.svelte';
    </script>

<section class="starfield">
<SC.Canvas
	background={new THREE.Color(0x161616)}
	shadows={false}
	antialias={false}
	physicallyCorrectLights={false}
>
	<SC.PerspectiveCamera position={[40, 0, 0]} near={0.1} far={400} fov={55} />

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
    <p>
        Näyttökset sit taas keväällä eiks jeh?!<br>
        Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
	</p>
</section>


<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
        background-color: #161616;
        &.starfield {
            z-index: -1;
            :global(.container) {
                max-width: 2000px!important;
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

        p {
            max-width: 70vw;
            font-size: 1.5rem;
            text-align: center;
            color: gold;
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
