<script>
  // @ts-nocheck
  export let data;
  const id = data.slug;

  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Category from "$lib/Category.svelte";
  import CategoryEdit from "$lib/CategoryEdit.svelte";
  import CategoryMap from "$lib/CategoryMap.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <CategoryMap id="{id}"/>
  </div>
  <div class="column">
    <Category id="{id}" />
    <CategoryEdit id="{id}" />
  </div>
</div>