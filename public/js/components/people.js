const Flickity = require("flickity");

export default () => {
  const people = document.querySelectorAll("[data-people-slider]");
  if (people.length) {
    for (const peopleSlider of people) {
      new Flickity(peopleSlider, {
        imagesLoaded: true,
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: true,
        initialIndex: 0,
        contain: true,
      });
    }
  }
};
