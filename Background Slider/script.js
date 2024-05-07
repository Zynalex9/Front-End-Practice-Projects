const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
let activeSlide = 0
setBgToBody()
rightBtn.addEventListener('click',()=>{
    activeSlide++
    if (activeSlide > slides.length - 1)
    {
        activeSlide = 0
    }
    setBgToBody()
    setActive()
})
leftBtn.addEventListener('click',()=>{
    activeSlide--
    if (activeSlide < 0)
    {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActive()
})
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
  }
function setActive()
{
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}