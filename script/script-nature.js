const burgerMenu = document.querySelector('.header__burger-menu'),
 burgerNav = document.querySelector('.header__burger-nav'),
 textFooterWrapper = document.querySelector(".footer__text-wrapper"),
 textFooter = document.querySelector(".footer__red-cat-name"),
 footerRedCat = document.querySelector(".footer__red-cat-logo"),
 footerRedCatLogo = document.querySelector(".footer__red-cat-logo"),
 imgSource = document.querySelector(".footer__red-cat-logo"),
 tgFooter = document.querySelector(".tg__footer-icon"),
 facebkFooter = document.querySelector(".fc__footer-icon"),
 instaFooter = document.querySelector(".in__footer-icon"),
 vkFooter = document.querySelector(".vk__footer-icon"),
 btnUp = document.querySelector(".btn__pageUp")



 btnUp.addEventListener("touchstart", function () {
    btnUp.setAttribute("src", "./images/btn-up-page-hover.svg")
})

btnUp.addEventListener("touchend", function (e) {
    if (e.cancelable) {
        e.preventDefault();
    }    btnUp.setAttribute("src", "./images/btn-up-page.svg")
    window.location.href = "#header"


})



tgFooter.addEventListener("touchstart", function () {
    tgFooter.setAttribute("src", "./images/TG_hover.svg")
})

tgFooter.addEventListener("touchend", function (e) {
    e.preventDefault()
    tgFooter.setAttribute("src", "./images/Telegram.svg")
    window.location.href = "https://t.me/tvtumanova"

})

facebkFooter.addEventListener("touchstart",  function () {
    
    facebkFooter.setAttribute("src", "./images/Facebook_hover.svg")
} )


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



burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerNav.classList.toggle('open');
    if (document.querySelector('.header__burger-nav').classList.contains('open')) {
        document.querySelector('.body').classList.add('overflow-none')
    }
    else {
        document.querySelector('.body').classList.remove('overflow-none')
    }
})

textFooterWrapper.addEventListener("mouseenter", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

textFooterWrapper.addEventListener("touchstart", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

textFooterWrapper.addEventListener("mouseleave", function () {
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


// ---------------------------Генерация и подсветка содержания----------------------------------------------------

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const elHeaders = document.querySelectorAll('.sec-4__title');
    let headerId = '';
    for (let i = elHeaders.length - 1; i >= 0; i--) {
        if (elHeaders[i].getBoundingClientRect().top + window.pageYOffset - 200 < scrollTop) {
            headerId = elHeaders[i].id;
            break;
        }
    }
    document.querySelectorAll('.table-of-contents li.active').forEach(el => {
        el.classList.remove('active');
    });
    if (headerId) {
        document.querySelector(`a[href$="#${headerId}"]`).parentElement.classList.add('active');
    }
});

const headers = [];
const indexes = [0];
// функция для получения предыдущего header
const getPrevHeader = (diff = 0) => {
    if ((indexes.length - diff) === 0) {
        return null;
    }
    let header = headers[indexes[0]];
    for (let i = 1, length = indexes.length - diff; i < length; i++) {
        header = header.contains[indexes[i]];
    }
    return header;
}
// функция для добавления item в headers
const addItemToHeaders = (el, diff) => {
    let header = headers;
    if (diff === 0) {
        header = indexes.length > 1 ? getPrevHeader(1).contains : header;
        indexes.length > 1 ? indexes[indexes.length - 1]++ : indexes[0]++;
    } else if (diff > 0) {
        header = getPrevHeader().contains;
        indexes.push(0);
    } else if (diff < 0) {
        const parentHeader = getPrevHeader(Math.abs(diff) + 1);
        for (let i = 0; i < Math.abs(diff); i++) {
            indexes.pop();
        }
        header = parentHeader ? parentHeader.contains : header;
        parentHeader ? indexes[indexes.length - 1]++ : indexes[0]++;
    }
    header.push({ el, contains: [] });
}
// добавим заголовки в headers
document.querySelectorAll('main h1, main h2').forEach((el, index) => {
    if (!el.id) {
        el.id = `id-${index}`;
    }
    if (!index) {
        addItemToHeaders(el);
        return;
    }
    const diff = el.tagName.substring(1) - getPrevHeader().el.tagName.substring(1);
    addItemToHeaders(el, diff);
});
// сформируем оглавление страницы для вставки его на страницу
let html = '';
const createTableOfContents = (items) => {
    html += '<ol class="nav-menu__ol">';

    for (let i = 0, length = items.length; i < length; i++) {
        const url = `${location.href.split('#')[0]}#${items[i].el.id}`;
        html += `<li class="content__list-lvl-1"><a class="nav-menu__item" href="${url}">${items[i].el.textContent}</a>`;

        if (items[i].contains.length) {
            createTableOfContents(items[i].contains);
        }

        html += '</li>';
    }

    html += '</ol>';
}
createTableOfContents(headers);
html = `<section class="anchor-text"><div class="content-title" style="font-weight: bold; margin-left: 15px; margin-bottom: 10px;">СОДЕРЖАНИЕ</div>${html}</section>`;

// вставим оглавление в тег <aside>


window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elHeaders = document.querySelectorAll('main h1, main h2');
    let headerId = '';
    for (let i = elHeaders.length - 1; i >= 0; i--) {
        if (elHeaders[i].getBoundingClientRect().top + window.pageYOffset - 200 < scrollTop) {
            headerId = elHeaders[i].id;
            break;
        }
    }
    document.querySelectorAll('.anchor-text li.active, a.active').forEach(el => {
        el.classList.remove('active');
    });
    if (headerId) {
        document.querySelector(`a[href$="#${headerId}"]`).classList.add('active');
    }


    document.querySelectorAll('main h1, main h2').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
let html2 = "";

const element = document.createElement('div')
element.classList.add('anchor-wrapper')
element.innerHTML = html

let currentView = undefined

function setMobile() {
    const title = document.querySelector('.section__title--first')

    if (currentView !== 'mobile' || currentView === undefined) {
        title.after(element)
        currentView = 'mobile'
    }
}

function setDesktop() {
    const mainWrapper = document.querySelector('.main__wrapper')
    if (currentView !== 'desktop' || currentView === undefined) {
        mainWrapper.prepend(element)
        currentView = 'desktop'
    }
}

function setElemPlace() {
    const isMobile = window.matchMedia('(max-width: 1097px )').matches;
    if (isMobile) setMobile()
    else setDesktop()
}

window.onload = setElemPlace
window.onresize = setElemPlace

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

// ---------Оптимизация встраивания роликов с YouTube (их подгрузка только после нажатия на кнопку play)-----

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

document.querySelectorAll('.to-play').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        let videoID = btn.getAttribute('data-video'),
            playerID = btn.getAttribute('data-id');

        player = new YT.Player(playerID, {
            playerVars: {
                'controls': 1,
                'showinfo': 0,
                'disablekb': 1,
                'rel': 0,
                'playsinline': 1,
            },
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
            }
        });
    });
});

function onPlayerReady(event) {
    let video = event.target.g;
    Array.from(video.parentNode.children).forEach(function (sibling) {
        if (sibling.classList.contains('to-play')) {
            sibling.classList.add('removed');
        }
    });
    event.target.playVideo();
}

// -----------------Закрываем/открываем окно меню при нажатии на пункт меню-----------------
const menuLists = document.querySelectorAll(".header__burger-list");
const windowMenu = document.querySelector('.open');

for (a = 0; a < menuLists.length; a++) {
    menuLists[a].addEventListener("click", function () {
        burgerNav.classList.toggle('open');
        document.querySelector('.body').classList.remove('overflow-none')
        burgerMenu.classList.toggle('active');
    })
}
