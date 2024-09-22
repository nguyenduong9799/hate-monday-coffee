<script lang="ts">
	import { goto } from '$app/navigation';
	import { FirstHero, Instruction, SecondHero, Services } from '$lib';
	import Product from '$lib/components/product.svelte';
	import { Hero, Logo, Stamp } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';
	import { onMount } from 'svelte';

	// onMount(()=>{
	//     goto(APP_ROUTES.coming_soon);
	// })
</script>

<div class="w-full flex flex-col">
	<FirstHero />
	<div class="w-full flex flex-row px-12 py-32 gap-12">
		<div class="flex-1 flex flex-col justify-start">
			<div class="font-sans text-display">Được mua nhiều nhất</div>
			<button class="h-8 w-fit btn btn-neutral rounded-none">[Xem tất cả]</button>
		</div>
		<div class="flex-auto flex flex-wrap gap-12">
			<Product></Product>
			<Product></Product>
			<Product></Product>
		</div>
	</div>
	<SecondHero />
	<Services />
	<Instruction />
</div>
