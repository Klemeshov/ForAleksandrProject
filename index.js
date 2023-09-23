let Circle;
let Cards;
document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
    Cards = document.getElementById('cards');
});
const min = (a, b) => a > b ? b : a;


window.addEventListener('scroll', () => {
    const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (Circle) {
        Circle.style.transform = `scale(${1 + min(posTop / 500, 1.5)})`;
    }
    if (Cards) {
        Cards.style.transform = `translate(0, ${min(posTop/5, 200)}px)`;
    }
})