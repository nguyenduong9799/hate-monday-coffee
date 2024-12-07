<script lang="ts">
	import { APP_ROUTES } from '$lib/routes/route';
	import type { Product } from '../models/menu.model';
	export let product: Product;
</script>

<a
	href={`${APP_ROUTES.products}/${product.menuProductId}`}
	class="flex flex-col w-full gap-2 lg:max-w-72 rounded-xl"
>
	<figure class="flex flex-col items-end bg-base-200 rounded-xl">
		<img src={product.picUrl} alt="Shoes" />
		<div class="px-3 py-1 mb-2 mr-2 badge">Light roast</div>
	</figure>
	<p class="text text-primary">Guatemala</p>
	<p class="font-sans font-medium text text-h3">{product.name}</p>
	<p class="font-mono font-normal text text-neutral-600">Green apple . Stone fruit</p>
	<p class="font-mono font-normal text text-neutral-600">Milk chocolate</p>
	<div class="flex flex-row items-center justify-between">
		<div class="font-sans font-medium text text-h3">{product.sellingPrice} VND</div>
		<button class="btn btn-ghost"><span class="material-symbols-outlined"> add </span></button>
	</div>
</a>
