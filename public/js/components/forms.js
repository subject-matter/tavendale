export default () => {


    const forms = document.querySelectorAll('form[data-ajax]');
    if (forms.length) {
        for (const form of forms) {

            form.addEventListener('freeform-ajax-success', (e) => {
                const formSubmitted = e.form;
                formSubmitted.classList.add('success');
                window.setTimeout(() => {
                    formSubmitted.scrollIntoView({ behavior: 'smooth', block: 'start'});
                }, 100);

            });

            // Override the way field errors are displayed
            form.addEventListener('freeform-render-field-errors', function(event) {
                // Prevent the default behaviour
                event.preventDefault();

                const errors = event.errors;
                for (const key in errors) {
                    if (!errors.hasOwnProperty(key) || !key) {
                        continue;
                    }

                    const messages = errors[key];
                    const errorsList = document.createElement("p");
                    errorsList.classList.add("ff-errors");
                    errorsList.classList.add("error");
                    errorsList.classList.add("text-error");
                    errorsList.classList.add("font-sansBold");
                    errorsList.innerHTML = messages.join('<br>');

                    const inputList = form.querySelectorAll("*[name=" + key + "], *[name='" + key + "[]']");
                    for (let inputIndex = 0; inputIndex < inputList.length; inputIndex++) {
                        const input = inputList[inputIndex];
                        input.classList.add("this-field-has-errors");
                        input.parentElement.appendChild(errorsList);
                    }
                }
            });
        }
    }

}