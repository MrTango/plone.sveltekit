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
</svelte:head>

<main class="container">
	{#if $page.data.fullwidth === undefined}
		<aside>
			<Contextnav contextNav={data.contextnavigation} />
		</aside>
	{/if}

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
			'sidebar content content';
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
	aside {
		grid-area: sidebar;
		/* margin: var(--block-spacing-vertical) 0; */
		padding: var(--block-spacing-vertical) var(--block-spacing-horizontal)
			var(--block-spacing-vertical) 0;
	}
	article {
		grid-area: content;
	}
</style>
