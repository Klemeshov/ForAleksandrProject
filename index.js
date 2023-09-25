let Circle;
let Cards;
let Window;
let Icons;
let LastWordBorder;
let CardCreatedNumber;
let NumberOfSales;
let Income;

document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
    Cards = document.getElementById('cards');
    Icons = document.getElementById('icons');
    Window = document.getElementById('window');
    LastWordBorder = document.getElementById('lastWordBorder');
    CardCreatedNumber = document.getElementById('cardCreatedNumber');
    NumberOfSales = document.getElementById('numberOfSales');
    Income = document.getElementById('income');

    setTimeout(() => {
        if (LastWordBorder) {
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

let CardsCreatedValue = 50;
let NumberOfSalesValue = 75;

const onInputRangeChange = (element) => {
    const percent = (element.value - element.min) / (element.max - element.min) * 100
    element.style.background = `linear-gradient(90deg, rgba(238, 63, 80, 1) ${percent}%, rgba(138, 138, 138, 1) ${percent}%)`
}

onParametersChange = () => {
    Income.innerText = `${CardsCreatedValue * NumberOfSalesValue * 70} ₽`
}

const onCardsCreatedChange = (element) => {
    onInputRangeChange(element);
    CardsCreatedValue = element.value;
    onParametersChange();
    CardCreatedNumber.innerText = element.value;
    CardCreatedNumber.style.left = `${3 + (element.value - 1) * 7.31}px`;
}

const onNumberOfSalesChange = (element) => {
    onInputRangeChange(element);
    NumberOfSalesValue = element.value;
    onParametersChange();
    NumberOfSales.innerText = element.value;
    NumberOfSales.style.left = `${3 + (element.value - 1) * 4.857}px`;
}