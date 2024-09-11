const axios = require("axios");

export default () => {
  const loadMorePeopleBtns = document.querySelectorAll(".load-more-people");

  const teamFilter = document.querySelector("select.team");
  const locationFilter = document.querySelector("select.location");
  const positionFilter = document.querySelector("select.position");
  const search = document.querySelector("#searchInput");

  let currentPage = 1;

  if (loadMorePeopleBtns) {
    loadMorePeopleBtns.forEach((loadMorePeopleBtn) => {
      loadMorePeopleBtn.addEventListener("click", (e) => {
        e.preventDefault();

        currentPage += 1;

        axios
          .get(`/our-people/page/${currentPage}`, {
            params: {
              team: teamFilter.value,
              location: locationFilter.value,
              position: positionFilter.value,
              search: search.value,
            },
          })
          .then((response) => {
            const previousScrollTop = window.pageYOffset;

            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, "text/html");
            const container = doc.querySelector(
              "[data-people-container] .our-people__list"
            );
            const localContainer = document.querySelector(
              "[data-people-container] .our-people__list"
            );

            if (
              container.querySelectorAll(".our-people__person").length !== 12
            ) {
              loadMorePeopleBtn.style.opacity = "0";
            } else {
              loadMorePeopleBtn.style.opacity = "1";
            }

            localContainer.insertAdjacentHTML("beforeend", container.innerHTML);

            window.scrollTo({
              top: previousScrollTop,
              behavior: "instant",
            });
          });
      });
    });
  }

  const searchForm = document.querySelectorAll(".js-people-search-form");

  searchForm.forEach((form) => {
    function loadResults() {
      axios
        .get("/our-people", {
          params: {
            team: teamFilter.value,
            location: locationFilter.value,
            position: positionFilter.value,
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
