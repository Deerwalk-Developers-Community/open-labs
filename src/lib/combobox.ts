export function initCombobox() {
  const input = document.getElementById("combobox-input");
  const dropdown = document.getElementById("combobox-dropdown");
  const items = dropdown?.querySelectorAll("li");
  const submitBtn = document.getElementById("submitBtn");

  if (!input || !dropdown || !items || !submitBtn) return;

  input.addEventListener("focus", () => {
    dropdown.classList.remove("hidden");
  });

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    items.forEach((item) => {
      const text = item.textContent?.toLowerCase() || "";
      if (text.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    dropdown.classList.remove("hidden");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      input.value = item.getAttribute("data-value") || "";
      dropdown.classList.add("hidden");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !input.contains(e.target as Node) &&
      !dropdown.contains(e.target as Node)
    ) {
      dropdown.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdown.classList.add("hidden");
    }
  });

  submitBtn.addEventListener("click", () => {
    if (input.value === "") {
      alert("Please choose a university");
      input.focus();
    } else {
      window.location.assign(
        `/open-labs/universities/${input.value.toLowerCase()}`,
      );
    }
  });
}
