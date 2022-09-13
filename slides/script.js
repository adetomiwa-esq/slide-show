const bikePics = document.querySelectorAll(".pic")
const rightSlide = document.querySelector(".right")
const leftSlide = document.querySelector(".left")
const base = document.querySelectorAll(".base")
const auto = true;
const slideInterval = 5000;
let autoSlide;

rightSlide.addEventListener("click", (e) => {
    nextSlide()
    clearInterval(autoSlide)
    if(auto) {
        autoSlide = setInterval(nextSlide, slideInterval)
    }
})

leftSlide.addEventListener("click", (e) => {
    prevSlide()
    clearInterval(autoSlide)
    if(auto) {
        autoSlide = setInterval(nextSlide, slideInterval)
    }
})

function nextSlide(){
    const current = document.querySelector(".current")

    const indicator = document.querySelector(".blu")

    current.classList.remove("current")

    indicator.classList.remove("blu")

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current")
    }
    else {bikePics[0].classList.add("current")}

    if (indicator.nextElementSibling){
        indicator.nextElementSibling.classList.add("blu")
    }
    else{base[0].classList.add("blu")}
}

function prevSlide (){
    const current = document.querySelector(".current")

    current.classList.remove("current")

    const indicator = document.querySelector(".blu")

    indicator.classList.remove("blu")

    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add("current")
    }
    else {
        bikePics[bikePics.length - 1].classList.add("current")
    }

    if(indicator.previousElementSibling) {
        indicator.previousElementSibling.classList.add("blu")
    }
    else{
        base[base.length - 1].classList.add("blu")
    }
}

if (auto) {
    autoSlide = setInterval(nextSlide, slideInterval)
}
