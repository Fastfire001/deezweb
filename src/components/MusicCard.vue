<template>
  <div class="music-card">
    <div class="flex">
      <img :src="music.album.cover_small" :alt="music.album.name">
      <div class="music-info">
        <span class="music-title">{{ music.title }}</span>
        <br>
        <span class="artist-name">{{ music.artist.name }}</span>
      </div>
    </div>
    <audio :src="music.preview" controls></audio>
    <br>
    <a @click.prevent="toggleFav">{{ buttonText }}</a>
  </div>
</template>

<script>
export default {
    name: 'MusicCard',
    props: ['music'],
    data() {
      return {
        isFav: null
      }
    },
    computed: {
      buttonText() {
        if (this.isFav) {
          return "retirer des favoris"
        } else {
          return "ajouter aux favoris"
        }
      }
    },
    created(){
      let favs = JSON.parse(localStorage.getItem("favs"))
      this.isFav = favs.indexOf(this.music.id) !== -1
    },
    methods: {
      toggleFav() {
        this.isFav = (this.isFav) ? false : true
        this.$emit('toggleFavEvent', this.music)
      }
    }
}
</script>

<style scoped>
  .music-card{
    border: 1px solid gray;
    padding: 10px;
  }

  .flex{
    display: flex;
  }
  
  img {
    width: 7vw;
    height: 7vw;
  }

  .music-info {
    padding: 10px;
  }

  .music-title {
    font-weight: bold;
    font-size: 1.5em;
  }

  .artist-name {
    color: rgb(70, 67, 67);
  }

  audio {
    margin-top: 1vh;
  }
</style>

