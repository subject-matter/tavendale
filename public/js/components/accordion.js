export default () => {

    const accordionTitles = document.querySelectorAll('[accordion-title]');
    if (accordionTitles.length) {

        for (const accordionTitle of accordionTitles) {
            accordionTitle.addEventListener('click', (e) => {

                const list = accordionTitle.closest('[accordion-list]');
                const parent = accordionTitle.parentNode;

                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                } else {
                    const activeItems = list.querySelectorAll('.active');
                    for (const activeItem of activeItems) {
                        activeItem.classList.remove('active');
                    }

                    parent.classList.add('active');
                }

            });
        }

    }


}