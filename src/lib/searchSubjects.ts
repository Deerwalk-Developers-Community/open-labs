export function initSubjectSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("subjects");
    const searchButton = document.getElementById("search-button");

    const subjectCard = document.querySelectorAll(".subject-card");

    function filterSubjects() {
      const searchValue = searchInput?.value.toLowerCase().trim();
      console.log(searchValue);
      subjectCard.forEach((card) => {
        const subjectName = card
          .querySelector(".subject-name")
          ?.textContent.toLowerCase();
        console.log(subjectName);
        if (searchValue === "" || subjectName?.includes(searchValue)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
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
