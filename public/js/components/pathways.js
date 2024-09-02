const Flickity = require('flickity');
import findAncestor from "./findAncestor";

export default () => {

    const sliders = document.querySelectorAll('[data-pathwayslider]');
    if (sliders.length) {
        window.addEventListener('load', () => {
            for (const slider of sliders) {
                const block = findAncestor(slider, '[data-pathways]');
                const nextBtn = block.querySelector('[data-pathways-next]');
                const prevBtn = block.querySelector('[data-pathways-prev]');
                const sliderCarousel = new Flickity( slider, {
                    contain: true,
                    wrapAround: false,
                    imagesLoaded: true,
                    cellAlign: 'left',
                    pageDots: false,
                    prevNextButtons: false
                });

                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    sliderCarousel.next();
                    return false;
                });

                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    sliderCarousel.previous();
                    return false;
                });
            }
        })
    }

}