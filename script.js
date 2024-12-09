// Reference to the card
const card = document.getElementById("flip-card");

// Add click event listener
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});
