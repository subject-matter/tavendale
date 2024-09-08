const Flickity = require("flickity");

export default () => {
  const instagram = document.querySelectorAll("[data-instagram-slider]");
  if (instagram.length) {
    for (const instagramSlider of instagram) {
      new Flickity(instagramSlider, {
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: true,
        percentPosition: true,
        initialIndex: 0,
      });
    }
  }
};
