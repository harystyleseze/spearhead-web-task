document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".card");
  const popupImage = document.getElementById("popupImage");
  let currentIndex = 0;
  const displayTime = 4000;

  const showPopup = () => {
    popup.style.display = "flex";
    setTimeout(() => slideToIndex(currentIndex), displayTime);
  };

  const hidePopup = () => {
    popup.style.display = "none";
  };

  const slideToIndex = (index) => {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === index) {
        card.classList.add("active");
        popupImage.src = card.getAttribute("data-image");
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentIndex = (index + 1) % cards.length;
    setTimeout(() => slideToIndex(currentIndex), displayTime);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      slideToIndex(index);
    });
  });

  closePopup.addEventListener("click", hidePopup);

  setTimeout(showPopup, 3000); // Show the popup after 3 seconds
});
