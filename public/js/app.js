const Flickity = require("flickity");

import navigation from "./components/navigation";
import pathways from "./components/pathways";
import fadein from "./components/fadein";
import accordion from "./components/accordion";
import news from "./components/news";
import people from "./components/people";
import instagram from "./components/instagram";
import forms from "./components/forms";
import parallaxImages from "./components/parallaxImages";
import tabs from "./components/tabs";
import newsPage from "./components/newsPage";
import parallax from "./components/parallax";
import scrollArrow from "./components/scrollArrow";
import peoplePage from "./components/peoplePage";
import repositionAnimatedText from "./components/repositionAnimatedText";

var PrevNextButton = Flickity.PrevNextButton;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function areBothElementsInView(element1, element2) {
  return isElementInViewport(element1) && isElementInViewport(element2);
}

const original = PrevNextButton.prototype.update;

PrevNextButton.prototype.update = function () {
  // index of first or last cell, if previous or next
  var cells = this.parent.cells;
  var lastIndex = cells.length ? cells.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;

  var isEnabling;
  if (this.parent.options.contain && !this.parent.options.wrapAround) {
    var boundCell = cells[boundIndex];
    var selectedCell = cells[this.parent.selectedIndex];
    isEnabling = selectedCell.target != boundCell.target;

    if (areBothElementsInView(selectedCell.element, boundCell.element)) {
      isEnabling = false;
    }
    var method = isEnabling ? "enable" : "disable";
    this[method]();
  } else {
    original.call(this);
  }
};

// Scripts to fire once dom has loaded
document.addEventListener("DOMContentLoaded", () => {
  navigation();
  fadein();
  accordion();
  pathways();
  news();
  people();
  instagram();
  forms();
  parallaxImages();
  tabs();
  newsPage();
  parallax();
  scrollArrow();
  peoplePage();
  repositionAnimatedText();
  people();
});
