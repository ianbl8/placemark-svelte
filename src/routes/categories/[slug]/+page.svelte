<script>
  // @ts-nocheck
  export let data;
  const id = data.slug;

  import Header from "$lib/Header.svelte";
  import MainNav from "$lib/MainNav.svelte";
  import Category from "$lib/Category.svelte";
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
    <Category id="{id}" />
  </div>
</div>