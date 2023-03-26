const items = document.getElementsByTagName('h3');
for (const item of items) {
    item.style.color = 'lightblue';
}
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
    card.style.border = '0px';
}

function clickMe(){
    console.log('button clicked');
}