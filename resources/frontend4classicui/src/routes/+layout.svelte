<script>
	import Contextnav from '$lib/plone/contextnav.svelte';
	import Navigation from '$lib/plone/navigation.svelte';
	import Breadcrumbs from '$lib/plone/breadcrumbs.svelte';
	import '$lib/main.scss';
	import { page } from '$app/stores';
	export let data = {};
	let navigation = [];
	let breadcrumbs = [];
	$: {
		navigation = data.navigation || [];
		breadcrumbs = data.breadcrumbs || [];
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="/assets/css/main.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
</svelte:head>

<header>
	<div class="navigation">
		<div class="container">
			<Navigation {navigation} />
		</div>
	</div>
	<nav name="breadcrumbs">
		<div class="container">
			<Breadcrumbs {breadcrumbs} />
		</div>
	</nav>
</header>

<main class="container">
	<article>
		<slot />
	</article>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			'breadcrumbs breadcrumbs breadcrumbs'
			'content content content';
	}
	header {
		background-color: coral;
		a {
			color: white !important;
		}
		padding: 0.2em 0;
	}
	nav[name='breadcrumbs'] {
		grid-area: breadcrumbs;
		--font-size: 0.8rem;
		background-color: ghostwhite;
	}
	article {
		grid-area: content;
	}
</style>
