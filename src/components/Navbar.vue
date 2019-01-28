<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/">Accueil</router-link>
      <router-link to="/search">Rechercher un titre</router-link>
      <router-link to="/fav">Mes favoris</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped lang="scss">

</style>
