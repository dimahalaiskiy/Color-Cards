import { colors } from "./colors.js";






const allCardsEl = document.querySelector('.cards')
const body = document.querySelector('body')



const colorsCards = colors.map(( {rgb, hex} ) => 

` <ul class="card-item">
    <li class="cards_bcg-color" data-color="${hex}" style="background-color: ${hex}"></li> 
    <span class="cards-text">HEX: ${hex}<br> RGB: ${rgb}</span>
</ul> `
).join('');

allCardsEl.insertAdjacentHTML('afterbegin', colorsCards)


function cardHandler (e) {

    const isColorBgEl = e.target.classList.contains('cards_bcg-color')

    if(!isColorBgEl) {
        return
    }

    currentActiveCard()

    const bgEl = e.target.parentNode;
    const parendCard = bgEl.closest('.card-item')
    console.log(parendCard)
    parendCard.classList.add('is-active')


    const currentColor = e.target.dataset.color
    body.style.backgroundColor = currentColor
}

function currentActiveCard () {
    const currentActiveCard = document.querySelector('.card-item.is-active')
    if(currentActiveCard) {
        currentActiveCard.classList.remove('is-active')
    }
}

allCardsEl.addEventListener('click', cardHandler)
