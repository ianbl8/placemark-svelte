<script>
  // @ts-nocheck
  // import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { placemarkService } from "../services/placemark-services.js";
  import { onMount } from "svelte";
  export let id;
  const map = [];

  onMount(async () => {
      const place = await placemarkService.getPlaceById(id);
      const mapConfig = {
        location: { lat: place.latitude, lng: place.longitude },
        zoom: 10,
        minZoom: 1,
      };
      map[id] = new LeafletMap(id, mapConfig);
      map[id].showZoomControl();
      map[id].showLayerControl();
      map[id].addMarker({ lat: place.latitude, lng: place.longitude }, place.placename);
  });
</script>

<div class="box" id="{id}" style="height:33vh" />