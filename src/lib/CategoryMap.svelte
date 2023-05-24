<script>
  // @ts-nocheck
  // import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { placemarkService } from "../services/placemark-services.js";
  import { onMount } from "svelte";
  export let id;
  let avglat = 0;
  let avglng = 0;
  let message = "";

  onMount(async () => {
    const category = await placemarkService.getCategoryById(id);
    const places = category.places;
    if (places.length > 0) {
      for (let i = 0; i < places.length; i ++) {
        avglat += places[i].latitude;
        avglng += places[i].longitude;
      }
      avglat = avglat / places.length;
      avglng = avglng / places.length;
      const mapConfig = {
        location: { lat: avglat, lng: avglng },
        zoom: 7,
        minZoom: 1,
      };
      const map = new LeafletMap("category-map", mapConfig);
      map.showZoomControl();
      map.showLayerControl();
      places.forEach((place) => {
        addPlaceMarker(map, place);
      });
    } else {
      message = "No places stored in this category"
    };
  });

  function addPlaceMarker(map, place) {
    const markerText = `${place.placename}`;
    map.addMarker({ lat: place.latitude, lng: place.longitude }, markerText);
  }
</script>

<div class="box" id="category-map" style="height:80vh">
  {#if message}
    <h3 class="subtitle"><em>{message}</em></h3>
  {/if}
</div>