<script>
	import { About } from '$lib/images';
</script>

<div
	class="flex flex-col items-center gap-4 p-4 py-8 md:flex-row lg:p-32 lg:gap-40 bg-neutral-100 rounded-2xl"
>
	<img src={About} alt="About" />
	<div class="flex flex-col gap-12">
		<span class="font-sans font-semibold text text-display"
			>“Một tách cà phê ngon được đem tới tay khách hàng, cũng chính là đem đến một tương lai tốt
			đẹp hơn cho người làm cà phê”</span
		>
		<button class="h-8 rounded-none w-fit btn text-neutral-50 btn-neutral text"
			>[về chúng tôi]</button
		>
	</div>
</div>
