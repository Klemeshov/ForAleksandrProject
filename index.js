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
let Header;
let Modal
let ModalBg

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
    Header = document.getElementById('header');
    Modal = document.getElementById('modal');
    ModalBg = document.getElementById('modalBg');
    LastPageCards = document.getElementsByClassName('lastPage__card');
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.classList.remove("error");
        });
        input.addEventListener(
            "invalid",
            () => {
                input.classList.add("error");
            },
            false
        );
        input.addEventListener("blur", function () {
            input.checkValidity();
        });
    });
    const whiteBlock = document.getElementById("whiteBlock");
    whiteBlock.style.transition = '1s'
    setTimeout(() => {
        whiteBlock.style.opacity = '0';
    }, 500)


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
        Circle.style.transform = `scale(${1 + min(posTop / 400, 1.5)})`;
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

window.addEventListener('wheel', (e) => {
    const isTop = e.deltaY < 0;
    if (Header)
        if (isTop) {
            Header.className = 'header header__show';
        } else {
            Header.className = 'header';
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


const openModal = () => {
    Modal.style.right = '0';
    ModalBg.style.opacity = '0.5';
    ModalBg.style.pointerEvents = 'auto';
}

const closeModal = () => {
    Modal.style.right = '-350px';
    ModalBg.style.opacity = '0';
    ModalBg.style.pointerEvents = 'none';
}
