export default () => {
  const fadein = document.querySelector(".js-fadein");

  if (fadein) {
    window.addEventListener("scroll", () => {
      fadein.style.transition = "opacity 0.5s ease-in-out";
      if (window.scrollY > 0) {
        fadein.style.opacity = 0;
      } else {
        fadein.style.opacity = 1;
      }
    });

    if (window.scrollY > 0) {
      fadein.style.opacity = 0;
    } else {
      fadein.style.opacity = 1;
    }
  }
};
