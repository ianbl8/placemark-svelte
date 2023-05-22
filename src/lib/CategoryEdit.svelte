<script>
// @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services";
  export let id;

  let categorytitle = "";
  let categoryid = "";
  let message = "";

  let category = [];
  onMount(async () => {
    category = await placemarkService.getCategoryById(id);
    categorytitle = category.title;
    categoryid = category._id;
  });

  async function editCategory() {
    if (categorytitle) {
      const newCategory = {
        _id: categoryid,
        title: categorytitle,
      };
      const success = await placemarkService.editCategory(category, newCategory);
      if (!success) {
        message = "Unable to edit this category.";
        return;
      }
      message = `Category ${newCategory.title} edited.`;
    } else {
      message = "Please enter the category details.";
    }
  }
</script>

<form on:submit|preventDefault={editCategory}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label class="label" for="title">Category title</label>
        <input bind:value={categorytitle} class="input" type="text" placeholder="Category" name="title">
      </div>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link">Edit category</button>
    </div>
  </div>
  {#if message}
    <div class="box">
      {message}
    </div>
  {/if}
</form>
