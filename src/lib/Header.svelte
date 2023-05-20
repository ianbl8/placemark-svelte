<script>
  import TitleBar from "./TitleBar.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
      <TitleBar title={"PlaceMark"} subtitle={"Oh, the places you'll go!"} />
  </div>
  <div class="column">
      <slot />
  </div>
</div>