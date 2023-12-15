let randomNum=Math.floor(Math.random()*100+1);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHigh");
const startOver=document.querySelector(".result");

const p=document.createElement('p');

let prevGuess=[];
let numGuess=0;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        // console.log(userInput.value);
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a Valid input")
    }
    else if(guess<1){
        // console.log("Enter a number between 1 to 100")
        alert("Enter a number between 1 to 100")
    }
    else if(guess>100){
       alert("Enter a number between 1 to 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuess===9){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess); 
        }
    }
}
 
function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`You guessed it right.`)
        endGame();
    }
    else if(guess<randomNum){
        displayMessage(`Number is too low.`)

    }else{
        displayMessage(`Number is too high.`)

    }
}

function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`
}
function displayGuess(guess){
        userInput.value="";
        guessSlot.innerHTML=`${prevGuess}`;
        numGuess++;
        remaining.innerHTML=`${10-numGuess}`
}
function endGame(){
    userInput.value="";
    submit.setAttribute("disabled","")
    userInput.setAttribute("disabled","");
    p.classList.add('button');
    p.style.cursor="pointer"
    p.style.border="2px solid black"
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(){
        randomNum=Math.floor(Math.random()*100+1);
        prevGuess=[];
        numGuess=0;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
    })
}

