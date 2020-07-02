const slidesContainer = document.querySelectorAll('.desktop-section__img-container');
const slidesFirst = document.querySelectorAll('.slides-first');
const slidesSecond = document.querySelectorAll('.slides-second');
const slidesThird = document.querySelectorAll('.slides-third');
const arrows = document.querySelectorAll('.arrow');
const arrowLeft = document.querySelectorAll('.fa-arrow-left');
const arrowRight = document.querySelectorAll('.fa-arrow-right');
const btn = document.querySelectorAll('.desktop-section__btn');
const para = document.querySelectorAll('.desktop-section__para-container');

const events = ['load', 'resize'];
for(let event of events){
    window.addEventListener(event, () => {
        slidesFirst.forEach((slide, index) => {
            slide.style.left = `${100 * index}%`;
        });
        slidesSecond.forEach((slide, index) => {
            slide.style.left = `${100 * index}%`;
        });
        slidesThird.forEach((slide, index) => {
            slide.style.left = `${100 * index}%`;
        });
    });
}

function moveToSlide(slidesContainer, currentSlide, targetSlide){
    slidesContainer.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

arrowRight.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const currentSlide = slidesContainer[index].querySelectorAll('.current-slide')[0];
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(slidesContainer[index], currentSlide, nextSlide);
    });
});

arrowLeft.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const currentSlide = slidesContainer[index].querySelectorAll('.current-slide')[0];
        const previousSlide = currentSlide.previousElementSibling;
        moveToSlide(slidesContainer[index], currentSlide, previousSlide);
    });
});

btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        para[index].classList.toggle('para-container--transform');
        slidesContainer[index].classList.toggle('img-container--transform');
        arrows[index].classList.toggle('img-container--transform');
    });
});


