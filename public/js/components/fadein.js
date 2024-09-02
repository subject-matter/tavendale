export default () => {

    const dom = document.querySelector('.js-fadein');

    function fadeIntrigger()
    {
        const scroll = window.scrollY;
        const maxHeight = window.innerHeight * 5 / 8;
        let percent = (scroll / maxHeight) * 100;
        if (percent > 100) {
            percent = 100;
        }
        let opacity = 100 - percent;
        dom.style.opacity = opacity / 100;
    }



    if (dom) {
        fadeIntrigger();
        window.addEventListener('scroll', () => {
            fadeIntrigger();
        })
    }

}