import findAncestor from "./findAncestor";

export default () => {

    const buttons = document.querySelectorAll('[data-tab-trigger]');
    for (const button of buttons) {

        button.addEventListener('click', (e) => {
            e.preventDefault();

            const slug = button.getAttribute('data-tab-trigger');
            const block = findAncestor(button, '[data-tabs]');
            const tabs = block.querySelectorAll('[data-tab]');
            const childButtons = block.querySelectorAll('[data-tab-trigger]');
            const tab = block.querySelector('[data-tab="' + slug + '"]');
            if (!tab.classList.contains('active')) {
                for (const closeTab of tabs) {
                    closeTab.classList.remove('active');
                }
                for (const childButton of childButtons) {
                    childButton.classList.remove('active');
                }

                tab.classList.add('active');
                button.classList.add('active');
            }

            return false;
        });

    }

}