const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const list = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
const letter = document.querySelectorAll('.letter');
const show = document.querySelectorAll('.show');
//phrases list
const phrases = ["Winter is Coming", "Ours is the Fury", "We Do Not Sow", "Growing Strong", "Fire and Blood"];

//counters
let missed = 0;

//Functions


function getRandomPhraseArray(arr){
    return arr[Math.floor(Math.random() * arr.length)].toLowerCase().split("");
}


function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i++) {
      const li = document.createElement("LI");
      list.appendChild(li);
      li.textContent = arr[i];

      if (arr[i] !== " "){
        li.className = "letter";
      } else {
        li.className = "space";
      }
    }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);


function checkLetter(target) {
    var letterClicked = target.textContent.toLowerCase();

    for(let i = 0; i< letter.length; i++) {
      if(letterClicked == letter[i].textContent) {
        letter[i].classList.add("show");
        return letterClicked;
      } else {
        return null;
    }
  }
}



//events
startGame.addEventListener('click', () => {
  overlay.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.className = 'chosen';
    e.target.disabled = true;
    
    let letterFound = checkLetter(e.target);
  }
});
