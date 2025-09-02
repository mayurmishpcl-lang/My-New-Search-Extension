document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchURL, "_blank");
    } else {
      alert("Please enter something to search!");
    }
  });

  // Optional: allow Enter key
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
});
