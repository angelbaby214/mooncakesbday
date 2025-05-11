const text = "I stayed up all night building this page,\nso i figured it’s only fair to send my henchmen back\nto keep you company. 😉";
const typed = document.getElementById("typed-text");
let i = 0;
let current = "";

function typeEffect() {
  if (i < text.length) {
    current += text.charAt(i);
    typed.innerHTML = current;
    i++;
    setTimeout(typeEffect, 40);
  } else {
    const btn = document.getElementById("summon-button");
    btn.style.display = "flex";
    setTimeout(() => btn.classList.add("show"), 50);
  }
}

setTimeout(typeEffect, 2000);
