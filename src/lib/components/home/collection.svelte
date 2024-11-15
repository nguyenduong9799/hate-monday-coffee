<script lang="ts">
	import { goto } from '$app/navigation';
	import { APP_ROUTES } from '$lib/routes/route';
	import menuStore from '$lib/stores/menu.store';
	import { ProductCard } from '..';
	import type { Collection, Product } from '../models/menu.model';

	export let collection: Collection;
	let products: Product[] | undefined;
	$: menuStore.subscribe(
		(value) => (products = value.products.filter((e) => e.collectionIds.includes(collection.id)))
	);
</script>

{#if products?.length}
	<div class="flex flex-row w-full gap-12 px-12 py-32">
		<div class="flex flex-col justify-start w-80">
			<div class="font-sans text-display">{collection.name ?? ''}</div>
			<button
				on:click={() => goto(APP_ROUTES.products)}
				class="h-8 rounded-none w-fit btn btn-neutral">[Xem tất cả]</button
			>
		</div>

		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
{/if}
