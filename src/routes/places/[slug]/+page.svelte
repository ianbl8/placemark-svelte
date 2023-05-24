<script>
  // @ts-nocheck
  export let data;
  const id = data.slug;

  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Place from "$lib/Place.svelte";
  import PlaceEdit from "$lib/PlaceEdit.svelte";
  import PlaceImages from "$lib/PlaceImages.svelte";
  import PlaceMap from "$lib/PlaceMap.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns content">
  <div class="column has-text-centered">
    <PlaceImages id="{id}"/>
  </div>
  <div class="column">
    <Place id="{id}" />
    <PlaceMap id="{id}"/>
    <PlaceEdit id="{id}" />
  </div>
</div>