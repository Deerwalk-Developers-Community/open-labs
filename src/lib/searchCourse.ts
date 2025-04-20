export function initCourseSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("courses");
    const searchButton = document.getElementById("search-button");

    const courseCard = document.querySelectorAll("#course-container");

    function filterCourses() {
      const searchValue = searchInput?.value.toLowerCase().trim();
      courseCard.forEach((card) => {
        const courseName = card.querySelector("h3")?.textContent?.toLowerCase();
        console.log(courseName);
        if (searchValue === "" || courseName?.includes(searchValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchButton?.addEventListener("click", filterCourses);

    searchInput!.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        filterCourses();
      }
    });

    // searchInput!.addEventListener("input", filterCourses);
  });
}
