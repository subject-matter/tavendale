import scrollDir from "scrolldir";

import findAncestor from "./findAncestor";

export default () => {
  const subnavArrows = document.querySelectorAll(".js-subnav");
  const subnavChild = document.querySelectorAll(".js-subnavchild");
  const subnavBackArrows = document.querySelectorAll(".js-subnav-back");
  const header = document.querySelector(".js-header");
  const hamburger = document.querySelector(".js-hamburger");
  var body = document.body;

  for (const arrow of subnavArrows) {
    arrow.addEventListener("click", () => {
      const li = arrow.parentNode;
      var m = li.querySelector(".js-subnavchild");
      if (m) {
        m.classList.remove("hidden");
      }
      li.classList.add("nav__li--subnav-active");
    });
  }

  for (const arrow of subnavBackArrows) {
    arrow.addEventListener("click", () => {
      const li = findAncestor(arrow, ".js-nav-branch");
      var m = li.querySelector(".js-subnavchild");
      if (m) {
        m.classList.add("hidden");
      }
      li.classList.remove("nav__li--subnav-active");
    });
  }

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    if (header.classList.contains("header--active-nav")) {
      header.classList.remove("header--active-nav");
      body.classList.remove("fixed");
      body.classList.remove("w-full");
      body.classList.remove("overflow-hidden");
      hamburger.innerHTML = "Menu";
    } else {
      body.classList.add("fixed");
      body.classList.add("w-full");
      body.classList.add("overflow-hidden");
      header.classList.add("header--active-nav");
      hamburger.innerHTML = "Close";
    }
    return false;
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      header.classList.add("header--fixed");
    } else {
      header.classList.add("header--fixed");
    }

    if (window.scrollY === 0) {
      document.documentElement.setAttribute("data-scrolldir", "down");
      header.classList.remove("header--fixed");
    }
  });

  scrollDir();
};
