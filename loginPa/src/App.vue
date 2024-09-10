<script setup>
import LogoLink from './components/LogoLink.vue'

</script>

<template>
  <header>
    <div>
      <img alt="Vue logo" class="logo" src="./assets/LOGO.jpg" width="50" height="50" />
     
        <LogoLink msg="" />
    </div>
  </header>


  <nav>
    <RouterLink to="/">Login</RouterLink>&nbsp;
    <RouterLink to="/Enroll">Enroll</RouterLink>&nbsp;
    <RouterLink to="/menu">menu</RouterLink>&nbsp;
    <RouterLink to="/Tables">Table</RouterLink>
   </nav>
   
  <main>
    <RouterView />
  </main>

</template>

<style scoped>
header {
  line-height: 0.1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
