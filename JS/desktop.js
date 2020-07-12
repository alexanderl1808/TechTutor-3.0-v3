const slidesContainer = document.querySelectorAll('.desktop-section__img-container');
const slidesFirst = document.querySelectorAll('.slides-first');
const slidesSecond = document.querySelectorAll('.slides-second');
const slidesThird = document.querySelectorAll('.slides-third');
const arrows = document.querySelectorAll('.fa-arrow-left, .fa-arrow-right');
const arrowLeft = document.querySelectorAll('.fa-arrow-left');
const arrowRight = document.querySelectorAll('.fa-arrow-right');
const btn = document.querySelectorAll('.desktop-section__btn');
const para = document.querySelectorAll('.desktop-section__para-container');
const imgPrceCont = document.querySelectorAll('.desktop-section__img-price-container');

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
        if(index === 0){
            slidesFirst.forEach(imgPrice => {
                imgPrice.classList.toggle('img-container__img--transform');
            });
            for(let i = 0; i < 2; i++){
                arrows[i].classList.toggle('arrow--transform');
            }
        } else if(index === 1){
            slidesSecond.forEach(imgPrice => {
                imgPrice.classList.toggle('img-container__img--transform');
            });
            for(let i = 2; i < 4; i++){
                arrows[i].classList.toggle('arrow--transform');
            }
        } else{
            slidesThird.forEach(imgPrice => {
                imgPrice.classList.toggle('img-container__img--transform');
            });
            for(let i = 4; i < 6; i++){
                arrows[i].classList.toggle('arrow--transform');
            }
        }
    });
});






