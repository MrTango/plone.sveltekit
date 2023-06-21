<script>
	import ListingItem from '$lib/plone/ListingItem.svelte';
	export let data = {};
	const fullwidth = true;
</script>

<h1>{data.title}</h1>
<p>{data.description}</p>
{#if data.text}
	{@html data.text}
{:else if data.items}
	{#each data.items as item}
		<ListingItem {item} />
	{/each}
{/if}
