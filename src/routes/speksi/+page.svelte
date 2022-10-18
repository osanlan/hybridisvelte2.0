<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	console.log(data)
	let text = data.content[0]
</script>
<svelte:head>
	<title>Speksi</title>
	<meta name="description" content="Speksistä ja HybridiSpeksistä" />
</svelte:head>

<div class="content">
	<h1>{text.label}</h1>
	<p>{text.content}</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
