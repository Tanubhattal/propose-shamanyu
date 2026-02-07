let current = 0;
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
  }
}

function playMusic() {
  music.src =
    "https://www.youtube.com/embed/mt9xg0mmt28?autoplay=1&loop=1&playlist=mt9xg0mmt28";
}
