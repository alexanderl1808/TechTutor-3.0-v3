const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const pointer = document.querySelector('.pointer');
const paraContainer = document.querySelectorAll('.para-container--animate');

setInterval(() => pointer.classList.toggle('pointer--animate'), 500);

burger.addEventListener('click', () => {
    nav.classList.toggle('navbar--animate');
});

const eventsAnimation = ['scroll', 'load']; // Events is already declared
for(let event of eventsAnimation){
    window.addEventListener(event, () => {
        paraContainer.forEach(tb => {
            let textPosition = tb.getBoundingClientRect().top;
            let screenPosition = window.innerHeight;
            if(textPosition < screenPosition/1.6){
                tb.classList.add('para-container--animate-toggle');
                tb.querySelector('p').classList.add('para--animate-toggle');
            } 
        });
    });
}

