<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services.js";
  export let id;
  
  let category = [];
  onMount(async () => {
    category = await placemarkService.getCategoryById(id);
  })
</script>

<h1 class="title is-2"><i class="fas fa-layer-group" style="color:rgb(153, 196, 74)" /> Category: {category.title}</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Category</th>
    <th>Edit</th>
    <th>Delete</th>
  </thead>
  <tbody>
    <tr>
      <td>{category.title}</td>
      <td>[Edit]</td>
      <td>[Delete]</td>
    </tr>
  </tbody>
</table>