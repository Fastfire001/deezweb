import MusicService from '@/services/MusicService.js'

const FAVS_KEY = "favs"

export default {
  toggle(music) {
    let favs = JSON.parse(localStorage.getItem(FAVS_KEY))
    let index = favs.indexOf(music.id)
    if (index !== -1) {
      favs.splice(index, 1)
    } else {
      favs.push(music.id)
    }
    localStorage.setItem("favs", JSON.stringify(favs))
  },

  getAllFav() {
    let favsId = JSON.parse(localStorage.getItem(FAVS_KEY))
    let musics = []
    favsId.forEach(favId => {
      MusicService.findByMusiqueId(favId)
      .then(res => {
        if (res) {
          musics.push(res)
        }
      })
    });
    return musics
  }
}
