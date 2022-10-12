<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="welcome">
		<div class="bkg"></div>
		<div class="bkg-flash"></div>
		<img src="logo.png" alt="Welcome" draggable=false />
		<h1>Tervetuloa HybridiSpeksiin</h1>
	</div>
</section>

<section>
	<p>
		Näyttökset sit taas keväällä eiks jeh?!
	</p>
</section>


<style lang="scss">
	.bkg {
		position: absolute;
		// top: 40vh;
		// left: 50%;
		// translate: -50% -50%;
		width: 150vw;
		height: 250vh;
		z-index: -1;
		background-image: conic-gradient(from 0deg at 50% 47%, #FFFFFFFF 0%, #8A8A8AFF 24%, #FFFFFFFF 50%, #8A8A8AFF 75%, #FFFFFFFF 100%);
		background-size: 100% 100%;
		background-position: 0px 0px;
		-webkit-animation: rotateX 20s linear infinite;
		animation: rotateX 10s linear infinite;
	}
	.bkg-flash {
		position: absolute;
		width: 150vw;
		height: 250vh;
		// z-index: -1;
		background-image: radial-gradient(white 0%, black 100%) ;
		background-size: 100% 100%;
		background-position: 0px 0px;
		-webkit-animation: 	pulse 10s ease-in-out infinite alternate;
		animation:    		pulse 2.5s ease-in-out infinite alternate;
	}
	section {
		max-height: 700px;
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
		img {
			height: 30vw;
			@media only screen and (max-width:800px) {
				height: 50vw;
			}
		}
	}
	@-webkit-keyframes rotateX
	{  
		0%   {-webkit-transform: rotate(0deg); -webkit-transform-origin: 50% 47% 0;}  
		100% {-webkit-transform: rotate(360deg); -webkit-transform-origin: 50% 47% 0;}  
	}
	@keyframes rotateX
	{  
		0%   {transform: rotate(0deg); transform-origin: 50% 47% 0;}  
		50%  {transform: rotate(180deg); transform-origin: 50% 47% 0; }
		100% {transform: rotate(360deg); transform-origin: 50% 47% 0;}  
	}
	@-webkit-keyframes pulse 
	{
		0%   {background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%); opacity:1;}
		100% {background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 50%); opacity:0;}
	}
	@keyframes pulse {
		0%   {background: radial-gradient(center, ellipse cover, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%); opacity:1;}
		100% {background: radial-gradient(center, ellipse cover, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%); opacity:0;}
	}
</style>
