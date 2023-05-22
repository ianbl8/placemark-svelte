<script>
  // @ts-nocheck
  export let data;
  const id = data.slug;

  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Place from "$lib/Place.svelte";
  import PlaceEdit from "$lib/PlaceEdit.svelte";
  import PlaceMap from "$lib/PlaceMap.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <PlaceMap />
  </div>
  <div class="column">
    <Place id="{id}" />
    <PlaceEdit id="{id}" />
  </div>
</div>