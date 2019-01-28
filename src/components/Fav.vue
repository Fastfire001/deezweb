<template>
  <div>
    <h1>Mes Favoris</h1>
    <p>Liste de mes favoris</p>
    <hr>
    <div v-if="favs" class="musiccards">
      <MusicCard v-for="fav in favs" v-bind:key="fav.id" :music="fav" @toggleFavEvent="toggleFav"/>
    </div>
    <div v-else>
      <p>Auncun favoris dans votre liste ...</p>
    </div>
  </div>
</template>

<script>
import MusicCard from '@/components/MusicCard'
import FavService from '@/services/FavService.js'

export default {
  name: 'Fav',
  components: {
    MusicCard
  },
  data() {
    return {
      favs: null
    }
  },
  methods: {
    toggleFav(music) {
      FavService.toggle(music)
      this.favs.splice(this.favs.indexOf(music), 1)
    }
  },
  created() {
    this.favs = FavService.getAllFav()
  }
}
</script>

<style scoped>
.musiccards{
  display: grid;
  grid-template-columns: repeat(3, 1fr)
}
</style>

