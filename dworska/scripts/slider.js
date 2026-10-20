const slider = document.querySelector('.product-grid');
const btnLeft = document.getElementById('slide-left');
const btnRight = document.getElementById('slide-right');

// ile px przewijamy na kliknięcie
const scrollAmount = 350;

btnLeft.addEventListener('click', () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
