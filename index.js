let Circle;
let Cards;
let Window;
let Icons;
let LastWordBorder;
let CardCreatedNumber;
let NumberOfSales;
let Income;
let LastPageCardsContainer;
let LastPageCards;
let NumberOfCards;
let LeftArrow;
let RightArrow;

document.addEventListener("DOMContentLoaded", () => {
    Circle = document.getElementById('circle');
    Cards = document.getElementById('cards');
    Icons = document.getElementById('icons');
    Window = document.getElementById('window');
    LastWordBorder = document.getElementById('lastWordBorder');
    CardCreatedNumber = document.getElementById('cardCreatedNumber');
    NumberOfSales = document.getElementById('numberOfSales');
    Income = document.getElementById('income');
    LastPageCardsContainer = document.getElementById('lastPageCards');
    NumberOfCards = document.getElementById('numberOfCards');
    LeftArrow = document.getElementById('leftArrow');
    RightArrow = document.getElementById('rightArrow');
    LastPageCards = document.getElementsByClassName('lastPage__card');

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
        Cards.style.transform = `translate(0, -${min(posTop / 4, 200)}px)`;
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

let index = 0;
const maxIndex = 5;
let isAnimation = false;

const onPlus = () => {
    if (index < maxIndex && !isAnimation) {
        isAnimation = true;
        LastPageCardsContainer.scrollBy({
            left: 660,
            behavior: 'smooth'
        });
        index += 1;
        LastPageCards[index].className = 'lastPage__card';
        NumberOfCards.innerText = `${index + 1}/${maxIndex + 1}`
        if (index === maxIndex) {
            RightArrow.className = 'lastPage__nav';
            RightArrow.firstChild.src = `assets/svg/disable-arrow-button.svg?t=${new Date().getTime()}`;
        }
        if (index > 0) {
            LeftArrow.className = 'lastPage__nav lastPage__navActive';
            LeftArrow.firstChild.src = `assets/svg/arrow-button.svg?t=${new Date().getTime()}`;
        }
        setTimeout(() => {
            isAnimation = false
        }, 400);
    }
}

const onMinus = () => {
    if (index > 0 && !isAnimation) {
        isAnimation = true;
        LastPageCardsContainer.scrollBy({
            left: -660,
            behavior: 'smooth'
        });
        LastPageCards[index].className = 'lastPage__card lastPage__smallCard';
        index -= 1;
        NumberOfCards.innerText = `${index + 1}/${maxIndex + 1}`
        if (index === 0) {
            LeftArrow.className = 'lastPage__nav';
            LeftArrow.firstChild.src = 'assets/svg/disable-arrow-button.svg';
        }
        if (index < maxIndex) {
            RightArrow.className = 'lastPage__nav lastPage__navActive';
            RightArrow.firstChild.src = 'assets/svg/arrow-button.svg';
        }
        setTimeout(() => {
            isAnimation = false
        }, 400);
    }
}