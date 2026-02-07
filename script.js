let current = 0;
const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");
const petals = document.querySelector(".petals");

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
  }
}

// Create rose petals
for (let i = 0; i < 25; i++) {
  const petal = document.createElement("span");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 8 + Math.random() * 10 + "s";
  petal.style.opacity = Math.random();
  petals.appendChild(petal);
}

// Play Tum Se Hi after click
function playMusic() {
  music.src =
    "https://www.youtube.com/embed/mt9xg0mmt28?autoplay=1&loop=1&playlist=mt9xg0mmt28";
}
