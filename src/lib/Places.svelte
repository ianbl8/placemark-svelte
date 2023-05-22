<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services.js";
  
  let places = [];
  onMount(async () => {
    places = await placemarkService.getPlaces();
  })
</script>

<h1 class="title is-2"><i class="fas fa-map-marker-alt" style="color:rgb(63, 122, 139)" /> Places</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Place</th>
    <th></th>
    <th>Category</th>
  </thead>
  <tbody>
    {#each places as place}
      <tr>
        <td colspan="2"><a href="./places/{place._id}">{place.placename}</a></td>
        <td><a href="./categories/{place.categoryid}">{place.categorytitle}</td>
      </tr>
    {/each}
  </tbody>
</table>