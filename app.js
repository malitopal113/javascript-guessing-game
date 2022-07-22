'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;

}

let check = document.querySelector('.cntrl');
check.addEventListener('click',function(){
    const input = Number(document.querySelector('.guess').value)

    // if no input value 
    if(!input){
        displayMessage('Please enter a number!');

    }
    // Numbers are matched
    else if (input === secretNumber){
        displayMessage('Right Guess :)');
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // if no match
    else if(input !== secretNumber){
        if(score>1){
            displayMessage(input>secretNumber ? 'Very High' : 'Very Low');
            document.querySelector('.label-score').textContent = score;
        }
        else{
            displayMessage('Game Over');
            document.querySelector('.label-score').textContent = 0;
        }

    }



})

let reStart = document.querySelector('.again');
reStart.addEventListener('click',function(){
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    let highScore = 0;
    displayMessage('guessing...');
    document.querySelector('.label-score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})