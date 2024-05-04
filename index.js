
const search = document.getElementById("search")
const img = document.getElementById("img")

search.addEventListener("click", () => {

  const ask = document.getElementById("input").value
 
  img.innerHTML = `<img class="resultado" src="https://source.unsplash.com/800x400/?${ask}">`
clear(ask)
})

function clear(ask){
  document.getElementById("input").value = "";
}