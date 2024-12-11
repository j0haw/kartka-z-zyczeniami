window.addEventListener("load", adjustCardSize);
window.addEventListener("resize", adjustCardSize);
const card = document.getElementById("flip-card");

//doapsowanie jak na pc to większy font i rozmiar x2
function adjustCardSize() {
  const card = document.querySelector(".card");
  const textBack = document.querySelector(".textBack");

  if (window.matchMedia("(orientation: landscape)").matches) {
    card.style.width = "576px";
    card.style.height = "800px";
    textBack.style.fontSize = "1rem";

  } else {
    card.style.width = "288px";
    card.style.height = "400px";
  }
}

//obracanie karty
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

//confetti z góry

const defaults = {
  origin: { y: 0 },
  spread: 360,
  ticks: 50,
  gravity: 2,
  decay: 0.92,
  startVelocity: 40,
  shapes: ["star"],
  colors: ["ffc866", "f24c70", "ff6000", "FF747ef7CA6C", "747ef7"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 100,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);

//confetti on click
card.addEventListener("click", () => {
  const count = 200,
    defaults = {
      origin: { y: 1 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.3, {
    spread: 120,
    startVelocity: 45,
  });
});
const end = Date.now() + 2 * 360;

//te z boku

const colors = ["ffc866", "f24c70", "ff6000", "FF747ef7CA6C", "747ef7"];

(function frame() {
  confetti({
    particleCount: 4,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 4,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  confetti({
    particleCount: 4,
    angle: 90,
    spread: 55,
    origin: { y: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
