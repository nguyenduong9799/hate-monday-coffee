<script lang="ts">
	import { goto } from '$app/navigation';
	import { About, Carousel, FirstHero, Instruction, SecondHero, Services } from '$lib';
	import Product from '$lib/components/products/product.svelte';
	import { Hero, Logo, Stamp } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';
	import { onMount } from 'svelte';

	// onMount(()=>{
	//     goto(APP_ROUTES.coming_soon);
	// })
</script>

<div class="flex flex-col">
	<FirstHero />
	<div class="flex flex-row w-full gap-12 px-12 py-32">
		<div class="flex flex-col justify-start w-80">
			<div class="font-sans text-display">Được mua nhiều nhất</div>
			<button
				on:click={() => goto(APP_ROUTES.products)}
				class="h-8 rounded-none w-fit btn btn-neutral">[Xem tất cả]</button
			>
		</div>
		<Product></Product>
		<Product></Product>
		<Product></Product>
	</div>
	<SecondHero />
	<Services />
	<Instruction />
	<Carousel />
</div>
