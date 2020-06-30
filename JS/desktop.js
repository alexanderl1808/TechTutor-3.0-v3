const slidesContainer = document.querySelector('.desktop-section__img-container');
const slides = document.querySelectorAll('.desktop-section__img-price-container');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');

slides.forEach((slide, index) => {
    slide.style.left = `${100 * index}%`;
});

function moveToSlide(slidesContainer, currentSlide, targetSlide){
    slidesContainer.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

arrowRight.addEventListener('click', () => {
    const currentSlide = slidesContainer.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(slidesContainer, currentSlide, nextSlide);
});

arrowLeft.addEventListener('click', () => {
    const currentSlide = slidesContainer.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    moveToSlide(slidesContainer, currentSlide, previousSlide);
});

