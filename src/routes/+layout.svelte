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

<div class="w-full overflow-x-hidden">
	<div class="bg-[#9AB676] w-full p-3 h-10">
		<p class="self-center font-mono text-base truncate text-neutral-50">
			“Free ship” cho đơn hàng từ 500k. “Free ship” cho đơn hàng từ 500k. “Free ship” cho đơn hàng
			từ 500k. “Free ship” cho đơn hàng từ 500k. “Free ship” cho đơn hàng từ 500k.
		</p>
	</div>
	<div class="drawer">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="flex flex-col drawer-content">
			<div class="h-24 p-4 lg:p-12 navbar bg-base-100">
				<a href={APP_ROUTES.home}>
					{@html Logo}
				</a>
				<div class="flex-auto"></div>
				<div class="flex-none hidden lg:block">
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
				</div>
				<CartModal />
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
				</div>
			</div>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="min-h-full p-4 menu bg-base-200 w-80">
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
