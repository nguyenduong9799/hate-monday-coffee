<script lang="ts">
	import { ComingSoonImage } from '$lib/images';
    import Layout from '../+layout.svelte';

</script>


    <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row justify-between items-center">
          <img
             style="width: 576px;"
             alt="coming"
            src={ComingSoonImage}
            class="w-96"/>
          <div>
            <h1 class="text-5xl font-bold">“Một tách cà phê ngon được đem tới tay khách hàng, cũng chính là đem đến một tương lai tốt đẹp hơn cho người làm cà phê”</h1>

            <button class="btn btn-neutral rounded-none mt-12">[we are coming soon]</button>
          </div>
        </div>
      </div>
