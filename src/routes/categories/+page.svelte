<script>
  // @ts-nocheck
  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Categories from "$lib/Categories.svelte";
  import CategoriesAdd from "$lib/CategoriesAdd.svelte";
  import Charts from "$lib/Charts.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <Charts />
  </div>
  <div class="column">
    <Categories />
    <CategoriesAdd />
  </div>
</div>