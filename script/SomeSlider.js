class SomeSlider {
    currentIndex
    length
    constructor({ startIndex = 0,
        slideSelector,
        barSelector,
        rootSelector,
        width,
        stickArrow,
        isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID = 0,
        currentIndex = 0,
        sliderCount3 = 0,
        dotSelector = '',
        btnSelector = ''
    }) {
        this.sliderCount3 = sliderCount3
        this.startPos = startPos
        this.stickArrow = document.querySelectorAll(stickArrow)
        this.root = document.querySelector(rootSelector)
        this.slides = document.querySelectorAll(slideSelector) /*Выбор всех слайдов*/
        this.bar = document.querySelector(barSelector) 
        this.currentIndex = currentIndex /*номер текущего слайда*/
        this.length = this.slides.length /*кол-во слайдов*/
        this._width = width
        this.animationID = animationID
        this.isDragging = isDragging
        this.currentTranslate = currentTranslate
        this.prevTranslate = prevTranslate

        this.dots = dotSelector ? document.querySelectorAll(dotSelector) : null;
        this.btns = btnSelector ? {
            prev: document.querySelector(btnSelector+'--prev'),
            next: document.querySelector(btnSelector+'--next'),
        } : null;
        if (this.dots) {
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.currentIndex = index;
                    // this.thisSlide3(this.currentIndex);                
                    this.setSlide(index)
                })
            })
        }

        this.numberDots = document.querySelectorAll('.lenta__dots-item')
        this.btnNext2 = document.querySelectorAll(".sl__btn-next-2")
        this.btnNext4 = document.querySelectorAll(".sl__btn-next-4")
        this.sliderSens2 = document.querySelector(".sl__line-3")
        this.slides2 = Array.from(document.querySelectorAll('.sl-img-3'));
        this.bar.style.width = (this.root.offsetWidth * this.length) + 'px'//this.width + 'px'
        var windowOverview = window;
        
        this.slides.forEach(slide => slide.style.width = this.root.offsetWidth + 'px')
        // this.root.style.width = this._width + 'px'
        this.setBarOffset()



        
        
        const touchStart = (index) => {
            return (event) => {
                this.currentIndex = index;
                this.startPos = this.getPositionX(event)
                this.isDragging = true
                this.animationID = requestAnimationFrame(() => this.animation())
                this.sliderSens2.classList.add('grabbing')
            }
        }


        const touchEnd = () => {
            this.isDragging = false
            cancelAnimationFrame(() => this.animation())
            const movedBy = this.currentTranslate - this.prevTranslate

            if (movedBy < -100 && this.currentIndex < this.slides2.length - 1) this.currentIndex += 1

            if (movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1

            this.setPositionByIndex(this.currentIndex)
            this.sliderSens2.classList.remove('grabbing')

        }
        
        const touchMove = (event) => {
            if (this.isDragging) {
                const currentPosition = this.getPositionX(event)
                this.currentTranslate = this.prevTranslate + currentPosition - this.startPos
            }
        }

        this.slides2.forEach((slide2Sens, index) => {
                window.addEventListener('resize', () => {
                    this.setBarOffset()
                    this.resize();
                });
        
            this.slideImage2 = slide2Sens.querySelector('img');
            this.slideImage2.addEventListener('dragstart', (e) => e.preventDefault());

            //касание пальца
            windowOverview.addEventListener('resize', this.resize)
            slide2Sens.addEventListener('touchmove', touchMove);
            slide2Sens.addEventListener('touchend', touchEnd);
            slide2Sens.addEventListener('touchstart', touchStart(index));

        })

    }

    setSlide(index) {
        this.currentIndex = index
        if (this.dots) {
            this.thisSlide3(this.currentIndex);
        }
        if(this.btns){
            if(this.isEnding()){ 
                this.btns.next.classList.add('disabled')
            }
            else{
                this.btns.next.classList.remove('disabled')
            }
            if(this.isBeginning()) {
                this.btns.prev.classList.add('disabled')

            } else {
                this.btns.prev.classList.remove('disabled')
            }
        }

        this.setBarOffset()

    }
    // касание на мобильном слайдере

    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    thisSlide3(index) {
        this?.dots?.forEach((item, index) => {
            if (index === this.currentIndex) {
                item.setAttribute('checked', true)
                item.classList.add('active-dot-3')
            } else {
                item.removeAttribute('checked')
                item.classList.remove('active-dot-3')

            }
            if (item.hasAttribute('checked')) {
                this.dots[index].style.outline = "max(1px, 1px) solid black"
            } else {
                this.dots[index].style.outline = "none"
            }

        }

        )

        this.numberDots.forEach(item => item.classList.remove('dots-number-active'))
        this.numberDots[index].classList.add('dots-number-active')

    }

/*------------------анимация слайдера 3 прокрутки при перелистывании----------------------------*/
    animation = () => {
        this.setSliderPosition()
        if (this.isDragging) requestAnimationFrame(() => this.animation())
    }

    setSliderPosition = () => {
        this.sliderSens2.style.transform = `translate(${this.currentTranslate}px)`
        this.thisSlide3(this.currentIndex)
    }
/*--------------------------------------------------------------------------------------------------*/

    setPositionByIndex = () => {
        this.currentTranslate = this.currentIndex * -this.root.offsetWidth
        this.prevTranslate = this.currentTranslate
        this.resize
    }




    get width() {

        return Array.from(this.slides).reduce((acc, slide) => {
            acc += slide.getBoundingClientRect().width
            return acc
        }, 0)//вычисляешь на основе слайдов, плюсуешь ширину всех слайдов
    }

    resize = () => {
        this.bar.style.width = (this.root.offsetWidth * this.length) + 'px'
        this.slides.forEach(slide => slide.style.width = this.root.offsetWidth + 'px')
        this.setSliderPosition
        this.setPositionByIndex
    }



    next() {
        if (this.isEnding()) return
        this.setSlide(this.currentIndex + 1)
        
    }

    prev() {

        if (this.isBeginning()) return
        this.setSlide(this.currentIndex - 1)
    }

    


    isBeginning() {
        return this.currentIndex === 0
    }

    isEnding() {
        return this.currentIndex === this.length - 1
    }

    get offset() {
        let offset = 0
        for (let i = 0; i < this.currentIndex; ++i) {
            offset += this.slides[i].offsetWidth
        }
        return -offset
    }




    setBarOffset() {
        this.bar.style.transform = `translateX(${this.offset}px)`
    }


    get currentIndex() {
        return this.currentIndex
    }

    
}



// -----------------------------Отработка кнопок слайдеров (стрелки, работа с точкой в центре кнопок и анимации прямых линий)---


const btnsNext2 = document.querySelectorAll(".sl__btn-next-2"),
    btnsPrev2 = document.querySelectorAll(".sl__btn-prev-2")

const circle = document.querySelectorAll(".btn-nxt-circle-1"),
    circle2 = document.querySelectorAll(".btn-nxt-circle-2")

const btnsNext4 = document.querySelectorAll(".sl__btn-next-4"),
    btnsPrev4 = document.querySelectorAll(".sl__btn-prev-4")

const stickPrevSVG2 = document.querySelectorAll(".prev-stick-svg-2"),
    stickPrevSVG4 = document.querySelectorAll(".prev-stick-svg-4")

function addTouchListeners(elements, touchStartHandler, touchEndHandler, mouseOverHandler, mouseOutHandler) {
    elements.forEach((element) => {
        element.addEventListener('touchstart', touchStartHandler);
        element.addEventListener('touchend', touchEndHandler);
        element.addEventListener('mouseover', mouseOverHandler);
        element.addEventListener('mouseout', mouseOutHandler);
    })
}


addTouchListeners(btnsNext2, BtnNext2SelectorAdd, BtnNext2SelectorDelete);
addTouchListeners(btnsPrev2, BtnPrev2SelectorAdd, BtnPrev2SelectorDelete);
addTouchListeners(btnsNext4, BtnNext4SelectorAdd, BtnNext4SelectorDelete);
addTouchListeners(btnsPrev4, BtnPrev4SelectorAdd, BtnPrev4SelectorDelete);


function BtnPrev2SelectorAdd() {
    circle.forEach((item) => item.classList.remove( "circle1-move-right-out", "circle1-move-left-out"))
    circle.forEach((item) => item.classList.add("circle1-move-left"))
    stickPrevSVG2.forEach((item) => item.classList.remove("stick-prev-2", "stick-prev-out-2"))
    stickPrevSVG2.forEach((item) => item.classList.add("stick-prev-2"))
}

function BtnPrev2SelectorDelete() {
    circle.forEach((item) => item.classList.add("circle1-move-left-out"))
    circle.forEach((item) => item.classList.remove("circle1-transition-prev", "circle1-move-left", "circle1-transition-out", "circle1-transition" ))
    stickPrevSVG2.forEach((item) => item.classList.remove("stick-prev-2"))
    stickPrevSVG2.forEach((item) => item.classList.add("stick-prev-out-2"))
}



function BtnNext2SelectorAdd() {
    circle.forEach((item) => item.classList.remove("circle1-transition-out", "circle1-transition", "circle1-transition-prev-out", "circle1-move-right-out", "circle1-move-left-out"))
    circle.forEach((item) => item.classList.add( "circle1-move-right"))
    stickSVG2.forEach((item) => item.classList.remove("stick-next-2", "stick-next-out-2"))
    stickSVG2.forEach((item) => item.classList.add("stick-next-2"))

}

function BtnNext2SelectorDelete() {
    circle.forEach((item) => item.classList.add("circle1-transition-out", "circle1-move-right-out"))
    circle.forEach((item) => item.classList.remove("circle1-transition", "circle1-move-right"))
    stickSVG2.forEach((item) => item.classList.remove("stick-next-2"))
    stickSVG2.forEach((item) => item.classList.add("stick-next-out-2"))
    console.log()
}


function BtnNext4SelectorAdd() {
    circle2.forEach((item) => item.classList.remove("circle1-transition-out", "circle1-transition", "circle1-move-right-out","circle1-transition-prev-out"))
    circle2.forEach((item) => item.classList.add("circle1-move-right"))
    stickSVG4.forEach((item) => item.classList.remove("stick-next-4", "stick-next-out-4"))
    stickSVG4.forEach((item) => item.classList.add("stick-next-4"))
}

function BtnNext4SelectorDelete() {
    circle2.forEach((item) => item.classList.add("circle1-move-right-out"))
    circle2.forEach((item) => item.classList.remove("circle1-transition", "circle1-move-left-out"))
    stickSVG4.forEach((item) => item.classList.remove("stick-next-4"))
    stickSVG4.forEach((item) => item.classList.add("stick-next-out-4"))

}


function BtnPrev4SelectorAdd() {
    circle2.forEach((item) => item.classList.remove("circle1-transition-prev-out", "circle1-move-left", "circle1-move-left-out", "circle1-transition-out", "circle1-transition"))
    circle2.forEach((item) => item.classList.add("circle1-move-left"))
    stickPrevSVG4.forEach((item) => item.classList.remove("stick-prev-4", "stick-prev-out-4"))
    stickPrevSVG4.forEach((item) => item.classList.add("stick-prev-4"))
}

function BtnPrev4SelectorDelete() {
    circle2.forEach((item) => item.classList.add("circle1-transition-prev-out", "circle1-move-left-out"))
    circle2.forEach((item) => item.classList.remove("circle1-transition-prev", "circle1-move-left"))
    stickPrevSVG4.forEach((item) => item.classList.remove("stick-prev-4"))
    stickPrevSVG4.forEach((item) => item.classList.add("stick-prev-out-4"))

}

