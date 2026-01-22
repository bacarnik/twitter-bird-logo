document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".top-search-input");
  const topicCards = document.querySelectorAll(".topic-card");

  const filterTopics = () => {
    const query = searchInput.value.toLowerCase().trim();

    topicCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        // Pokaži z animacijo
        card.style.display = "block";
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.transition = "opacity 0.3s";
          card.style.opacity = "1";
        }, 10);
      } else {
        // Skrij z animacijo
        card.style.transition = "opacity 0.3s";
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.display = "none";
        }, 300); // počakaj da animacija konča
      }
    });
  };

  // Real-time filtriranje med tipkanjem
  searchInput.addEventListener("input", filterTopics);
});