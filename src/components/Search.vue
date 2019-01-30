<template>
  <div> 
    <h1>Recherche</h1>
    <p>Rechercher un titre sur Deezer en utilisant le formulaire suivant:</p>
    <hr>
    <form @submit.prevent="sendForm">
      <label for="music-title-input">Titre:</label>
      <input name="title" id="music-title-input" type="text" v-model="title">
      <label for="music-order-input">Rrier par:</label>
      <select name="order" id="music-order-input" v-model="order">
        <option value="ALBUM_DESC">Album</option>
        <option value="ARTIST_DESC">Artiste</option>
        <option value="TRACK_DESC">Musique</option>
        <option value="RANKING_DESC">Les plus populaires</option>
        <option value="RATING_DESC">les mieux notés</option>
      </select>
      <button>Go</button>
    </form>
    <hr>
    <div v-if="isFormSend">
      <div v-if="musics.total === 0">
        <p>Aucun résultat pour cette recherche ...</p>
      </div>
      <div v-else class="musiccards">
        <MusicCard v-for="music in musics.data" v-bind:key="music.id" :music="music" @toggleFavEvent="toggleFav"/>
      </div>
    </div>
  </div>
</template>

<script>
import MusicService from '@/services/MusicService.js'
import MusicCard from '@/components/MusicCard'
import FavService from '@/services/FavService.js'

export default {
  name: 'Search',
  components: {
    MusicCard
  },
  data() {
    return {
      title: '',
      order: 'ALBUM_DESC',
      musics: [],
      isFormSend: false
    }
  },
  methods: {
    sendForm() {
      MusicService.search(this.title, this.order).then(allMusics => {
        this.musics = allMusics
        this.isFormSend = true
      })
    },
    toggleFav(music) {
      FavService.toggle(music)
    }
  }
}
</script>

<style scoped>
.musiccards{
  display: grid;
  grid-template-columns: repeat(3, 1fr)
}
</style>

