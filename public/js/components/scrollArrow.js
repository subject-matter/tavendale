import animateScrollTo from "animated-scroll-to";

export default () => {
  const button = document.querySelector(".js-hero-scroll");
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const hero = document.querySelector(".hero");
      const heroRect = hero.getBoundingClientRect();
      const rect = hero.y;

      animateScrollTo(heroRect.height, {
        minDuration: 300,
        speed: 800,
      });

      return false;
    });
  }
};
