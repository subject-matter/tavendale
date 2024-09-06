const Flickity = require("flickity");
import findAncestor from "./findAncestor";

export default () => {
  const instagram = document.querySelectorAll("[data-instagram-slider]");
  if (instagram.length) {
    for (const instagramSlider of instagram) {
      const holder = findAncestor(instagramSlider, "[data-instagram]");
      const nextBtn = holder.querySelector("[data-instagram-next]");
      const prevBtn = holder.querySelector("[data-instagram-prev]");
      const instaCarousel = new Flickity(instagramSlider, {
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: false,
        percentPosition: true,
        initialIndex: 0,
      });

      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        instaCarousel.next();
        return false;
      });

      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        instaCarousel.previous();
        return false;
      });
    }
  }
};
