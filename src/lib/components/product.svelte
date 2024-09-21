<script lang="ts">
	import { Product1 } from '$lib/images';
</script>

<div class="flex flex-col rounded-xl w-72 h-[491] gap-2">
	<figure class="bg-base-200 rounded-xl flex flex-col items-end">
		<img src={Product1} alt="Shoes" />
		<div class="badge mb-2 mr-2 px-3 py-1">Light roast</div>
	</figure>
	<p class="text text-primary">Guatemala</p>
	<p class="text text-h3 font-sans font-medium">HUEHUETENANGO</p>
	<p class="text font-mono font-normal text-neutral-600">Green apple . Stone fruit</p>
	<p class="text font-mono font-normal text-neutral-600">Milk chocolate</p>
	<div class="flex flex-row justify-between items-center">
		<div class="text text-h3 font-sans font-medium">180.000 VND</div>
		<button class="btn btn-ghost"><span class="material-symbols-outlined"> add </span></button>
	</div>
</div>
