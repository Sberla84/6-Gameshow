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
var letterChoosen;
var score = 0;
var lifes = 5;
const ul = document.getElementById('phrase').firstElementChild;



//get a random sentence and create an array with letters

function getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * 5);
    let randomPhrase = phrasesPool[randomNumber];
    letters = Array.from(randomPhrase);
};

//Create <li> with letters and spaces
function createPhrase() {
       for (let i = 0; i < letters.length ; i++){
        
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
function compare(){

   
    for (let i = 0; i < letters.length ; i++){
            if (letterChoosen === letters[i] ){
                ul.getElementsByTagName('LI')[i].className = 'letter show';
                score--;  
            }
            else {
                lifes--;
            };
    };
};


function chooseAndCompare(e){
    if (e.target.tagName === 'BUTTON') {
        letterChoosen = e.target.textContent;
    };
    compare();
};


buttonKey.addEventListener('click',chooseAndCompare);





//ripete la funzione di gioco finche nn si indovina la frase o si finiscono le vite.


//function playGame(){
  //  do {

    //} 
//};

//playGame();



