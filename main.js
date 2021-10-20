import { colors } from "./colors.js";



// Elements 
const allCardsEl = document.querySelector('.cards')
const body = document.querySelector('body')



const colorsCards = colors.map(( {rgb, hex} ) => 

` <ul class="card-item">
    <li class="cards_bcg-color" data-color="${hex}" style="background-color: ${hex}"></li> 
    <span class="cards-text">HEX: ${hex}<br> RGB: ${rgb}</span>
</ul> `
).join('');

allCardsEl.insertAdjacentHTML('afterbegin', colorsCards)





function currentCard () {
    
    const cardHandler = (e) => {

        const isColorBgEl = e.target.classList.contains('cards_bcg-color')

        if(!isColorBgEl) {
            return
        }

        const currentActiveCard = document.querySelector('.card-item.is-active')

        if(currentActiveCard) {
            currentActiveCard.classList.remove('is-active')
        }

        const bgEl = e.target.parentNode;
        const parendCard = bgEl.closest('.card-item')

        parendCard.classList.add('is-active')

        const currentColor = e.target.dataset.color
        body.style.backgroundColor = currentColor


        
    }
        



    allCardsEl.addEventListener('click', cardHandler)
}





currentCard()