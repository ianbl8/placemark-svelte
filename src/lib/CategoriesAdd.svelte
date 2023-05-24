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
      location.reload();
    } else {
      message = "Please enter the category name.";
    };
  }
</script>

<hr>
<h2 class="subtitle">Add a category</h2>
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

