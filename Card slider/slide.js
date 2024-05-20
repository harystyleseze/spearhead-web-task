document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".slidable-cards");
  const dots = document.querySelectorAll(".nav-dot");
  const cardCount = document.querySelectorAll(".explore-card").length;
  const dotCount = dots.length;
  let currentCardIndex = 0;

  const slideToIndex = (index) => {
    const newIndex = index < 0 ? dotCount - 1 : index % dotCount;
    const visibleCardIndices = calculateVisibleCardIndices(newIndex);
    cardsContainer.scrollTo({
      left: (cardsContainer.clientWidth / 4) * visibleCardIndices[0],
      behavior: "smooth",
    });
    currentCardIndex = newIndex;
    updateActiveDot();
  };

  const calculateVisibleCardIndices = (dotIndex) => {
    const indices = [];
    for (let i = 0; i < 4; i++) {
      indices.push((dotIndex + i) % cardCount);
    }
    return indices;
  };

  const updateActiveDot = () => {
    const activeIndex = currentCardIndex % dotCount;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => slideToIndex(index));
  });

  setInterval(() => {
    slideToIndex(currentCardIndex + 1);
  }, 4000);

  slideToIndex(0); // Start with the first dot
});
