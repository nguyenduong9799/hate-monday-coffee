<script lang="ts">
	import { Product1 } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';
	export let id: number = 0;
</script>

<a href={`${APP_ROUTES.products}/${id}`} class="flex flex-col gap-2 max-w-72 rounded-xl">
	<figure class="flex flex-col items-end bg-base-200 rounded-xl">
		<img src={Product1} alt="Shoes" />
		<div class="px-3 py-1 mb-2 mr-2 badge">Light roast</div>
	</figure>
	<p class="text text-primary">Guatemala</p>
	<p class="font-sans font-medium text text-h3">HUEHUETENANGO</p>
	<p class="font-mono font-normal text text-neutral-600">Green apple . Stone fruit</p>
	<p class="font-mono font-normal text text-neutral-600">Milk chocolate</p>
	<div class="flex flex-row items-center justify-between">
		<div class="font-sans font-medium text text-h3">180.000 VND</div>
		<button class="btn btn-ghost"><span class="material-symbols-outlined"> add </span></button>
	</div>
</a>
