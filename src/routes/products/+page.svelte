<script>
	import { Filter, ProductCard } from '$lib';
	let numbers = Array.from({ length: 21 }, (_, i) => i + 1);
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
		{#each numbers as number}
			<ProductCard />
		{/each}
	</div>
	<button class="self-end h-8 rounded-none w-fit btn text-neutral-50 btn-neutral text"
		>[Xem thêm]</button
	>
</div>
