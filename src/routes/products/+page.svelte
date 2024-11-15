<script lang="ts">
	import { page } from '$app/stores';
	import { Filter, ProductCard } from '$lib';
	import type { Product } from '$lib/components/models/menu.model';

	import menuStore from '$lib/stores/menu.store';
	let products: Product[] = [];

	$: menuStore.subscribe((value) => (products = value.products));
</script>

<div class="flex flex-col w-full gap-8 p-12 bg-base-100">
	<p class="font-san text-display text">Không bao giờ hết cà phê!</p>
	<p class="text-lg font-light text">
		Hành trình xuyên qua thế giới đậm đà & ngon miệng của cà phê Việt. Mỗi tuần, chúng tôi sẽ gửi
		cho bạn một túi cà phê nguyên hạt Việt Nam mới. Bạn sẽ được trải nghiệm đầy đủ các sản phẩm cà
		phê Việt Nam của chúng tôi, bao gồm arabica, robusta, hỗn hợp và rang từ trung bình đến đậm.
	</p>
	<Filter />
	<div class="grid items-center justify-center grid-cols-4 gap-x-6 gap-y-12">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
	<button class="self-end h-8 rounded-none w-fit btn text-neutral-50 btn-neutral text"
		>[Xem thêm]</button
	>
</div>
