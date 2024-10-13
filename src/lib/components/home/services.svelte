<script>
	import { FarmImage, PreProcessImage, ProductionImage, RoastedImage } from '$lib/images';
</script>

<div class="px-32 py-32">
	<div class="px-12 text-lg font-normal text-center text">
		Năm 2021, trên một căn gác nhỏ bé ngập tràn hương thơm cà phê, những hạt cà phê đầu tiên của
		“Hate Monday” đã được thử nghiệm. Với chúng tôi, cà phê không chỉ là thức uống mà còn là một
		phần của nền văn hóa. Chúng tôi mong muốn tạo ra những tách cà phê giàu hương vị, độc đáo và góp
		phần xây dựng giá trị cộng đồng, kết nối những người yêu cà phê lại với nhau.
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<img class="flex-1" src={FarmImage} alt="Farm" />
		<div class="flex flex-col flex-1">
			<span class="mb-8 font-sans text text-display">Nông trại</span>
			<span class="max-w-md text">
				Mỗi hạt cà phê bạn sử dụng bắt đầu cuộc hành trình của nó trên một cái cây trong một trang
				trại cách nửa vòng trái đất. Tại trang trại của chúng tôi ở Pleiku
			</span>
		</div>
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<div class="flex flex-col flex-1">
			<span class="mb-8 font-sans text text-display">Sơ chế</span>
			<span class="max-w-md text">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
		</div>
		<img class="flex-1" src={PreProcessImage} alt="PreProcess" />
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<img class="flex-1" src={RoastedImage} alt="Farm" />
		<div class="flex flex-col flex-1">
			<span class="mb-8 font-sans text text-display">Rang xay</span>
			<span class="max-w-md text">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
		</div>
	</div>
	<div class="flex flex-row items-center gap-12 px-12 bg-neutral-100 rounded-2xl">
		<div class="flex flex-col flex-1 gap-8">
			<span class="font-sans text text-display">Thành phẩm</span>
			<span class="max-w-md text">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
			<button class="h-8 rounded-none w-fit btn text-neutral-50 btn-neutral text"
				>[Sản phẩm của chúng tôi]</button
			>
		</div>
		<img class="flex-1" src={ProductionImage} alt="PreProcess" />
	</div>
</div>
