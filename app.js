
const startButton = document.getElementsByClassName('btn__reset');

// create an <h2> below start button to display win or lose message

let overlayPag = document.getElementById('overlay');
const winLose = document.createElement('H2');
overlayPag.appendChild(winLose);


// all the game functions are inside "gioco" function to reset all the variables on game restart

function gioco() {

var phrasesPool = [
    "lemon is yellow",
    "i love starwars movie",
    "my car is white",
    "joda is a jedi master",
    "luke skywalker is a jedi"

];

var letters = [];
var lettersGuessed = [];
var buttonKey = document.getElementById('qwerty');
var letterChoosen;
var guess ;
var lifes = 5;
const ul = document.getElementById('phrase').firstElementChild;
const ol = document.getElementById('scoreboard').firstElementChild;
let overlayPage = document.getElementById('overlay');


// Create a clone of the phrase, qwery and scoreboard divs to restore them on game restart

var sectionPhrase = document.getElementById('phrase');
var sectionPhraseClone = sectionPhrase.cloneNode(true);
var sectionQwerty = document.getElementById('qwerty');
var sectionQwertyClone = sectionQwerty.cloneNode(true);
var sectionScoreboard = document.getElementById('scoreboard');
var sectionScoreboardClone = sectionScoreboard.cloneNode(true);





//get a random sentence and create an array with letters

function getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * 5);
    let randomPhrase = phrasesPool[randomNumber];
    letters = Array.from(randomPhrase);
};

//Create <li> with letters and spaces and give them classes

function createPhrase() {
       for (let i = 0; i < letters.length ; i++){
        
        const li = document.createElement('LI');
        li.textContent = letters[i];
            if (letters[i] === ' '){
            li.className = 'space';
            }
            else{
            li.className = 'letter';
            lettersGuessed.push('x');
            }
        ul.appendChild(li);
       };
};


// start the game

function startGame() {
    overlayPage.style.display = "none";
    getRandomPhrase();
    createPhrase();
};

// restore DOM to a clean version to restart a new game.

function endGame() {
    sectionPhrase.parentNode.replaceChild(sectionPhraseClone, sectionPhrase);
    sectionQwerty.parentNode.replaceChild(sectionQwertyClone, sectionQwerty); 
    sectionScoreboard.parentNode.replaceChild(sectionScoreboardClone, sectionScoreboard);
};


// acquire key click input and compare it with the array of letters

               function chooseAndCompare(e){
                
                            if ((e.target.tagName === 'BUTTON') && (e.target.className !== 'chosen')) {
                                letterChoosen = e.target.textContent;

                                    for (let j = 0; j < letters.length ; j++){
                                        if (letterChoosen === letters[j] ){
                                            ul.getElementsByTagName('LI')[j].className = 'letter show';
                                            lettersGuessed.shift(); 
                                            guess = 'true';
                                        }; 
                                    };


                                     if (guess !== 'true') {
                                                e.target.className ='chosen';
                                                e.target.style.backgroundColor = 'red';
                                                lifes = lifes -1;
                                                ol.getElementsByTagName('LI')[lifes].firstElementChild.src = "images/lostHeart.png";
                                            } else {
                                                e.target.className ='chosen';
                                                guess = ' ';
                                            };
                                
                            };
                        
     // winning condition check

                            if (lifes === 0){
                                overlayPage.className = 'lose';
                                overlayPage.style.display = 'flex';
                                startButton[0].textContent = 'Try again'
                                winLose.textContent = 'YOU LOSE';
                                winLose.className = 'title';
                                startButton[0].addEventListener("click", gioco);
                            endGame();
                            
                            } else if (lettersGuessed.length === 0 ){
                                overlayPage.className= 'win';
                                overlayPage.style.display = 'flex';
                                startButton[0].textContent = 'Play again'
                                winLose.textContent = 'YOU WIN';
                                winLose.className = 'title';
                                startButton[0].addEventListener("click", gioco);
                            endGame();
                            };

            };

startGame();
buttonKey.addEventListener('click',chooseAndCompare);

};

startButton[0].addEventListener("click", gioco);



    

 


