<script lang="ts">
	import { IconBack, Product1 } from '$lib/images';
</script>

<div class="px-12 pb-12 bg-base-100">
	<button class="flex btn btn-ghost">{@html IconBack} Quay lại</button>
	<div class="flex w-full gap-6 p-6">
		<figure
			class="flex flex-col content-center justify-center flex-1 aspect-square bg-base-200 rounded-xl"
		>
			<img class="align-center" src={Product1} alt="Shoes" />
			<div class="flex flex-row items-center justify-center gap-6 py-4">
				<button class="btn btn-outline rounded-2xl">{'<'}</button>
				<span class="font-sans text">1/3</span>
				<button class="btn btn-outline rounded-2xl">{'>'}</button>
			</div>
		</figure>
		<div class="flex flex-col flex-1 gap-4">
			<p class="text text-primary">Guatemala</p>
			<p class="font-sans font-medium text text-display">HUEHUETENANGO</p>
			<div class="flex flex-row items-center gap-6">
				<div class="font-sans font-medium text text-h3">180.000 VND</div>
				<div class="font-sans text-lg font-medium text text-error">[-25%]</div>
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
				Từ cao nguyên xinh đẹp của Antioquia, khu vi mô tự nhiên này là một nơi tuyệt vời ví dụ của
				hồ sơ ngọt ngào, mịn màng và tươi sáng làm cho giống Chiroso trở nên phổ biến. Hãy tìm những
				nốt hương của táo-quế và đào &; kem với vị ngọt nho trắng và dư vị kiwi sảng khoái.
			</p>
			<p class="font-semibold tex-lg text">Thêm tuỳ chọn</p>
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
			<div class="flex flex-row items-center w-full gap-4">
				<div class="border-[1px] gap-8 rounded-xl flex flex-row items-center justify-between">
					<button class=" btn btn-ghost"><span class="text-h3 text">-</span></button>
					<span>2</span>
					<button class=" btn btn-ghost"><span class="text-h3 text">+</span></button>
				</div>
				<button class="text-white rounded-xl grow btn btn-primary">[thêm vào giỏ hàng]</button>
			</div>
		</div>
	</div>
</div>
