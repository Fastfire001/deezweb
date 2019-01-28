export default {
  toggle(music) {
    let favs = JSON.parse(localStorage.getItem("favs"))
    let index = favs.indexOf(music.id)
    if (index !== -1) {
      favs.splice(index, 1)
    } else {
      favs.push(music.id)
    }
    localStorage.setItem("favs", JSON.stringify(favs))
  }
}
