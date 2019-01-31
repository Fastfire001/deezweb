<template>
  <div>
    <div>
      <h1>Bienvenue sur Deezweb</h1>
      <p>L'application qui permet facilement d'écouter de la musique</p>
    </div>
    <div v-if="fav" class="t-a-c">
      <p>Une musique de vos favoris au hasard:</p>
      <music-card :music="fav" @toggleFavEvent="toggleFav" v-bind:key="fav.id"/>
      <a @click.prevent="changeRandomFav">Choisir une autre musique</a>
    </div>
  </div>
</template>

<script>
import MusicCard from '@/components/MusicCard'
import FavService from '@/services/FavService.js'

export default {
  name: 'Home',
  components: {
    MusicCard
  },
  data() {
    return {
      favs: null,
      fav: null
    }
  },
  methods: {
    changeRandomFav() {
       this.fav = this.favs[Math.floor(Math.random()*this.favs.length)];
    },
    toggleFav(music) {
      FavService.toggle(music)
      this.favs.splice(this.favs.indexOf(music), 1)
    }
  },
  created() {
    this.favs = FavService.getAllFav()
    this.changeRandomFav()
  }
}
</script>

<style scoped>
.t-a-c {
  text-align: center;
}

.music-card{
  margin: auto;
  width: fit-content;
}
</style>

