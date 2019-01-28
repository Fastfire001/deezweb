<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  created() {
    let favs = localStorage.getItem("favs")
    if (favs === null) {
      localStorage.setItem('favs', JSON.stringify([]))
    }
  }
}
</script>

<style>

</style>
