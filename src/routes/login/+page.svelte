<script>
  // @ts-nocheck
  import Header from "$lib/Header.svelte";
  import LoginForm from "$lib/LoginForm.svelte";
  import WelcomeNav from "$lib/WelcomeNav.svelte";
</script>

<Header>
  <WelcomeNav />
</Header>

<div class="columns">
  <div class="column has-text-centered">
    <h1 class="subtitle">Log in picture goes here</h1>
    <!--
    <img src="" width="300" alt="" />
    -->
  </div>
  <div class="column">
    <div class="box">
      <h1 class="title">Log in</h1>
      <LoginForm />
    </div>
  </div>
</div>