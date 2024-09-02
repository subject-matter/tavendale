const Flickity = require('flickity');

import navigation from "./components/navigation";
import pathways from "./components/pathways";
import fadein from "./components/fadein";
import accordion from "./components/accordion";
import news from "./components/news";
import people from "./components/people";
import forms from "./components/forms";
import parallaxImages from "./components/parallaxImages";
import tabs from "./components/tabs";
import newsPage from "./components/newsPage";
import parallax from "./components/parallax";
import scrollArrow from "./components/scrollArrow";
import peoplePage from "./components/peoplePage";
import repositionAnimatedText from "./components/repositionAnimatedText";

// Scripts to fire once dom has loaded
document.addEventListener("DOMContentLoaded", () => {

    navigation();
    fadein();
    accordion();
    pathways();
    news();
    people();
    forms();
    parallaxImages();
    tabs();
    newsPage();
    parallax();
    scrollArrow();
    peoplePage();
    repositionAnimatedText();


});