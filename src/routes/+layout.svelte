<script>
	import { beforeUpdate } from "svelte";
	import { placemarkService } from "../services/placemark-services";

	beforeUpdate(() => {
		placemarkService.reload();
	});
</script>

<div class="container">
	<slot />
</div>