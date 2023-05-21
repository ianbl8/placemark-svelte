<script>
  // @ts-nocheck
  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Categories from "$lib/Categories.svelte";
</script>

<Header>
  <MainNav />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <p>Image goes here</p>
    <!--
    <img src="" width="300" alt="" />
    -->
  </div>
  <div class="column">
    <Categories />
  </div>
</div>