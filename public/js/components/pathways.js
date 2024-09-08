const Flickity = require("flickity");

export default () => {
  const sliders = document.querySelectorAll("[data-pathwayslider]");
  if (sliders.length) {
    window.addEventListener("load", () => {
      for (const slider of sliders) {
        new Flickity(slider, {
          imagesLoaded: true,
          cellAlign: "left",
          pageDots: false,
          prevNextButtons: true,
          percentPosition: true,
          initialIndex: 0,
        });
      }
    });
  }
};
