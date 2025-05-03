export function initCourseSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("courses");
    const searchButton = document.getElementById("search-button");

    const courseCards = document.querySelectorAll(".course-card");

    function filterCourses() {
      const searchValue = searchInput?.value.toLowerCase().trim();
      courseCards.forEach((card) => {
        const courseName = card
          .querySelector(".course-name")
          ?.textContent?.toLowerCase();
        if (searchValue === "" || courseName?.includes(searchValue)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    }

    searchButton?.addEventListener("click", filterCourses);

    searchInput?.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        filterCourses();
      }
    });
  });
}
