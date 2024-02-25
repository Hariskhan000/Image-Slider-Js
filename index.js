const slides = document.querySelectorAll(".slides");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const gonext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};

const goprev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
  }
};
