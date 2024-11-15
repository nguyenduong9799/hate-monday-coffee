<script lang="ts">
	import type { Cart, ProductList } from '../models/cart.model';
	import cartStore, { addToCart, clearCart, removeFromCart } from '../../stores/cart.store';
	import CartItem from './cart-item.svelte';
	import { CartIcon, EmptyCart } from '$lib/images';

	let panel: HTMLDialogElement;

	let cart: Cart;
	$: cartStore.subscribe((value: Cart) => (cart = value));
</script>

<button on:click={() => panel.showModal()} class="btn btn-ghost"
	><div class="flex flex-row items-center justify-between gap-2">
		{@html CartIcon}
		<span>[{cart.productList.length ?? 0}]</span>
	</div></button
>
<dialog bind:this={panel} id="cart-modal" class=" modal modal-middle">
	<div class="flex flex-col w-full h-full max-w-2xl gap-4 p-12 mx-auto max-h-3xl modal-box">
		<div class="flex flex-row items-start justify-between">
			<h1 class="font-bold text text-h1">Giỏ hàng</h1>
			<button on:click={() => panel.close()} class=" rounded-xl btn btn-ghost">[Đóng]</button>
		</div>
		{#if cart.productList.length}
			<ul>
				{#each cart.productList as item}
					<CartItem cartItem={item} />
				{/each}
			</ul>
			<div class="divider"></div>
			<div class="flex flex-row items-start justify-between gap-8">
				<div class="w-40">Phí giao hàng</div>
				<div class="grow text-end">
					Miễn phí giao hàng toàn lãnh thổ Việt Nam với (đơn hàng thanh toán trước) từ 700k trở lên
				</div>
			</div>
			<div class="flex flex-row items-start justify-between">
				<div class="w-40">Tổng cộng</div>
				<span class="text text-h3">{cart.totalAmount} VND</span>
			</div>
			<button class="text-white btn btn-primary text">[thanh toán]</button>
		{:else}
			<div class="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
				<img class="size-96" src={EmptyCart} />
				<div class="text text-h3">Ể, chưa có gì trong giỏ hàng á!!!!</div>
				<div class="text-center text text-neutral-400">
					Đừng ngần ngại thử thêm vài loại cà phê mới của chúng mình nhé. Biết đâu bạn sẽ tìm thấy
					hương vị yêu thích
				</div>
			</div>
		{/if}
	</div>
</dialog>
