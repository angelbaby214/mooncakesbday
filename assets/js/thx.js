// i really like the song angel baby
const title = document.getElementById("thankyou-title");
title.innerHTML = title.textContent.split("").map(char =>
  `<span>${char === " " ? "&nbsp;" : char}</span>`).join("");

// missing tays he has not texted me all day
const chars = document.querySelectorAll("#thankyou-title span");

gsap.from(chars, {
  opacity: 0,
  x: () => gsap.utils.random(-150, 150),
  y: () => gsap.utils.random(-100, 100),
  ease: "power2.out",
  stagger: 0.05,
  duration: 3,
});

// day 4 of my period and im so sad and alone
// listening to bruno mars
chars.forEach(char => {
  gsap.to(char, {
    rotation: () => gsap.utils.random(-3, 3),
    repeat: -1,
    yoyo: true,
    duration: 2 + Math.random(),
    ease: "sine.inOut",
    delay: 3.2
  });
});

// it doesnt work lmao
function glitchLetter() {
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  gsap.fromTo(randomChar, {
    filter: "blur(1px)",
    scale: 1.2,
    opacity: 0.5
  }, {
    filter: "blur(0)",
    scale: 1,
    opacity: 1,
    duration: 0.4,
    ease: "power1.out"
  });
}
setInterval(glitchLetter, 3000);

// these frogs were pain in the ass and had to do constant changes on this code ugghh.
const frogImages = ["frog2.gif", "frog3.gif", "frog4.gif", "frog5.gif", "frog6.gif", "frog7.gif"];
const frogField = document.getElementById("frog-field");

for (let i = 0; i < 15; i++) {
  const frog = document.createElement("img");
  frog.src = `assets/img/crawlers/${frogImages[Math.floor(Math.random() * frogImages.length)]}`;
  frog.classList.add("floating-frog");
  frog.style.top = `${Math.random() * 90}vh`;
  frog.style.left = `${Math.random() * 90}vw`;
  frog.style.width = '5cm';                  // these annoying frogs finally work
  frog.style.height = 'auto';                
  frog.style.imageRendering = 'pixelated';   
  frog.style.objectFit = 'contain';          

  frogField.appendChild(frog);

  gsap.to(frog, {
    x: Math.random() > 0.5 ? 100 : -100,
    y: "+=20",
    repeat: -1,
    yoyo: true,
    duration: 5 + Math.random() * 3,
    ease: "sine.inOut"
  });
}

// im listening to ed sheeran and it just reminds me a lot of sophomore days omg
const sparkleTrail = document.getElementById("sparkle-trail");

document.addEventListener("mousemove", e => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  sparkleTrail.appendChild(sparkle);

  gsap.to(sparkle, {
    opacity: 0,
    scale: 1.5,
    duration: 0.6,
    ease: "power1.out",
    onComplete: () => sparkle.remove()
  });
});

