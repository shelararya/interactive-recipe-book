// TYPEWRITER ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = "Welcome to Recipe World!";
    let i = 0;

    function type() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }

    type();
  }

  // FADE-IN ON SCROLL
  const cards = document.querySelectorAll(".card");
  function fadeInOnScroll() {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run once on load

  // CONTACT FORM SUBMIT MESSAGE
  const form = document.querySelector("form");
  const messageBox = document.getElementById("success-message");

  if (form && messageBox) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageBox.innerText = "Thank you! We'll get back to you soon.";
      messageBox.style.display = "block";
      form.reset();

      setTimeout(() => {
        messageBox.style.display = "none";
      }, 3000);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("enterButton");
  button.addEventListener("click", function () {
    window.location.href = "recipeindex.html"; // Redirect page
  });
});