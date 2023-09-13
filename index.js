let Circle;
document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
});
const min = (a, b) => a > b ? b : a;


window.addEventListener('scroll', () => {
    const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (Circle) {
        Circle.style.transform = `scale(${1 + min(posTop / 500, 2)})`;
    }
})