<script>
	import Contextnav from '$lib/contextnav.svelte';
	// import Renderblock from '$lib/renderblock.svelte';

	export let data = {};
</script>

<!-- {@debug data} -->
<nav>
	<ul>
		{#each data.navigation as navItem}
			<li><a href={navItem.href}>{navItem.title}</a></li>
		{/each}
	</ul>
</nav>

<Contextnav contextNav={data.contextnavigation} />

<h1>{data.title}</h1>
<p>{data.description}</p>
<!-- {#each data.blocks_layout.items as blockLayout}
  <RenderBlock id={blockLayout} data={data} />
{/each} -->
