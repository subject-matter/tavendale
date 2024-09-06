const Flickity = require("flickity");
import findAncestor from "./findAncestor";

export default () => {
  const sliders = document.querySelectorAll("[data-pathwayslider]");
  if (sliders.length) {
    window.addEventListener("load", () => {
      for (const slider of sliders) {
        const block = findAncestor(slider, "[data-pathways]");
        const nextBtn = block.querySelector("[data-pathways-next]");
        const prevBtn = block.querySelector("[data-pathways-prev]");
        const sliderCarousel = new Flickity(slider, {
          wrapAround: true,
          imagesLoaded: true,
          cellAlign: window.innerWidth <= 768 ? "left" : "center", // Align cells in the center to allow preview of left and right items
          pageDots: false,
          prevNextButtons: false,
          percentPosition: true,
          initialIndex: window.innerWidth <= 768 ? 0 : 2,
          freeScroll: true,
        });

        nextBtn.addEventListener("click", (e) => {
          e.preventDefault();
          sliderCarousel.next();
          return false;
        });

        prevBtn.addEventListener("click", (e) => {
          e.preventDefault();
          sliderCarousel.previous();
          return false;
        });
      }
    });
  }
};
