 // new page because im going crazy with the old one and its getting long

function spawnFeatherBoi() {
  const feather = document.createElement("img");
  feather.src = "assets/img/crawlers/feather.gif"; 
  feather.className = "floaty-feather-boi";
  feather.style.left = `${Math.random() * 100}%`;
  feather.style.animationDelay = `${Math.random() * 3}s`;
  document.body.appendChild(feather);

  setTimeout(() => feather.remove(), 13000); 
}

function dropFeatherStorm() {
  const count = 5 + Math.floor(Math.random() * 4); //now playing: troye sivan-angel baby 
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnFeatherBoi(), i * 300); // i need to lock in
  }
}

setInterval(dropFeatherStorm, 5000); // i wish i have all the time to do all things in the world

// i will be studying some SQL after this

window.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid-of-love");
  const title = document.querySelector(".title");
  const desc = document.querySelector(".page-desc");
  const hearts = document.querySelectorAll(".heart");

  if (grid) grid.classList.add("slidey-grid-yeet");
  if (title) title.classList.add("title-wiggle-wow");
  if (desc) desc.classList.add("desc-fade-slink");

  // im so excited for my appointed next week

  hearts.forEach((heart, index) => {
    setTimeout(() => {
      heart.classList.add("heart-drop-bounce");
    }, index * 80); // im excited to see final destination too
  });
});
