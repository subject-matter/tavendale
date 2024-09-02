const axios = require('axios');

export default () => {

    const searchForm = document.querySelector('.js-people-search-form');


    function loadResults() {
        axios.get('/our-people', {
            params: {
                team: searchForm.querySelector('select').value,
                search: searchForm.querySelector('input').value,
            }
        }).then((response) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, 'text/html');
            const container = doc.querySelector('[data-people-container]');
            const localContainer = document.querySelector('[data-people-container]');
            localContainer.innerHTML = container.innerHTML;
        })
    }

    if (searchForm) {

        const inputs = searchForm.querySelectorAll('input,select');

        searchForm.addEventListener('submit', () => {
            loadResults();
        });

        for (const input of inputs) {
            input.addEventListener('change', () => {
                loadResults();
            });
            input.addEventListener('keyup', () => {
                loadResults();
            });
        }

    }

}