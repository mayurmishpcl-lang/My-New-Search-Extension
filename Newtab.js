const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchURL, '_blank');
  } else {
    alert('Please enter something to search!');
  }
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});
