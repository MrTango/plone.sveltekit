<script>
	// import Renderblock from '$lib/renderblock.svelte';

	import ListingItem from '$lib/plone/ListingItem.svelte';

	export let data = {};
  const fullwidth = false;
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

<!-- {#each data.blocks_layout.items as blockLayout}
  <RenderBlock id={blockLayout} data={data} />
{/each} -->
