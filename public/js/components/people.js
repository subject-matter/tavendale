const Flickity = require('flickity');
import findAncestor from "./findAncestor";


export default () => {


    const people = document.querySelectorAll('[data-people-slider]');
    if (people.length) {
        for (const peopleSlider of people) {

            const holder = findAncestor(peopleSlider, '[data-people]');
            const nextBtn = holder.querySelector('[data-people-next]');
            const prevBtn = holder.querySelector('[data-people-prev]');
            const insightCarousel = new Flickity( peopleSlider, {
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