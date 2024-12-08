<script lang="ts">
	import { IconBack, Product1 } from '$lib/images';

	import type { Product } from '$lib/components/models/menu.model';

	import menuStore from '$lib/stores/menu.store';
	import { page } from '$app/stores';
	import type { ProductList } from '$lib/components/models/cart.model';
	import { addToCart } from '$lib/stores/cart.store';

	$: productInMenuId = $page.params['id'];
	let productToAdd: ProductList = {
		productInMenuId: productInMenuId,
		parentProductId: '',
		name: '',
		type: '',
		quantity: 1,
		sellingPrice: 0,
		code: '',
		categoryCode: '',
		totalAmount: 0,
		discount: 0,
		finalAmount: 0,
		promotionCodeApplied: '',
		note: '',
		picUrl: '',
		extras: [],
		attributes: []
	};
	let product: Product | undefined;
	function handleAddToCart() {
		if (product) {
			productToAdd.picUrl = product.picUrl;
			productToAdd.name = product.name;
			productToAdd.code = product.code;
			productToAdd.sellingPrice = product.sellingPrice;
			productToAdd.productInMenuId = product.menuProductId;
		}
		addToCart(productToAdd);
	}
	function increaseQuantity() {
		if (product) {
			productToAdd.quantity = productToAdd.quantity + 1;
			productToAdd.finalAmount = product.sellingPrice * productToAdd.quantity;
		}
	}
	$: productToAdd.finalAmount = (product?.sellingPrice ?? 0) * productToAdd.quantity;
	function decreaseQuantity() {
		if (productToAdd.quantity > 1 && product) {
			productToAdd.quantity = productToAdd.quantity - 1;
			productToAdd.finalAmount = product.sellingPrice * productToAdd.quantity;
		}
	}

	$: menuStore.subscribe(
		(value) => (product = value.products.find((e) => e.menuProductId == productInMenuId))
	);
</script>

<div class=" px-4 lg:px-12 pb-12 bg-base-100">
	<button on:click={() => history.back()} class="flex btn btn-ghost"
		>{@html IconBack} Quay lại</button
	>
	{#if product}
		<div class="flex flex-col md:flex-row w-full gap-6 p-2 lg:p-6">
			<figure
				class="flex flex-col content-center justify-center flex-1 aspect-square bg-base-200 rounded-xl"
			>
				<img class="align-center" src={product.picUrl} alt={product.name} />
				<div class="flex flex-row items-center justify-center gap-6 py-4">
					<button class="btn btn-outline rounded-2xl">{'<'}</button>
					<span class="font-sans text">1/3</span>
					<button class="btn btn-outline rounded-2xl">{'>'}</button>
				</div>
			</figure>
			<div class="flex flex-col flex-1 gap-4 grow">
				<p class="text text-primary">Guatemala</p>
				<p class="font-sans font-medium text text-display">{product.name}</p>
				<div class="flex flex-row items-center gap-6">
					<div class="font-sans font-medium text text-h3">{productToAdd.finalAmount} VND</div>
					<div class="font-sans text-lg font-medium text text-error">
						[-{product.discountPrice}%]
					</div>
				</div>
				<div class="flex flex-wrap gap-4">
					<div class="p-3 font-sans font-normal badge badge-outline text text-neutral-600">
						Green apple
					</div>
					<div class="p-3 font-sans font-normal badge badge-outline text text-neutral-600">
						Milk chocolate
					</div>
				</div>
				<p class="font-sans font-light text">
					{product.description}
				</p>
				<p class="font-semibold text-lg text">Thêm tuỳ chọn</p>
				<select class="w-full max-w-lg text-gray-400 select bg-base-200">
					<option disabled selected>Chọn cỡ xay</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
				<select class="w-full max-w-lg text-gray-400 select bg-base-200">
					<option disabled selected>Chọn trọng lượng</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
				<div class="flex flex-col lg:flex-row items-center w-full max-w-lg  gap-4">
					<div
						class="border-[1px] gap-8 rounded-xl flex flex-row items-center justify-between  w-full lg:max-w-sm"
					>
						<button on:click={decreaseQuantity} class=" btn btn-ghost"
							><span class="text-h3 text">-</span></button
						>
						<span>{productToAdd.quantity}</span>
						<button on:click={increaseQuantity} class=" btn btn-ghost"
							><span class="text-h3 text">+</span></button
						>
					</div>
					<button on:click={handleAddToCart} class="text-white  rounded-xl btn btn-primary w-full lg:max-w-xs"
						>[thêm vào giỏ hàng]</button
					>
				</div>
			</div>
		</div>
	{/if}
</div>
