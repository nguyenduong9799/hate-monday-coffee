<script>
	import { Hero, Stamp } from '$lib/images';
</script>

<div class="hero min-h-screen" style="background-image: url({Hero});">
	<div
		class="hero-content -ml-72 text-neutral-50 text-left flex-col lg:flex-row justify-start items-end w-full h-full"
	>
		<div class="max-w-md">
			<div class="mb-5 text-display-l font-sans">Xin cảm ơn bạn vì đã ở đây!</div>
			<p class="mb-16">
				Sau một thời gian ươm hạt, dự án mà chúng mình vẫn luôn ấp ủ cũng đã nảy mầm. Gói cà phê mà
				bạn đang cầm trên tay chính là niềm tự hào, là đứa con đầu lòng kết kén từ đam mê cùng công
				sức của những con người đã trót lỡ đắm say mùi vị của hạt cà phê nguyên bản.
			</p>
		</div>
	</div>
</div>
<img class="h-40 w-40 -mt-24 self-end mr-14" src={Stamp} alt="logo" />
