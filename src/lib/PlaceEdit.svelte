<script>
// @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services";
  export let id;

  let placename = "";
  let latitude = 0;
  let longitude = 0;
  let categorytitle = "";
  let categoryid = "";
  let description = "";
  let message = "";

  let place;
  let categories = [];
  onMount(async () => {
    place = await placemarkService.getPlaceById(id);
    placename = place.placename;
    latitude = place.latitude;
    longitude = place.longitude;
    categorytitle = place.categorytitle;
    description = place.description;
    categories = await placemarkService.getCategories();
  });

  async function editPlace() {
    if (placename && categorytitle) {
      categoryid = categories.find((category) => category.title == categorytitle)._id;
      const newPlace = {
        _id: place._id,
        placename: placename,
        latitude: latitude,
        longitude: longitude,
        categorytitle: categorytitle,
        categoryid: categoryid,
        description: description,
      };
      const success = await placemarkService.editPlace(place, newPlace);
      if (!success) {
        message = "Unable to edit this place.";
        return;
      }
      location.reload();
    } else {
      message = "Please enter the place details.";
    }
  }
</script>

<hr>
<h2 class="subtitle">Edit details</h2>
<form on:submit|preventDefault={editPlace}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="placename">Place name</label>
        <input bind:value={placename} class="input" type="text" placeholder="Place Name" name="placename">
      </div>
      <div class="field">
        <label class="label" for="categorytitle">Category</label>
        <select bind:value={categorytitle} class="select" id="selection" name="categorytitle">
          <optgroup label="Current category">
            <option selected>{categorytitle}</option>
          </optgroup>
          <optgroup label="All categories">
            {#each categories as category}
              <option>{category.title}</option>
            {/each}
          </optgroup>
        </select>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="latitude">Latitude (° +N/-S)</label>
        <input bind:value={latitude} class="input" type="number" step=".000001" placeholder="53.349804" name="latitude">
      </div>
      <div class="field">
        <label class="label" for="longitude">Longitude (° +E/-W)</label>
        <input bind:value={longitude} class="input" type="number" step=".000001" placeholder="-6.260310" name="longitude">
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="description">Description</label>
        <textarea bind:value={description} class="textarea has-fixed-size" rows="4" placeholder="Description" name="description"></textarea>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link">Edit place</button>
    </div>
  </div>
  {#if message}
    <div class="box">
      {message}
    </div>
  {/if}
</form>
