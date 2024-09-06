const Flickity = require("flickity");
import findAncestor from "./findAncestor";

export default () => {
  const insights = document.querySelectorAll("[data-insights-slider]");
  if (insights.length) {
    for (const insight of insights) {
      const holder = findAncestor(insight, "[data-insights]");
      const nextBtn = holder.querySelector("[data-insights-next]");
      const prevBtn = holder.querySelector("[data-insights-prev]");

      const insightCarousel = new Flickity(insight, {
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: "left", //window.innerWidth <= 768 ? "left" : "center", // Align cells in the center to allow preview of left and right items
        pageDots: false,
        prevNextButtons: false,
        percentPosition: true,
        freeScroll: true,
      });

      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        insightCarousel.next();
        return false;
      });

      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        insightCarousel.previous();
        return false;
      });
    }
  }
};
