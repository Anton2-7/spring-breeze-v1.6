



var sliderDots1 = document.querySelectorAll('.sl__dot-1')
sliderDots1.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderDots1.forEach(item => item.classList.remove('active-dot-1'))
        sliderDots1[index].classList.add('active-dot-1')
    })
})



const someSlider2 = new SomeSlider({
    rootSelector: '.sl-2',
    slideSelector: '.sl-img-2',
    barSelector: '.sl__line-2',

})

const someSlider3 = new SomeSlider({
    btnSelector: '.Slider3__btn',
    rootSelector: '.sl-3',
    slideSelector: '.sl-img-3',
    barSelector: '.sl__line-3',
    dotSelector: '.sl__dot-3'
})


const someSlider4 = new SomeSlider({

    rootSelector: '.sl-4',
    slideSelector: '.sl-img-4',
    barSelector: '.sl__line-4',
})

let dotsBtn1 = document.querySelectorAll(".sl__dot-1")
let dolls = document.querySelectorAll(".dolls")

dotsBtn1.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        dolls.forEach(item => item.classList.remove("slider1Out"))
        dolls[index].classList.add("slider1Out")
    })
})


// ----------------------------Бургер меню, закрытие и открытие окна-------------------------

let burgerMenu = document.querySelector('.header__burger-menu')
let burgerNav = document.querySelector('.header__burger-nav')
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerNav.classList.toggle('open');
    // console.log(burgerNav.classList)
    if (document.querySelector('.header__burger-nav').classList.contains('open')) {
        document.querySelector('.body').classList.add('overflow-none')
    }
    else {
        document.querySelector('.body').classList.remove('overflow-none')
    }
})


// -------------------------------------------------------------------------------------------


// ------------------------------------Обработка hover на мобильных устройстах на иконках в footer и логотипов компаний--------
const textFooterWrapper = document.querySelector(".footer__text-wrapper"),
 textFooter = document.querySelector(".footer__red-cat-name"),
 footerRedCat = document.querySelector(".footer__red-cat-logo"),
 footerRedCatLogo = document.querySelector(".footer__red-cat-logo"),
 imgSource = document.querySelector(".footer__red-cat-logo"),
 tgFooter = document.querySelector(".tg__footer-icon"),
 facebkFooter = document.querySelector(".fc__footer-icon"),
 instaFooter = document.querySelector(".in__footer-icon"),
 vkFooter = document.querySelector(".vk__footer-icon"),
 image1 = document.querySelectorAll(".clients__logos-img-1"),
 image2 = document.querySelectorAll(".clients__logos-img-2"),
 image3 = document.querySelectorAll(".clients__logos-img-3"),
 image4 = document.querySelectorAll(".clients__logos-img-4"),
 btnUp = document.querySelector(".btn__pageUp"),
 tgHeader = document.querySelector(".mentor__connect-btn")
 tgArrowBtn = document.querySelector(".btn-mentor-path")

tgHeader.addEventListener("touchstart", function(){
   tgHeader.style.color = "#A58069"
   tgHeader.style.background = "#FFF"
   tgArrowBtn.style.fill = "#A58069"

})

tgHeader.addEventListener("touchend", function(e) {
   if (e.cancelable) {
       e.preventDefault();
       tgHeader.style.color = "#FFF"
       tgHeader.style.background = "none"
       tgArrowBtn.style.fill = "#FFF"
          window.location.href = "https://t.me/tvtumanova"

   }
})



btnUp.addEventListener("touchstart", function () {
    btnUp.setAttribute("src", "./images/btn-up-page-hover.svg")
})

btnUp.addEventListener("touchend", function (e) {
    if (e.cancelable) {
        e.preventDefault();
    }    btnUp.setAttribute("src", "./images/btn-up-page.svg")
    window.location.href = "#part-1"


})

textFooterWrapper.addEventListener("mouseenter", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

tgFooter.addEventListener("touchstart", function () {
    tgFooter.setAttribute("src", "./images/TG_hover.svg")
})

tgFooter.addEventListener("touchend", function (e) {
    e.preventDefault()
    tgFooter.setAttribute("src", "./images/Telegram.svg")
    window.location.href = "https://t.me/tvtumanova"


})



facebkFooter.addEventListener("touchstart", function () {
    facebkFooter.setAttribute("src", "./images/Facebook_hover.svg")

})

image1.forEach((item) => {
    item.addEventListener("touchstart", function () {
        item.setAttribute("src", "./images/MBM-logo-dark.svg")

    })
})

image1.forEach((item) => {
    item.addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        item.setAttribute("src", "./images/MBM-logo.svg")
    })
})

image2.forEach((item) => {
    item.addEventListener("touchstart", function () {
        item.setAttribute("src", "./images/Росконгрес-dark.svg")
    })
})


image2.forEach((item) => {
    item.addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        item.setAttribute("src", "./images/Росконгресс.svg")
    })
})

image3.forEach((item) => {
    item.addEventListener("touchstart", function () {
        item.setAttribute("src", "./images/Департамент-red.svg")
    })
})

image3.forEach((item) => {
    item.addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        item.setAttribute("src", "./images/Департамент.svg")
    })
})

image4.forEach((item) => {
    item.addEventListener("touchstart", function () {
        item.setAttribute("src", "./images/бизнес-уикенд-black.svg")
    })
})

image4.forEach((item) => {
    item.addEventListener("touchend", function (e) {

        if (e.cancelable) {
            e.preventDefault();
        }
        item.setAttribute("src", "./images/бизнес-икенд.svg")
    })
})

facebkFooter.addEventListener("touchend", function (e) {
    e.preventDefault()
    facebkFooter.setAttribute("src", "./images/Facebook.svg")
    window.location.href = "https://www.facebook.com/tvtumanova"


})

instaFooter.addEventListener("touchstart", function () {
    instaFooter.setAttribute("src", "./images/INSHOVER.svg")
})

instaFooter.addEventListener("touchend", function (e) {
    e.preventDefault()
    instaFooter.setAttribute("src", "./images/Instagram.svg")
    window.location.href = "https://www.instagram.com/tvtumanova"

})


vkFooter.addEventListener("touchstart", function () {
    vkFooter.setAttribute("src", "./images/VK_hover.svg")
})

vkFooter.addEventListener("touchend", function (e) {
    e.preventDefault()
    vkFooter.setAttribute("src", "./images/VK.svg")
    window.location.href = "https://vk.com/tvtumanova"


})



textFooterWrapper.addEventListener("touchstart", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

textFooterWrapper.addEventListener("mouseleave", function (e) {
    e.preventDefault()
    textFooter.style.color = "#A58069"
    footerRedCatLogo.style.setProperty("color", "#A58069")
    imgSource.setAttribute("src", "./images/Red-Cat_logo.svg")
})


textFooterWrapper.addEventListener("touchend", function (e) {
    e.preventDefault()
    textFooter.style.color = "#A58069"
    footerRedCatLogo.style.setProperty("color", "#A58069")
    imgSource.setAttribute("src", "./images/Red-Cat_logo.svg")
    window.location.href = "http://redcat.moscow/files/welcome-pres-redcat.pdf"

})


const problemSolving1 = document.querySelector(".problem-solving__item-1"),
    problemSolving2 = document.querySelector(".problem-solving__item-2"),
    problemSolving3 = document.querySelector(".problem-solving__item-3"),
    problemSolving4 = document.querySelector(".problem-solving__item-4"),
    problemSolving5 = document.querySelector(".problem-solving__item-5")

const pS1 = problemSolving1,
    pS2 = problemSolving2,
    pS3 = problemSolving3,
    pS4 = problemSolving4,
    pS5 = problemSolving5


// -------------------------------------Hover-------------------------------------

function addHoverListeners(element, className) {
    element.addEventListener("mouseover", function () {
        element.classList.add(className);
    });

    element.addEventListener("mouseout", function () {
        element.classList.remove(className);
    });
}

addHoverListeners(pS1, "problem-solving__touch");
addHoverListeners(pS2, "problem-solving__touch");
addHoverListeners(pS3, "problem-solving__touch");
addHoverListeners(pS4, "problem-solving__touch");
addHoverListeners(pS5, "problem-solving__touch");


// ---------------------------------------Touch---------------------------------------


function addTouchListeners(element, className) {
    element.addEventListener("touchstart", function () {
        element.classList.add(className);
    });

    element.addEventListener("touchend", function (e) {
        if (e.cancelable)
            e.preventDefault();
        element.classList.remove(className);
    });
}

addTouchListeners(problemSolving1, "problem-solving__touch");
addTouchListeners(problemSolving2, "problem-solving__touch");
addTouchListeners(problemSolving3, "problem-solving__touch");
addTouchListeners(problemSolving4, "problem-solving__touch");
addTouchListeners(problemSolving5, "problem-solving__touch");

// -----------------------------------------------------------------------------------------------------------------------------

// -----------------------------Отработка кнопок слайдеров (стрелки, работа с точкой в центре кнопок и анимации прямых линий)---


const stickSVG2 = document.querySelectorAll(".next-stick-svg-2"),
    stickSVG4 = document.querySelectorAll(".next-stick-svg-4"),
    stickPrevSVG2List = document.querySelectorAll(".prev-stick-svg-2")

const slider1 = document.querySelector(".sl__line-2"),
    slider2 = document.querySelector(".sl__line-2")

const slidesSl1 = document.querySelectorAll(".sl-img-1"),
    slidesSl2 = document.querySelectorAll(".sl-img-2"),
    slidesSl3 = document.querySelectorAll(".sl-img-3"),
    slidesSl4 = document.querySelectorAll(".sl-img-4")

const btnSl2 = document.querySelectorAll(".btn-sl-2")
const Line1 = document.querySelector(".sl")

const dotLineControl = document.querySelectorAll("spirit-int__descr")
const spiritIn = document.querySelector("spirit-int__descr::before")

const nextBtnSl2 = document.querySelectorAll(".sl__btn-next-2"),
    prevBtnSl2 = document.querySelectorAll(".sl__btn-prev-2"),
    nextBtnSl3 = document.querySelectorAll(".sl__btn-next-3"),
    prevBtnSl3 = document.querySelectorAll(".sl__btn-prev-3"),
    nextBtnSl4 = document.querySelectorAll(".sl__btn-next-4"),
    prevBtnSl4 = document.querySelectorAll(".sl__btn-prev-4")


nextBtnSl2.forEach(btn => {
    btn.addEventListener('click', () => { someSlider2.next() })
})

nextBtnSl2.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stickSVG2.forEach(item => {
            item.classList.remove('nstick-2-out')
            item.classList.add('nstick-2')
            circle.forEach((item) => item.classList.remove("circle1-transition-out", "circle1-transition", "circle1-transition-prev-out"))
            circle.forEach((item) => item.classList.add("circle1-transition"))
        })

    })
    btn.addEventListener('mouseout', () => {
        stickSVG2.forEach(item => {
            circle.forEach((item) => item.classList.add("circle1-transition-out"))
            circle.forEach((item) => item.classList.remove("circle1-transition"))
            item.classList.remove('nstick-2')
            item.classList.add('nstick-2-out')
        }
        )
    })
})

prevBtnSl2.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stickPrevSVG2List.forEach(item => {
            item.classList.remove('pstick-2-out')
            item.classList.add('pstick-2')
            circle.forEach((item) => item.classList.remove("circle1-transition-prev-out", "circle1-transition-out", "circle1-transition"))
            circle.forEach((item) => item.classList.add("circle1-transition-prev"))
        })

    })
    btn.addEventListener('mouseout', () => {
        stickPrevSVG2List.forEach(item => {
            item.classList.remove('pstick-2')
            item.classList.add('pstick-2-out')
            circle.forEach((item) => item.classList.add("circle1-transition-prev-out"))
            circle.forEach((item) => item.classList.remove("circle1-transition-prev"))
        }
        )
    })
})


nextBtnSl4.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stickSVG4.forEach(item => {
            item.classList.remove('nstick-4-out')
            item.classList.add('nstick-4')
            circle2.forEach((item) => item.classList.remove("circle1-transition-out", "circle1-transition", "circle1-transition-prev-out"))
            circle2.forEach((item) => item.classList.add("circle1-transition"))
        })

    })
    btn.addEventListener('mouseout', () => {
        stickSVG4.forEach(item => {
            circle2.forEach((item) => item.classList.add("circle1-transition-out"))
            circle2.forEach((item) => item.classList.remove("circle1-transition"))
            item.classList.remove('nstick-4')
            item.classList.add('nstick-4-out')
        }
        )
    })
})

prevBtnSl4.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stickPrevSVG4.forEach(item => {
            item.classList.remove('pstick-2-out')
            item.classList.add('pstick-4')
            circle2.forEach((item) => item.classList.remove("circle1-transition-prev-out", "circle1-transition-out", "circle1-transition"))
            circle2.forEach((item) => item.classList.add("circle1-transition-prev"))
        })

    })
    btn.addEventListener('mouseout', () => {
        stickPrevSVG4.forEach(item => {
            item.classList.remove('pstick-4')
            item.classList.add('pstick-2-out')
            circle2.forEach((item) => item.classList.add("circle1-transition-prev-out"))
            circle2.forEach((item) => item.classList.remove("circle1-transition-prev"))
        }
        )
    })
})


prevBtnSl2.forEach(btn => {
    btn.addEventListener('click', () => { someSlider2.prev(); })
})

nextBtnSl3.forEach(btn => {
    btn.addEventListener('click', () => { someSlider3.next() })
})
prevBtnSl3.forEach(btn => {
    btn.addEventListener('click', () => { someSlider3.prev() })
})
nextBtnSl4.forEach(btn => {
    btn.addEventListener('click', () => { someSlider4.next() })
})
prevBtnSl4.forEach(btn => {
    btn.addEventListener('click', () => { someSlider4.prev() })
})


const sliderDots2 = document.querySelectorAll('.sl__dot-2');
const sliderDots = document.querySelectorAll('.sl__dot')
const sliderImages = document.querySelectorAll('.img-1')

function thisSlide1(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        thisSlide1(sliderCount);
        sliderImages.forEach(item => item.classList.remove('sl__img--active'))
        sliderImages[index].classList.add('sl__img--active')
    })
})


function thisSlide2(index) {
    sliderDots2.forEach(item => item.classList.remove('active-dot-2'));
    sliderDots2[index].classList.add('active-dot-2');
}

sliderDots2.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        thisSlide2(sliderCount);
        sliderImages.forEach(item => item.classList.remove('sl__img--active'))
        sliderImages[index].classList.add('sl__img--active')
    })
})


// --------------------------------------------------------------------------------------------------------------------
// Отработка наведения  курсором и касания пальцем (сенсор) секции "Решения задач" 
const blockHover1 = document.querySelector(".problem-solving__item-1"),

    blockHover2 = document.querySelector(".problem-solving__item-2"),

    blockHover3 = document.querySelector(".problem-solving__item-3"),

    blockHover4 = document.querySelector(".problem-solving__item-4"),

    blockHover5 = document.querySelector(".problem-solving__item-5"),

    straightLine1 = document.querySelector("#progress-bar-i-1"),

    straightLine2 = document.querySelector("#progress-bar-i-2"),

    straightLine3 = document.querySelector("#progress-bar-i-3"),

    straightLine4 = document.querySelector("#progress-bar-i-4"),

    straightLine5 = document.querySelector("#progress-bar-i-5"),

    slPageObj1 = document.querySelectorAll(".img")

function addEventListenersToBlocks(block, line) {
    block.addEventListener("mouseover", function () {
        line.style.setProperty("opacity", 1);
    });

    block.addEventListener("mouseout", function () {
        line.style.setProperty("opacity", 0);
    });

    block.addEventListener("touchstart", function () {
        line.style.setProperty("opacity", 1);
    });

    block.addEventListener("touchend", function () {
        line.style.setProperty("opacity", 0);
    });
}

addEventListenersToBlocks(blockHover1, straightLine1);
addEventListenersToBlocks(blockHover2, straightLine2);
addEventListenersToBlocks(blockHover3, straightLine3);
addEventListenersToBlocks(blockHover4, straightLine4);
addEventListenersToBlocks(blockHover5, straightLine5);

// --------------------------------------------------------------------------

const menuLi = document.querySelectorAll(".sl__dot"),
    sliderText = document.querySelectorAll('.sl-text__item')

// --------------------------------Кнопка вверх------------------------------
let isFirstLoad = true;

window.onscroll = function btnUp() {
    var scrolled = window.scrollY || document.documentElement.scrollTop;

    if (scrolled > 700 && !isFirstLoad) {
        // Если страница прокручена вниз более, чем на 700 пикселей и это не первая загрузка,
        // выводим кнопку на экран
        document.querySelector('.btn__page').style.display = 'block';
    } else {
        // В противном случае убираем кнопку с экрана
        document.querySelector('.btn__page').style.display = 'none';
    }

    // После первой загрузки устанавливаем флаг в false
    isFirstLoad = false;
}
// --------------------------------------------------------------------------

// -----------------Закрываем/открываем окно меню при нажатии на пункт меню--
const menuLists = document.querySelectorAll(".header__burger-list");
const windowMenu = document.querySelector('.open');

for (a = 0; a < menuLists.length; a++) {
    menuLists[a].addEventListener("click", function () {
        burgerNav.classList.toggle('open');
        document.querySelector('.body').classList.remove('overflow-none')
        burgerMenu.classList.toggle('active');


    })
}
// -------------------------------------------------------------------------------