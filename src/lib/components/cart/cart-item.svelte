<script lang="ts">
	import {
		clearCart,
		decreaseQuantity,
		increaseQuantity,
		removeFromCart
	} from '$lib/stores/cart.store';
	import type { ProductList } from '../models/cart.model';

	export let cartItem: ProductList;

	function handleRemoveFromCart() {
		removeFromCart(cartItem.productInMenuId);
	}
</script>

{#if cartItem}
	<div class="flex flex-row items-center justify-start h-32 gap-4 my-4">
		<figure class="size-32 bg-base-200 rounded-xl">
			<img src={cartItem.picUrl} alt="Shoes" />
		</figure>
		<div class="flex flex-col items-start justify-start h-full grow">
			<span class="text text-primary">Guatemala</span>
			<span class="font-sans font-medium text text-h3">{cartItem.name}</span>
			<div class="flex-auto"></div>
			<div class="flex flex-row items-center justify-between">
				<div class="font-sans font-medium text text-h4">{cartItem.finalAmount} VND</div>
			</div>
		</div>
		<div class="flex flex-col items-end justify-between h-full">
			<button on:click={handleRemoveFromCart} class="btn btn-sm btn-ghost">Xoá</button>
			<div class="join">
				<button
					on:click={() => decreaseQuantity(cartItem.productInMenuId)}
					class="btn btn-sm border-base-300 btn-outline join-item">-</button
				>
				<button class="btn btn-sm border-base-300 btn-outline join-item">{cartItem.quantity}</button
				>
				<button
					on:click={() => increaseQuantity(cartItem.productInMenuId)}
					class="btn btn-sm border-base-300 btn-outline join-item">+</button
				>
			</div>
		</div>
	</div>
{/if}
