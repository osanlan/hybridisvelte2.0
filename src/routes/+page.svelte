
<script>
	// import Stars from '$lib/components/stars.svelte';
</script>
<svelte:head>
	<title>HybridiSpeksi</title>
	<meta name="description" content="HybridiSpeksin koti" />
</svelte:head>


<section class="starfield">
	<!-- <Stars /> -->
	<div class="welcome">
		<img class="text" src="logo_text.png" alt="Welcome" draggable=false />
		<div class="spin">
			<!-- <img class="bow" src="logo_bowtie_small.png" alt="Welcome" draggable=false /> -->
			<img class="bow" src="logo_hourglass.png" alt="Welcome" draggable=false />
		</div>
	</div>
</section>
<section>
    <p>
        Näyttökset sit taas keväällä eiks jeh?!
	</p>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
        background-color: black;
        &.starfield {
            z-index: -1;
        }
		.welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 80vh;
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
				z-index: 1; //importanta
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
