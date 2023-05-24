<script>
  // @ts-nocheck
  import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { placemarkService } from "../services/placemark-services.js";
  import { onMount } from "svelte";
  let avglat = 0;
  let avglng = 0;

  onMount(async () => {
      const categories = await placemarkService.getCategories();
      const places = await placemarkService.getPlaces();
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
      const map = new LeafletMap("places-map", mapConfig);
      categories.forEach((category) => {
        map.addLayerGroup(category.title);
      });
      map.showZoomControl();
      map.showLayerControl();
      places.forEach((place) => {
        addPlaceMarker(map, place);
      });
  });

  function addPlaceMarker(map, place) {
    const markerText = `${place.placename} (${place.categorytitle})`;
    map.addMarker({ lat: place.latitude, lng: place.longitude }, markerText);
  }
</script>

<div class="box" id="places-map" style="height:80vh" />