export default () => {
  let ticking = false;
  const animationItems1 = document.querySelectorAll("[data-animation1]");
  for (const item of animationItems1) {
    bindAnimation1s(item);
  }

  function positionAnimation1(item) {
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    if (ww < 768) {
      item.style.removeProperty("transform");
      return;
    }

    const element = item.parentNode;
    const scrolled = window.scrollY + wh - 100;
    const parentRect = element.getBoundingClientRect();
    const rect = item.getBoundingClientRect();

    const maxX = rect.width + ww;

    const percent = 100 * ((scrolled - element.offsetTop) / wh);

    if (percent >= 0) {
      const currentX = ww - (percent * maxX) / 200;
      item.style.transform = "translate(" + currentX + "px," + percent + "px)";
    }

    // if (parentRect.y > 0) {
    //
    // }

    // const maxY = wh - 10;
    // const minY = 0;
    //
    // const parentRect = element.getBoundingClientRect();
    // const rect = item.getBoundingClientRect();
    //
    // let startPosition = 0;
    // let endPosition = ww + rect.width;
    // // let windowY = parentRect.y - window.scrollY;
    //
    // let windowY = wh - parentRect.y;
    //
    // console.log(parentRect.y, window.scrollY, windowY);
    //
    // let percentage = ((maxY - windowY) / (maxY - minY)) * 100;
    // if (percentage > 0) {
    //     console.log(percentage);
    //     let distance = startPosition - endPosition;
    //
    //     let travelled = distance * percentage / 100;
    //     let currentX = startPosition + travelled;
    //     let currentY = 1.5 * percentage;
    //
    //     item.style.transform = 'translate('+ currentX +'px,'+ currentY +'px)';
    //
    //     // console.log(percentage);
    //
    // }

    /*
        const element = item.parentNode;
        const maxY = wh - 10;
        const minY = 10;
        const parentRect = element.getBoundingClientRect();
        const rect = item.getBoundingClientRect();
        const width = rect.width;
        let maxLine = (ww > 1236) ? (ww * 3 / 4) : (ww / 2);

        let startPosition = 0;
        let endPosition = 0;

        if (parentRect.y > 0) {
            let percentage = ((maxY - parentRect.y) / (maxY - minY)) * 100;

            if (ww - maxLine > width) {
                startPosition = ww - width;
            } else {
                startPosition = maxLine;
            }

            if (maxLine < width) {
                endPosition = maxLine - width;
            }

            let distance = startPosition - endPosition;

            let travelled = distance * percentage / 100;
            let currentX = startPosition - travelled;
            let currentY = 1.5 * percentage;

            // let currentX = (maxY - parentRect.y);
            // let currentY = maxY - parentRect.y;
            //
            // console.log(currentX, currentY);

            item.style.transform = 'translate('+ currentX +'px,'+ currentY +'px)';

        }

        */
  }

  function bindAnimation1s(item) {
    positionAnimation1(item);

    window.addEventListener("scroll", (event) => {
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            positionAnimation1(item);
            ticking = false;
          });
        }
        ticking = true;
      };
      window.addEventListener("scroll", handleScroll);
    });

    window.addEventListener("resize", () => {
      positionAnimation1(item);
    });

    // window.addEventListener('scroll', () => {
    //     positionAnimation1(item);
    // })
  }
};
