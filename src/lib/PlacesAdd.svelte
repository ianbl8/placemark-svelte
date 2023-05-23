<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services";

  let newPlacename = "";
  let newLatitude = 0;
  let newLongitude = 0;
  let newCategorytitle = "";
  let newCategoryid = "";
  let newDescription = "";
  let message = "";

  let categories = [];
  onMount(async () => {
    categories = await placemarkService.getCategories();
  });

  async function addPlace() {
    if (newPlacename && newCategorytitle && newLatitude && newLongitude && newDescription) {
      newCategoryid = categories.find((category) => category.title == newCategorytitle)._id;
      const place = {
        placename: newPlacename,
        latitude: newLatitude,
        longitude: newLongitude,
        categorytitle: newCategorytitle,
        categoryid: newCategoryid,
        description: newDescription,
      };
      const success = await placemarkService.addPlace(newCategoryid,place);
      if (!success) {
        message = "Unable to add this place.";
        return;
      }
      location.reload();
    } else {
      message = "Please enter the full place details, including coordinates and description, and select a category.";
    }
  }
</script>

<form on:submit|preventDefault={addPlace}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="placename">Place name</label>
        <input bind:value={newPlacename} class="input" type="text" placeholder="Place Name" name="placename">
      </div>
      <div class="field">
        <label class="label" for="categorytitle">Category</label>
        <select bind:value={newCategorytitle} class="select" id="selection" name="categorytitle">
            {#each categories as category}
              <option>{category.title}</option>
            {/each}
        </select>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="latitude">Latitude (° +N/-S)</label>
        <input bind:value={newLatitude} class="input" type="number" step=".000001" placeholder="53.349804" name="latitude">
      </div>
      <div class="field">
        <label class="label" for="longitude">Longitude (° +E/-W)</label>
        <input bind:value={newLongitude} class="input" type="number" step=".000001" placeholder="-6.260310" name="longitude">
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="description">Description</label>
        <textarea bind:value={newDescription} class="textarea has-fixed-size" rows="4" placeholder="Description" name="description"></textarea>
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link">Add place</button>
    </div>
  </div>
  {#if message}
    <div class="box">
      {message}
    </div>
  {/if}
</form>
