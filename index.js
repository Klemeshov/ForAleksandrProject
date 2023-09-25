let Circle;
let Cards;
let Window;
let Icons;
let LastWordBorder;
document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
    Cards = document.getElementById('cards');
    Icons = document.getElementById('icons');
    Window = document.getElementById('window');
    LastWordBorder = document.getElementById('lastWordBorder');

    setTimeout(() => {
        if(LastWordBorder){
            LastWordBorder.style.transform = `rotate(-1.8deg)`;
        }
    }, 2000)
});
const min = (a, b) => a > b ? b : a;


window.addEventListener('scroll', () => {
    const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (Circle) {
        Circle.style.transform = `scale(${1 + min(posTop / 500, 1.5)})`;
    }
    if (Window) {
        Window.style.transform = `translate(0, -${min(posTop / 3, 400)}px)`;
    }
    if (Cards) {
        Cards.style.transform = `translate(0, ${min(posTop / 5, 200)}px)`;
    }
    if (Icons) {
        Icons.style.transform = `translate(0, ${min(posTop / 4, 200)}px)`;
    }
})