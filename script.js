function moveRandomE1(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 80) + "vh";
    elm.style.left = Math.floor(Math.random() * 80) + "vw";
    elm.style.transition = "top 0.5s ease, left 0.5s ease"; 
}

const moveRandom = document.querySelector('#move-random');

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomE1(e.target);
});

// Make the "No" button change text randomly
const phrases = ["No 😢", "Are you sure? 🥺", "Think again! 💔", "Plz don't 🥲"];
let currentIndex = 0;

moveRandom.addEventListener("click", function() {
    moveRandom.textContent = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;
});
