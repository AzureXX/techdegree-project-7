const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.getElementsByClassName('btn__reset')[0];
let phrases = ["winter is coming", "ours is the fury", "we do not sow", "growing strong", "fire and blood"]


startGame.addEventListener('click', () => {
  document.getElementById('overlay').style.display = "none";
});

function getRandomPhraseArray(arr){
    const index = Math.floor(Math.random() * arr.length);
    letterList = arr[index].split("");
    return letterList;
};


function addPhraseToDisplay(arr){
    let list = document.querySelector('#phrase ul');

    for(let i = 0; i < arr.length; i++) {
      var li = document.createElement("LI");
      var t = document.createTextNode(arr[i]);
      li.appendChild(t);
      var listItem = list.appendChild(li);

      if (arr[i] === " "){
        listItem.className = "space"
      } else {
        listItem.className = "letter"
      }
    }
    return listItem;
};

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(target) {
    var letter = document.querySelectorAll(".letter");
    for(let i = 0; i< letter.length; i++) {
      if(target == letter[i]) {
        letter[i].className = "show";
      } else {
        return null;
    }
  }
};

qwerty.addEventListener("click", (event) =>{
  var target = event.target.innerHTML;
  checkLetter(target);
});


// qwerty.addEventListener("click", (event) => {
//   var listItem = document.querySelectorAll(".letter");
//   var letter = event.target.innerHTML;
//     for(let i = 0; i< listItem.length; i++) {
//       if(letter === listItem[i] ) {
//         listItem[i].className = "show";
//       } else {
//         return null;
//     }
// }});
