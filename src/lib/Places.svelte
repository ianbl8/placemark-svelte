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
    <th>Category</th>
    <th>Edit</th>
    <th>Delete</th>
  </thead>
  <tbody>
    {#each places as place}
      <tr>
        <td>{place.placename}</td>
        <td>{place.categorytitle}</td>
        <td>[Edit]</td>
        <td>[Delete]</td>
      </tr>
    {/each}
  </tbody>
</table>