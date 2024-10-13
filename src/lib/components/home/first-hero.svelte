<script>
	import { Hero, Stamp } from '$lib/images';
</script>

<div class="min-h-screen p-12 hero" style="background-image: url({Hero});">
	<div
		class="flex-col items-end justify-start w-full h-full text-left hero-content text-neutral-50 lg:flex-row"
	>
		<div class="max-w-md">
			<div class="mb-5 font-sans text-display-l">Xin cảm ơn bạn vì đã ở đây!</div>
			<p class="mb-16">
				Sau một thời gian ươm hạt, dự án mà chúng mình vẫn luôn ấp ủ cũng đã nảy mầm. Gói cà phê mà
				bạn đang cầm trên tay chính là niềm tự hào, là đứa con đầu lòng kết kén từ đam mê cùng công
				sức của những con người đã trót lỡ đắm say mùi vị của hạt cà phê nguyên bản.
			</p>
		</div>
	</div>
</div>
<img class="self-end w-40 h-40 -mt-24 mr-14" src={Stamp} alt="logo" />
