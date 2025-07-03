export function initCollegeSearch() {
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("colleges");
    const searchButton = document.getElementById("search-button");

    const collegeCards = document.querySelectorAll(".college-card");

    function filterColleges() {
      const searchValue = searchInput?.value.toLowerCase().trim();
      collegeCards.forEach((card) => {
        const collegeName = card
          .querySelector(".college-name")
          ?.textContent?.toLowerCase();
        if (searchValue === "" || collegeName?.includes(searchValue)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
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
