<script>
  // @ts-nocheck
  import Header from "$lib/Header.svelte";
  import SignupForm from "$lib/SignupForm.svelte";
  import WelcomeNav from "$lib/WelcomeNav.svelte";
</script>

<Header>
  <WelcomeNav />
</Header>

<div class="columns">
  <div class="column">
    <div class="box">
      <h1 class="title">Sign up</h1>
      <SignupForm />
    </div>
  </div>
  <div class="column has-text-centered">
    <h1 class="subtitle">Sign up picture goes here</h1>
    <!--
    <img src="" width="300" alt="" />
    -->
  </div>
</div>