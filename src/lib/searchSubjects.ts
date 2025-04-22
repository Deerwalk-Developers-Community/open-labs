export function initSubjectSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("subjects");
    const searchButton = document.getElementById("search-button");

    const courseCard = document.querySelectorAll("#subject-container");

    function filterSubjects() {
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

    searchButton?.addEventListener("click", filterSubjects);

    searchInput!.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        filterSubjects();
      }
    });

    // searchInput!.addEventListener("input", filterSubjects);
  });
}
