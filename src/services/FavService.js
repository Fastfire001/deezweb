const FAVS_KEY = "favs"

export default {
  toggle(music) {
    let favs = JSON.parse(localStorage.getItem(FAVS_KEY))
    let index = favs.findIndex(function(element){
      return music.id === element.id 
    })
    if (index === -1) {
      favs.push(music)
    } else {
      favs.splice(index, 1)
    }
    localStorage.setItem(FAVS_KEY, JSON.stringify(favs))
  },

  getAllFav() {
    return JSON.parse(localStorage.getItem(FAVS_KEY))
  }
}
