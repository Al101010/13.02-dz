
function createDiv() {
    let bodyDiv = document.createElement('div');
    bodyDiv.classList = 'field-game';
    document.querySelector('body').append(bodyDiv);

    for (var i=0; i < 16; i++) {
        let divField = document.createElement('div');
        divField.classList = 'field';
        document.querySelector('.field-game').append(divField);
    } 
}

createDiv();


let arr = document.querySelectorAll('.field');

function intervalGoblin() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList = 'field';
    }

    let random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

    arr[random].classList = 'field field_goblin';
  }
  
setInterval(intervalGoblin, 5000);