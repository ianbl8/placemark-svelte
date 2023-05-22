<script>
  // @ts-nocheck
  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Places from "$lib/Places.svelte";
  import PlacesAdd from "$lib/PlacesAdd.svelte";
  import PlacesMap from "$lib/PlacesMap.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <PlacesMap />
  </div>
  <div class="column">
    <Places />
    <PlacesAdd />
  </div>
</div>