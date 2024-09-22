<script lang="ts">
	import { CartIcon, Logo, ZaloIcon } from '$lib/images';
	import { APP_ROUTES } from '$lib/routes/route';
	import '../app.css';
</script>

<div>
	<div class="navbar bg-base-100 h-32 p-12">
		<div class="flex-1">
			{@html Logo}
		</div>
		<div class="flex-none gap-40">
			<ul class="menu menu-horizontal px-1">
				<li><a class="text text-lg" href={APP_ROUTES.coming_soon}>Sản phẩm</a></li>
				<li><a class="text text-lg" href={APP_ROUTES.coming_soon}>Về chúng tôi</a></li>
			</ul>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<div class=" items-center gap-4 justify-between flex flex-row">
						{@html CartIcon}
						<!-- <span class="badge badge-sm indicator-item">8</span> -->
						<span>[{0}]</span>
					</div>
				</div>
				<!-- <div
              tabindex="0"
              class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div class="card-body">
                <span class="text-lg font-bold">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div> -->
			</div>
		</div>
	</div>
	<slot />
	<footer class="footer bg-neutral text-neutral-content p-8">
		<aside>
			<p>
				Chúng tôi uống cà phê vào bữa sáng®
				<br />
				+84 357 361 589
			</p>
			<span>©2024 Hate Monday Coffee Roasters by C5COFFEE</span>
		</aside>
		<nav>
			<div class="grid grid-flow-col gap-4">
				<a class="flex flex-col items-center">
					{@html ZaloIcon}
					Zalo
				</a>
			</div>
			<p>
				Xưởng rang
				<br />
				2B Linh Trung, Linh Trung, Thủ Đức
			</p>
		</nav>
	</footer>
</div>
