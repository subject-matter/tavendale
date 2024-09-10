export default () => {
  const fadein = document.querySelector(".js-fadein");

  const dom = document.querySelector(".hero--home h3");

  if (home) {
    window.addEventListener("scroll", () => {
      const rect = dom.getBoundingClientRect();

      console.log(rect.top);
      if (rect.top + rect.height < 0) {
        fadein.style.opacity = 0;
      } else {
        fadein.style.opacity = 1;
      }
    });
  }

  //   function fadeIntrigger() {
  //     const scroll = window.scrollY;
  //     const maxHeight = (window.innerHeight * 5) / 8;
  //     let percent = (scroll / maxHeight) * 100;
  //     if (percent > 100) {
  //       percent = 100;
  //     }
  //     let opacity = 100 - percent;
  //     dom.style.opacity = opacity / 100;
  //   }

  //   if (dom) {
  //     fadeIntrigger();
  //     window.addEventListener("scroll", () => {
  //       fadeIntrigger();
  //     });
  //   }
};
