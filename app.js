var phrasesPool = [
    "frase one",
    "frase twoo",
    "frase three",
    "frase four",
    "frase five"

];

const startButton = document.getElementsByClassName('btn__reset');
var letters = [];
var buttonKey = document.getElementById('qwerty');
var buttonPressed;
var letterChoosen;
var score = 0;




//get a random sentence and create an array with letters

function getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * 5);
    let randomPhrase = phrasesPool[randomNumber];
    letters = Array.from(randomPhrase);
};

//Create <li> with letters and spaces
function createPhrase() {
       for (let i = 0; i < letters.length ; i++){
        const ul = document.getElementById('phrase').firstElementChild;
        const li = document.createElement('LI');
        li.textContent = letters[i];
        if (letters[i] === ' '){
            li.className = 'space';
        }
        else{
            li.className = 'letter';
            score++; 
        }
        ul.appendChild(li);
       };
    };




// start the game

function startGame() {
    let overlayPage = document.getElementById('overlay');
    overlayPage.style.display = "none";
    getRandomPhrase();
    createPhrase();
};

startButton[0].addEventListener("click", startGame,);

// GAME FUNCTION



function playGame(e){
    if (e.target.tagName === 'BUTTON') {
        let query = e.target.textContent;
        console.log(query);
    }
};



buttonKey.addEventListener('click',playGame);




