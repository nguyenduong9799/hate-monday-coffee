<script lang="ts">
	import type { Product } from '$lib/components/models/menu.model';

	import menuStore from '$lib/stores/menu.store';

	let products: Product[] = [];

	$: menuStore.subscribe((value) => (products = value.products));
</script>

<div class="flex justify-between w-full">
	<span> Có [{products.length ?? 0}] sản phẩm</span>
	<button>Bộ lọc</button>
</div>
