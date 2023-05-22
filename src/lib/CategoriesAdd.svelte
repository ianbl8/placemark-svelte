<script>
  import { placemarkService } from "../services/placemark-services";

  let newTitle = "";
  let message = "";

  async function addCategory() {
    if (newTitle) {
      const category = {
        title: newTitle,
      };
      const success = await placemarkService.addCategory(category);
      if (!success) {
        message = "Unable to add this category.";
        return;
      };
      message = `Category ${category.title} added.`;
    } else {
      message = "Please enter the category name.";
    };
  }
</script>

<form on:submit|preventDefault={addCategory}>
  <div class="field">
    <label class="label" for="title">New category</label>
    <input bind:value={newTitle} class="input" type="text" placeholder="Enter category title" name="title">
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link">Add category</button>
    </div>
  </div>
  {#if message}
    <div class="box">
      {message}
    </div>
  {/if}
</form>

