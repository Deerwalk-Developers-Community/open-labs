export function initCollegeSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("colleges");
    const searchButton = document.getElementById("search-button");

    const collegeCards = document.querySelectorAll("#college-container");

    function filterColleges() {
      const searchValue = searchInput?.value.toLowerCase().trim();
      collegeCards.forEach((card) => {
        const collegeName = card
          .querySelector("h3")
          ?.textContent?.toLowerCase();
        console.log(collegeName);
        if (searchValue === "" || collegeName?.includes(searchValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchButton?.addEventListener("click", filterColleges);

    searchInput!.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        filterColleges();
      }
    });

    // searchInput!.addEventListener("input", filterColleges);
  });
}
