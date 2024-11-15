<script lang="ts">
	import { goto } from '$app/navigation';
	import { About, Carousel, FirstHero, Instruction, SecondHero, Services } from '$lib';
	import Collection from '$lib/components/home/collection.svelte';
	import type { Menu } from '$lib/components/models/menu.model';
	import Product from '$lib/components/products/product.svelte';
	import { Hero, Logo, Stamp } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';
	import menuStore, { fetchMenuData } from '$lib/stores/menu.store';
	import { onMount } from 'svelte';

	let menu: Menu;
	// Load menu data when the component is mounted

	// Subscribe to the store to get menu items
	$: menuStore.subscribe((value) => (menu = value));
</script>

<div class="flex flex-col">
	<FirstHero />
	{#if menu?.collections.length}
		{#each menu.collections as collection}
			<Collection {collection} />
		{/each}
	{/if}

	<SecondHero />
	<Services />
	<Instruction />
	<Carousel />
</div>
