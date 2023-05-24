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
  <div class="column">
    <div class="box">
      <h1 class="title">Log in</h1>
      <LoginForm />
    </div>
  </div>
</div>