export default () => {

    const dropdown = document.querySelector('.js-news-category');
    if (dropdown) {
        dropdown.addEventListener('change', () => {

            const value = dropdown.value;
            window.location = value;

        })
    }

}