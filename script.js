const greenSlide = document.querySelector('.slider__item-green')
const blueSlide = document.querySelector('.slider__item-blue')
const yellowSlide = document.querySelector('.slider__item-yellow')
const redSlide = document.querySelector('.slider__item-red')
const items = [ greenSlide, blueSlide, yellowSlide, redSlide ]

const prevBtn = document.querySelector('.btns__prev')
const nextBtn = document.querySelector('.btns__next')

let current

window.onload = () => {
  current = 0
  items[current].classList.add('slider__item-onload')
}

nextBtn.addEventListener('click', () => {
  if (current < items.length - 1) { 
    items[current].classList.remove('slider__item-onload')
    
    items[current].classList.remove('slider__item-active')
    current++ 
    items[current].classList.add('slider__item-active')
  }
})

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    items[current].classList.remove('slider__item-active')
    current-- 
    items[current].classList.add('slider__item-active')
  }
})


