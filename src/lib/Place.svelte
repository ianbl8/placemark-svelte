<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { placemarkService } from "../services/placemark-services.js";
  export let id;
  
  let place = [];
  onMount(async () => {
    place = await placemarkService.getPlaceById(id);
  });

  async function deletePlace(id) {
    await placemarkService.deletePlace(id);
    history.back();
  };
</script>

<h1 class="title is-2"><i class="fas fa-map-marker-alt" style="color:rgb(63, 122, 139)" /> Place: {place.placename}</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Place</th>
    <th></th>
    <th>Category</th>
    <th>Delete</th>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">{place.placename}</td>
      <td><a href="../categories/{place.categoryid}">{place.categorytitle}</td>
      <td><button on:click={deletePlace(place._id)} class="button">Delete</button></td>
    </tr>
    <tr>
      <td>Latitude</td>
      <td>{place.latitude}</td>
      <td>Longitude</td>
      <td>{place.longitude}</td>
    </tr>
    <tr>
      <td colspan="4">{place.description}</td>
    </tr>
    <tr>
      <td colspan="4"><img src={place.img} width="600" alt={place.placename} /></td>
    </tr>
  </tbody>
</table>