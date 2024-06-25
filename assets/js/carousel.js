document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
  
    function showImage(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showImage(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showImage(currentIndex);
    });
  });