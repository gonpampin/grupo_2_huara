const slider= document.querySelector('#slider-2');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const botonRight= document.querySelector('#boton-right');
const botontLeft= document.querySelector('#boton-left');


slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider-section'); [0];
    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all 0.5s'
    setTimeout(function(){
        slider.style.transition ='none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%'
    }, 500)
}

function Prev() {
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0'
    slider.style.transition = 'all 0.5s'
    setTimeout(function(){
        slider.style.transition ='none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
    }, 500)
}

botonRight.addEventListener('click', function(){
    Next()
})

botontLeft.addEventListener('click', function(){
    Prev()
})