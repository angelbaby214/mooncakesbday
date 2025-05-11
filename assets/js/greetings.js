const mouseSwarm = document.getElementById("mouseSwarm");
const birthdayText = document.getElementById("birthdayText");
const titleInner = birthdayText.querySelector(".title-inner");
const sharkPrincess = document.getElementById("sharkPrincess");
const attentionBtn = document.getElementById("attentionBtn");

// my mice took forever to work but finally fixed
const mouseGifs = [
  "assets/img/greetings/mouse1.gif",
  "assets/img/greetings/mouse2.gif",
  "assets/img/greetings/mouse3.gif",
  "assets/img/greetings/mouse4.gif"
];

// im hiring more henchmen)
const rows = 8;
const micePerRow = 7;

for (let row = 0; row < rows; row++) {
  const topSpacing = (100 / (rows - 1)) * row; // grrrr..

  for (let i = 0; i < micePerRow; i++) {
    const mouse = document.createElement("img");
    mouse.src = mouseGifs[Math.floor(Math.random() * mouseGifs.length)];
    mouse.className = "mouse";

    mouse.style.top = `${topSpacing}vh`;
    mouse.style.left = `-128px`;

    const delay = Math.random() * 2 + (i * 0.5);
    mouse.style.animationDelay = `${delay}s`;

    mouseSwarm.appendChild(mouse);
  }
}


setTimeout(() => {
  birthdayText.classList.add("show");
  titleInner.classList.add("fireworks");
}, 10000);


setTimeout(() => {
  mouseSwarm.remove();
  birthdayText.classList.add("show");
}, 10000); // after 10s

setTimeout(() => {
  sharkPrincess.classList.add("show");
}, 15000); // 2s after text

setTimeout(() => {
  attentionBtn.classList.add("show");
}, 19000); // 1s after shark

