let Circle;
let Cards;
let Window;
document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
    Cards = document.getElementById('cards');
    Window = document.getElementById('window');
});
const min = (a, b) => a > b ? b : a;


window.addEventListener('scroll', () => {
    const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (Circle) {
        Circle.style.transform = `scale(${1 + min(posTop / 500, 1.5)})`;
    }
    if (Window) {
        Window.style.transform = `translate(0, -${min(posTop / 2, 400)}px)`;
    }
    if (Cards) {
        Cards.style.transform = `translate(0, ${min(posTop / 5, 200)}px)`;
    }
})