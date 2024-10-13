<script lang="ts">
	import { About } from '$lib';
	import { CartIcon, Logo } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';

	import '../app.css';
	import { page } from '$app/stores';

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
				<li><a class="text-lg text" href={APP_ROUTES.coming_soon}>Về chúng tôi</a></li>
			</ul>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<div class="flex flex-row items-center justify-between gap-4">
						{@html CartIcon}
						<!-- <span class="badge badge-sm indicator-item">8</span> -->
						<span>[{0}]</span>
					</div>
				</div>
				<div
					tabindex="0"
					class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
				>
					<div class="card-body">
						<span class="text-lg font-bold">8 Items</span>
						<span class="text-info">Subtotal: $999</span>
						<div class="card-actions">
							<button class="btn btn-primary btn-block">View cart</button>
						</div>
					</div>
				</div>
			</div>
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
