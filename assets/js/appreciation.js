 // ✨ i kept updating this like a mf lol ✨

const compliments = [
  "You're sensitive, empathetic and a genuinely kind person. You radiate such kindness in you that touched me. People are lucky to have you in their lives because you know how to make someone feel special and valued (⊃｡•́‿•̀｡)⊃",
  "It’s inspiring how you always push yourself to be the best you can be. You’re hardworking, responsible and have a strong willpower. It’s why I believe you will achieve great feats! (^０^)",
  "I love how self-sufficient you are and how you’re able to live such an interesting lifestyle. You are far from mediocre and I genuinely wish you get to do all the adventures you want in life (ノ= ⩊ = )ノ",
  "Not only are you emotionally intelligent, but intellectually you are too. The fact that you studied physics out of genuine passion is amazing, as well as your other interests. You’re a never boring person to be around because you’re creative and have a beautiful mind ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊",
  "You’re talented and I'll never get tired listening to your singing voice 🥰 I hope you’ll make more music,‧₊˚♪ 𝄞₊˚⊹ art, and photos!°❀⋆.ೃ࿔*: They're precious and need to be seen by the world! As someone who appreciates music and art, I really think you did wonderful in everything you've shared with me -`♡´- ",
  "And oh… I think you’re cute ૮꒰⸝⸝>  ̫ <⸝⸝꒱ა You have gorgeous eyes ଘ(੭´꒳`)°* ੈ‧₊˚ and.. and.. and i think i should just keep my mouth shut on this part ᜊ( ᴗ͈ˬᴗ͈)ᜊ But I'll just say that you’re my favorite face (๑ᵔ⤙ᵔ๑) ",
  "I respect and value everything you say and do, Tays.. it always matters to me. Even when I first met you, the little things you've shared meant a lot to me. Thank you for making me feel like I could rely on you and trust you. Thank you for making me feel like you care 🥺 Thank you for trying. I hope you don’t ever stop being my guardian angel 😇 ˚₊‧꒰ა 𓂋 ໒꒱ ‧₊˚ "
];

const heartFilenames = [
  'blue.png', 'yellow.png', 'pink.png', 'purple.png', 'green.png', 'white.png', 'red.png'
];

const glowClasses = [
  'glow-blue', 'glow-yellow', 'glow-pink', 'glow-purple', 'glow-green', 'glow-white', 'glow-red'
];

const container = document.querySelector('.container');
const lastHeartContainer = document.getElementById('last-heart');
const meter = document.getElementById('meter');
const finalButton = document.querySelector('.final-button');

let clickedCount = 0;

heartFilenames.forEach((file, index) => {
  const box = document.createElement('div');
  box.className = 'heart-box';

  const img = document.createElement('img');
  img.src = `assets/img/emoji hearts/${file}`;
  img.alt = 'heart';
  img.className = 'heart-img heart-drop-bounce';

  const msg = document.createElement('div');
msg.classList.add('message');
if (index === 6) msg.classList.add('final-message');
msg.textContent = compliments[index];


  const onClick = () => {
    if (!img.classList.contains('glow')) {
      img.classList.add('glow');
      img.classList.add(glowClasses[index]);
      msg.classList.add('show');
      clickedCount++;
      updateMeter(clickedCount);

      gsap.fromTo(msg, 
        { opacity: 0, y: 20, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1.05, duration: 0.6, ease: "power2.out" }
      );

      if (index === 6) {
        finalButton.classList.add('show');

        const ring = document.createElement('div');
        ring.className = 'ring';
        const rect = img.getBoundingClientRect();
        ring.style.left = `${rect.left + rect.width / 2 - 10}px`;
        ring.style.top = `${rect.top + rect.height / 2 - 10}px`;
        document.body.appendChild(ring);
        setTimeout(() => ring.remove(), 600);
      }

      createSparkleBurst(img);
    }
  };

  img.addEventListener('click', onClick);

  if (index === 6) {
    lastHeartContainer.appendChild(img);

// i havent been talking to tays lately tbh
const messageWrapper = document.createElement('div');
messageWrapper.className = 'final-message-wrapper';
messageWrapper.appendChild(msg);
lastHeartContainer.parentNode.insertBefore(messageWrapper, meter);


  } else {
    box.appendChild(img);
    box.appendChild(msg);
    container.appendChild(box);
  }

  // like he would just text me at the end of the night so its just so sad writing these things when he feels so distant
  setTimeout(() => {
    img.classList.remove('heart-drop-bounce');
    void img.offsetWidth;
    img.classList.add('floaty-heart');
  }, 1000);
});

function updateMeter(count) {
  const meterImg = document.createElement('img');
  meterImg.src = `assets/img/meter/heart${count}.png`;
  meter.innerHTML = '';
  meter.appendChild(meterImg);
  setTimeout(() => meterImg.classList.remove('animate'), 400);
}

function createSparkleBurst(target) {
  const sparkleCount = 10;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 30;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    sparkle.style.setProperty('--x', `${x}px`);
    sparkle.style.setProperty('--y', `${y}px`);

    const rect = target.getBoundingClientRect();
    sparkle.style.left = `${rect.left + rect.width / 2}px`;
    sparkle.style.top = `${rect.top + rect.height / 2}px`;
    sparkle.style.position = 'fixed';

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
}
