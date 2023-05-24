<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-services.js";
  export let id;
  
  let files;
  let images = [];
  let message = "";
  let place = [];

  onMount(async () => {
    place = await placemarkService.getPlaceById(id);
    images = place.img;
  });

  // addImage()
  // issues with passing file through to hapi
  // and issues running cloudinary in svelte

  async function removeImage(index) {
    images.splice(index, 1);
    place.img = images;
    const success = await placemarkService.editPlace(place, place);
    if (!success) {
      message = "Unable to remove this image.";
      return;
    };
  };

</script>

<h1 class="title is-2"><i class="fas fa-map-marker-alt" style="color:rgb(63, 122, 139)" /> {place.placename}</h1>
<table class="table is-fullwidth">
  <thead>
    <th>Images</th>
  </thead>
  <tbody>
    {#each images as image, index}
      <tr>
        <td>
          <img src={image} width="600" alt={place.placename} />
          <button on:click|preventDefault={() => {removeImage(index)}} class="button is-danger"><i class="fas fa-trash-alt"></i> &nbsp; Delete</button>
        </td>
      </tr>
    {/each}
    <!--
    <tr>
      <td>
        <div class="card-content">
          <form on:submit|preventDefault={() => {addImage()}}>
            <div id="file-select" class="file has-name is-fullwidth">
              <label class="file-label">
                <input class="file-input" bind:files name="imagefile" type="file" accept="image/jpeg, image/png">
                <span class="file-cta">
                  <span class="file-icon"><i class="fas fa-upload"></i></span>
                  <span class="file-label">Choose a file</span>
                </span>
                <span class="file-name"></span>
            </label>
            <button class="button is-info"><i class="fas fa-upload"></i> &nbsp; Upload</button>
            </div>
            {#if message}
              <div class="box">
                {message}
              </div>
            {/if}
          </form>
        </div>
      </td>
    </tr>
    -->
  </tbody>
</table>