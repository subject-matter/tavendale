const axios = require("axios");

export default () => {
  const searchForm = document.querySelectorAll(".js-people-search-form");

  searchForm.forEach((form) => {
    const teamFilter = document.querySelector("select.team");
    const locationFilter = document.querySelector("select.location");
    const search = document.querySelector("#searchInput");

    function loadResults() {
      axios
        .get("/our-people", {
          params: {
            team: teamFilter.value,
            // location: locationFilter.value,
            search: search.value,
          },
        })
        .then((response) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(response.data, "text/html");
          const container = doc.querySelector("[data-people-container]");
          const localContainer = document.querySelector(
            "[data-people-container]"
          );
          localContainer.innerHTML = container.innerHTML;
        });
    }

    if (form) {
      const inputs = form.querySelectorAll("input,select");

      form.addEventListener("submit", () => {
        console.log("submit");
        loadResults();
      });

      for (const input of inputs) {
        input.addEventListener("change", () => {
          loadResults();
        });
        input.addEventListener("keyup", () => {
          loadResults();
        });
      }
    }
  });
};
