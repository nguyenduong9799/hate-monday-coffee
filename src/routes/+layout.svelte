<script lang="ts">
	import { About } from '$lib';
	import { CartIcon, Logo } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';

	import '../app.css';
	import { page } from '$app/stores';
	import CartModal from '$lib/components/cart/cart-modal.svelte';

	import cartStore from '$lib/stores/cart.store';
	import type { Cart } from '$lib/components/models/cart.model';
	import { onMount } from 'svelte';
	import { fetchMenuData } from '$lib/stores/menu.store';
	onMount(() => {
		fetchMenuData();
	});
	let cart: Cart;

	$: cartStore.subscribe((value) => (cart = value));
	$: currentPath = $page.url.pathname;
</script>

<div class="w-screen">
	<div class="h-32 p-12 navbar bg-base-100">
		<a href={APP_ROUTES.home} class="flex-1">
			{@html Logo}
		</a>
		<div class="flex-none gap-40">
			<ul class="px-1 menu menu-horizontal">
				<li>
					<a
						class="text-lg text {currentPath === APP_ROUTES.products
							? 'bg-neutral rounded-none text-neutral-content'
							: ''}"
						href={APP_ROUTES.products}>Sản phẩm</a
					>
				</li>
				<li>
					<a
						class="text-lg text {currentPath === APP_ROUTES.coming_soon
							? 'bg-neutral rounded-none text-neutral-content'
							: ''}"
						href={APP_ROUTES.coming_soon}>Về chúng tôi</a
					>
				</li>
			</ul>
			<CartModal />
		</div>
	</div>
	<slot />
	<About />
	<footer class="p-8 footer bg-neutral text-neutral-content">
		<aside>
			<p>
				Chúng tôi uống cà phê vào bữa sáng®
				<br />
				+84 357 361 589
			</p>
			<span>©2024 Hate Monday Coffee Roasters by C5COFFEE</span>
		</aside>
		<nav>
			<div class="flex flex-row items-center w-full gap-20">
				<a class="flex flex-col items-center w-8">Zalo </a>
				<a class="flex flex-col items-center w-8">Instagram </a>
				<a class="flex flex-col items-center w-8">Facebook </a>
			</div>
			<p>
				Xưởng rang
				<br />
				2B Linh Trung, Linh Trung, Thủ Đức
			</p>
		</nav>
	</footer>
</div>
