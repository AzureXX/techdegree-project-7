const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const list = phrase.querySelector('ul');
const startGame = document.querySelector('.btn__reset');
const chosen = qwerty.getElementsByClassName('chosen');
const tries = document.querySelectorAll('.tries');
const title = document.querySelector('.title');

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
const letter = document.getElementsByClassName('letter');

function checkLetter(target) {
    var letterClicked = target.textContent.toLowerCase();
    var answer= false
    for(let i = 0; i< letter.length; i++) {
      if(letterClicked == letter[i].textContent) {
        letter[i].classList.add("show");
        answer= true;
      }}
    if (answer) {
      return letterClicked;
    } else {
      return null;
    }
  }

const show = document.getElementsByClassName('show');
function checkWin() {
  if(show.length === letter.length) {
    overlay.className ="win";
    overlay.style.display = "";
    title.textContent = "You win";
    startGame.textContent="Reset";
  }else if(missed >=5) {
    overlay.className ="lose";
    overlay.style.display = "";
    title.textContent = "You lose";
    startGame.textContent="Reset";
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

    if(letterFound == null) {
      missed +=1;
      let heart = tries[tries.length - missed];
      heart.getElementsByTagName("img")[0].src="images/lostHeart.png";
    }

    checkWin();
  }
});

startGame.addEventListener('click', (e) => {
    if (e.target.textContent === 'Reset') {

        missed = 0;

        for (let i = 0; i < tries.length; i++) {
            const img = tries[i].getElementsByTagName('img')[0];
            img.src = 'images/liveHeart.png';
        }

        while (list.children.length > 0) {
            list.removeChild(list.children[0]);
        }

        while (chosen.length > 0) {
            chosen[0].disabled = false;
            chosen[0].classList.remove('chosen');

        }


        overlay.classList.remove('win', 'lose');

        const newPhrase = getRandomPhraseArray(phrases);
        addPhraseToDisplay(newPhrase);
    }
});
