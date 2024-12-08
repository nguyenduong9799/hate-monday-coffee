<script lang="ts">
	import { IconBack } from '$lib/images';

	import { CartIcon, EmptyCart } from '$lib/images';
	// @ts-ignore
	import type { Cart } from '$lib/components/models/cart.model';
	import cartStore from '$lib/stores/cart.store';
	import { CartItem } from '$lib';
	let cart: Cart;
	$: cartStore.subscribe((value: Cart) => (cart = value));
</script>

<div class=" px-4 lg:px-12 pb-12 bg-base-100 flex flex-col gap-4 items-start">
	<button on:click={() => history.back()} class="flex btn btn-ghost"
		>{@html IconBack} Quay lại</button
	>
	<div class="text-display">Xác nhận thanh toán</div>
	<div class="flex min-h-[476px] flex-row w-full gap-8">
		<div class=" w-full lg:w-1/2 flex flex-col gap-8">
			<div class="text text-h1">Thông tin giao hàng</div>
			<input
				type="text"
				placeholder="Họ tên"
				class="input input-ghost w-full text-gray-400 bg-base-200"
			/>
			<input
				type="phone"
				placeholder="Số điện thoại nhận hàng*"
				class="input input-ghost w-full text-gray-400 bg-base-200"
			/>
			<div class="flex flex-row gap-8">
				<select class="w-full max-w-lg text-gray-400 select bg-base-200">
					<option disabled selected>Tỉnh/Thành phố</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
				<select class="w-full max-w-lg text-gray-400 select bg-base-200">
					<option disabled selected>Quận/Huyện</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
				<select class="w-full max-w-lg text-gray-400 select bg-base-200">
					<option disabled selected>Phường/Xã</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
			</div>
			<input
				type="text"
				placeholder="Chi tiết địa chỉ (Số nhà, tên đường..)"
				class="input input-ghost w-full text-gray-400 bg-base-200"
			/>
		</div>
		<div class="w-full lg:w-1/2 flex flex-col gap-2">
			<div class="text text-h1">Giỏ hàng [{cart.productList.length ?? 0}]</div>
			{#if cart.productList.length}
				<ul>
					{#each cart.productList as item}
						<CartItem cartItem={item} />
					{/each}
				</ul>
				<div class="divider"></div>
				<div class="flex flex-row items-start justify-between gap-8">
					<div class="w-40 text text-[#747474]">Tạm tính</div>
					<div class="grow text-end">
						{cart.totalAmount ?? 0} VND
					</div>
				</div>
				<div class="flex flex-row items-start justify-between gap-8">
					<div class="w-40 text text-[#747474]">Phí giao hàng</div>
					<div class="grow text-end">
						{cart.shippingFee ?? 0} VND
					</div>
				</div>
				<div class="flex flex-row items-start justify-between">
					<div class="w-40 text text-[#747474]">Tổng cộng</div>
					<span class="text text-h3">{cart.totalAmount} VND</span>
				</div>
				<button class="text-white btn btn-primary w-full text">[thanh toán]</button>
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
	</div>
</div>
