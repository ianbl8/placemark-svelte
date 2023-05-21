<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services.js";
  
  let categories = [];
  onMount(async () => {
    categories = await placemarkService.getCategories();
  })
</script>

<h1 class="title is-2"><i class="fas fa-layer-group" style="color:rgb(153, 196, 74)" /> Categories</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Category</th>
    <th>Edit</th>
    <th>Delete</th>
  </thead>
  <tbody>
    {#each categories as category}
      <tr>
        <td>{category.title}</td>
        <td>[Edit]</td>
        <td>[Delete]</td>
      </tr>
    {/each}
  </tbody>
</table>