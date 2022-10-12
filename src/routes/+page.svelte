<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="welcome">
		<img src="logo.png" alt="Welcome" />
		<h1>Tervetuloa HybridiSpeksiin</h1>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		&:before {
			content: "";
			position: absolute;
			width: 100vw;
			height: 100vw;
			z-index: -1;
			background-image: conic-gradient(from 0deg at 50% 50%, #FFFFFFFF 0%, #8A8A8AFF 24%, #FFFFFFFF 50%, #818181FF 75%, #FFFFFFFF 100%);
			background-size: 100% 100%;
			background-position: 0px 0px;
		}
		img {
			height: 30vw;
			@media only screen and (max-width:800px) {
				height: 50vw;
			}
		}
	}
</style>
