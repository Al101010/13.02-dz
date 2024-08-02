let arr = document.querySelectorAll('.field');

function intervalGoblin() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList = 'field';
    }

    let random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

    arr[random].classList = 'field field_goblin';
  }
  
  setInterval(intervalGoblin, 5000);