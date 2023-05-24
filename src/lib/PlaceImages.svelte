<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services.js";
  export let id;
  
  let place = [];
  onMount(async () => {
    place = await placemarkService.getPlaceById(id);
  });
</script>

<h1 class="title is-2"><i class="fas fa-map-marker-alt" style="color:rgb(63, 122, 139)" /> {place.placename}</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Images</th>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"><img src={place.img} width="600" alt={place.placename} /></td>
    </tr>
  </tbody>
</table>