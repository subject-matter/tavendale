const Flickity = require("flickity");

export default () => {
  const insights = document.querySelectorAll("[data-insights-slider]");
  if (insights.length) {
    console.log(insights.length);
    for (const insight of insights) {
      new Flickity(insight, {
        imagesLoaded: true,
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: true,
        wrapAround: false,
        contain: true,
      });
    }
  }
};
