 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // feeling down and depressed
      if (entry.target.id === "page3") {
        document.querySelector(".next-btn").classList.add("show-button");
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.letter-img').forEach(img => {
  observer.observe(img);
});
