
<script>
	import Stars from '$lib/components/stars.svelte';
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<Stars />
	<div class="welcome">
		<img class="text" src="logo_text.png" alt="Welcome" draggable=false />
		<div class="spin">
			<img class="bow" src="logo_bowtie.png" alt="Welcome" draggable=false />
		</div>
	</div>

	<p>
		Näyttökset sit taas keväällä eiks jeh?!
	</p>
</section>


<style lang="scss">
	section {
		max-height: 700px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		overflow: hidden;
		.welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 70vh;
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
					z-index: 1;
				}
			}
			img {
				z-index: 1;
				height: 30vw;
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
				&:hover + .spin.bow {
					animation-play-state: running;
					-webkit-animation-play-state: running;
					-moz-animation-play-state: running;
				}
			}
		}
	}

	@keyframes spin {
		0% { transform: rotate(360deg); transform-origin: 50% 47% 0; }
		100% { transform: rotate(0deg); transform-origin: 50% 47% 0; }
	}
	@-moz-keyframes spin {
		0% { -moz-transform: rotate(360deg); -moz-transform-origin: 50% 47% 0; }
		100% { -moz-transform: rotate(0deg); -moz-transform-origin: 50% 47% 0; }
	}
	@-webkit-keyframes spin {
		0% {-webkit-transform: rotate(360deg); -webkit-transform-origin: 50% 47% 0; }
		100% { -webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 47% 0; }
	}


</style>
