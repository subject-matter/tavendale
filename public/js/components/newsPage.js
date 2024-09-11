const axios = require("axios");

export default () => {
  const dropdown = document.querySelector(".js-news-category");
  if (dropdown) {
    dropdown.addEventListener("change", () => {
      const value = dropdown.value;
      window.location = value;
    });
  }

  const loadMoreNewsBtns = document.querySelectorAll(".load-more-news");
  const search = document.querySelector("#searchInput");

  let currentPage = 1;

  if (loadMoreNewsBtns) {
    loadMoreNewsBtns.forEach((loadMoreNewsBtn) => {
      loadMoreNewsBtn.addEventListener("click", (e) => {
        e.preventDefault();

        currentPage += 1;

        axios
          .get(`/news/page/${currentPage}`, {
            params: {
              search: search.value,
            },
          })
          .then((response) => {
            const previousScrollTop = window.pageYOffset;

            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, "text/html");
            const container = doc.querySelector(".news-page__list");
            const localContainer = document.querySelector(".news-page__list");

            localContainer.insertAdjacentHTML("beforeend", container.innerHTML);

            console.log(container.querySelectorAll(".news-page__item").length);

            if (container.querySelectorAll(".news-page__item").length !== 6) {
              loadMoreNewsBtn.style.opacity = "0";
            } else {
              loadMoreNewsBtn.style.opacity = "1";
            }

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
        .get("/news", {
          params: {
            search: search.value,
          },
        })
        .then((response) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(response.data, "text/html");
          const container = doc.querySelector(".news-page__list");
          const localContainer = document.querySelector(".news-page__list");
          console.log(container.innerHTML);
          localContainer.innerHTML = container.innerHTML;
        });
    }

    if (form) {
      const inputs = form.querySelectorAll("input");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
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
