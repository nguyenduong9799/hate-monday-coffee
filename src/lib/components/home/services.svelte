<script>
	import { FarmImage, PreProcessImage, ProductionImage, RoastedImage } from '$lib/images';
</script>

<div class="px-32 py-32">
	<div class="text text-lg text-center font-normal px-12">
		Năm 2021, trên một căn gác nhỏ bé ngập tràn hương thơm cà phê, những hạt cà phê đầu tiên của
		“Hate Monday” đã được thử nghiệm. Với chúng tôi, cà phê không chỉ là thức uống mà còn là một
		phần của nền văn hóa. Chúng tôi mong muốn tạo ra những tách cà phê giàu hương vị, độc đáo và góp
		phần xây dựng giá trị cộng đồng, kết nối những người yêu cà phê lại với nhau.
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<img class="flex-1" src={FarmImage} alt="Farm" />
		<div class="flex-1 flex flex-col">
			<span class="text text-display font-sans mb-8">Nông trại</span>
			<span class="text max-w-md">
				Mỗi hạt cà phê bạn sử dụng bắt đầu cuộc hành trình của nó trên một cái cây trong một trang
				trại cách nửa vòng trái đất. Tại trang trại của chúng tôi ở Pleiku
			</span>
		</div>
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<div class="flex-1 flex flex-col">
			<span class="text text-display font-sans mb-8">Sơ chế</span>
			<span class="text max-w-md">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
		</div>
		<img class="flex-1" src={PreProcessImage} alt="PreProcess" />
	</div>
	<div class="flex flex-row items-center gap-12 px-12">
		<img class="flex-1" src={RoastedImage} alt="Farm" />
		<div class="flex-1 flex flex-col">
			<span class="text text-display font-sans mb-8">Rang xay</span>
			<span class="text max-w-md">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
		</div>
	</div>
	<div class="flex flex-row items-center gap-12 bg-neutral-100 rounded-2xl px-12">
		<div class="flex-1 flex flex-col gap-8">
			<span class="text text-display font-sans">Thành phẩm</span>
			<span class="text max-w-md">
				Sau khi thu hoạch, hạt cà phê trải qua nhiều quy trình khác nhau, bao gồm rửa hoàn toàn, bán
				rửa, rửa mật ong và tự nhiên.
			</span>
			<button class="h-8 w-fit btn text-neutral-50 btn-neutral text rounded-none"
				>[Sản phẩm của chúng tôi]</button
			>
		</div>
		<img class="flex-1" src={ProductionImage} alt="PreProcess" />
	</div>
</div>
