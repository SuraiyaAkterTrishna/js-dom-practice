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

/* const buttons = document.getElementsByClassName('buy-now-btn');
for (const button of buttons) {
    button.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
} */

const confirmSubmit = document.getElementById('confirm-submit');
confirmSubmit.addEventListener('keyup', function(event){
    let confirmText = event.target.value;
    if(confirmText === 'email'){
        let submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = false;
        submitBtn.addEventListener('click', function(){
            console.log('Email submitted');
        })
    }
})
