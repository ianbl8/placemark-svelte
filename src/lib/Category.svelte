<script>
  // @ts-nocheck
  import { onMount } from "svelte"
  import { goto } from "$app/navigation";
  import { placemarkService } from "../services/placemark-services.js";
  import PlaceMap from "./PlaceMap.svelte";
  export let id;
  
  let categoryEmpty = false;
  let category = [];
  let places = [];
  onMount(async () => {
    category = await placemarkService.getCategoryById(id);
    places = category.places;
    if (places.length == 0) {
      categoryEmpty = true;
    };
    console.log(category);
    console.log(places);
  });

  async function deleteCategory(id) {
    await placemarkService.deleteCategory(id);
    goto("/categories");
  };
</script>

<h1 class="title is-2"><i class="fas fa-layer-group" style="color:rgb(153, 196, 74)" /> {category.title}</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Category</th>
    <th></th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">{category.title}</td>
      <td>
        {#if categoryEmpty}
          <button on:click={deleteCategory(category._id)} class="button">Delete</button>
        {/if}
      </td>
    </tr>
  </tbody>
</table>

<table class="table is-fullwidth">
  <thead>
    <th>Place</th>
    <th></th>
    <th>Latitude</th>
    <th>Longitude</th>
  </thead>
  <tbody>
    {#each places as place}
      <tr>
        <td colspan="2"><a href="../places/{place._id}">{place.placename}</a></td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
      </tr>
      <tr>
        <td colspan="4">
          <PlaceMap id="{place._id}" />
        </td>
      </tr>
    {/each}
  </tbody>
</table>