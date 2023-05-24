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
</div>