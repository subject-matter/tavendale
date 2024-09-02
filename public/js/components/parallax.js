const Rellax = require('rellax');


export default () => {

    const dom = document.querySelectorAll('[data-parallax]');
    for (const element of dom) {
        const speed = parseFloat(element.getAttribute('data-parallax'));
        const rellax = new Rellax(element, {
            center: true,
            speed: speed,
            wrapper: element.parentNode
        });
    }

}