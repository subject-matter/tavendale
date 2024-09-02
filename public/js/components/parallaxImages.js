const Rellax = require('rellax');

export default () => {

    const parallaxPrimary = document.querySelectorAll('[data-parallax-primary]');
    const parallaxSecondary = document.querySelectorAll('[data-parallax-secondary]');

    function isMed()
    {
        return window.innerWidth >= 768;
    }

    function isLg()
    {
        return window.innerWidth >= 1024;
    }

    function resize() {
        const windowW = window.innerWidth;
        let gutterLeft = 24;
        if (windowW > 1236) {
            gutterLeft += (windowW - 1236) / 2;
        }

        for (const primary of parallaxPrimary) {
            const parent = primary.parentNode;
            const parentRect = parent.getBoundingClientRect();
            let w = ((parentRect.width / 100) * (isLg() ? 70 : 90)) + gutterLeft;

            if (isMed()) {
                primary.style.left = (-1 * gutterLeft) + 'px';
                primary.style.width = w + 'px';
            } else {
                primary.style.removeProperty('left');
                primary.style.removeProperty('width');
            }
        }
    }

    function init() {
        resize();

        for (const img of parallaxPrimary) {
            const rellax = new Rellax(img, {
                center: true,
                speed: 1,
            });
        }

        for (const img of parallaxSecondary) {
            const rellax = new Rellax(img, {
                center: true,
                speed: 4,
            });
        }

        window.addEventListener('resize', resize);

    }


    init();
}