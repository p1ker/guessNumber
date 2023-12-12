'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let bestResult = 0;

const displayGuessMessage = function(message){
    document.querySelector('.guess-message').textContent = message;
}

document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function(){
    const quessingNumber = Number(document.querySelector('.number-input').value);
    console.log( quessingNumber, typeof quessingNumber);

    //No input
    if (!quessingNumber){
        // document.querySelector('.guess-message').textContent = 'Введите число!';
        displayGuessMessage('Введите число!');
    //Player win
    }else if (quessingNumber === secretNumber){
        // document.querySelector('.guess-message').textContent = 'Правильно!!!';
        displayGuessMessage('Правильно!!!');
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        if (score > bestResult){
            bestResult = score;
            document.querySelector('.highscore').textContent = bestResult;
        }
    } else if (quessingNumber !== secretNumber && score > 1){
        // document.querySelector('.guess-message').textContent = quessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало';
        displayGuessMessage(quessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало');
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.guess-message').textContent = 'Вы проиграли';
        score--;
        document.querySelector('.score').textContent = score;
    }
    }
);

//Button 'Сначала'

document.querySelector('.again').addEventListener('click', function (){
    secretNumber = Math.ceil(Math.random() * 20);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.question').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').textContent = '??';
    document.querySelector('.number-input').value = false;
    // document.querySelector('.guess-message').textContent = 'Начни угадывать!';
    displayGuessMessage('Начни угадывать!');
});