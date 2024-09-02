const Flickity = require('flickity');
import findAncestor from "./findAncestor";

export default () => {

    const insights = document.querySelectorAll('[data-insigts-slider]');
    if (insights.length) {
        for (const insight of insights) {

            const holder = findAncestor(insight, '[data-insigts]');
            const nextBtn = holder.querySelector('[data-insigts-next]');
            const prevBtn = holder.querySelector('[data-insigts-prev]');
            const insightCarousel = new Flickity( insight, {
                contain: true,
                wrapAround: false,
                imagesLoaded: true,
                cellAlign: 'left',
                pageDots: false,
                prevNextButtons: false
            });

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                insightCarousel.next();
                return false;
            });

            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                insightCarousel.previous();
                return false;
            });

        }
    }
}