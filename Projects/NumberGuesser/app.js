// UI vars.
const guessInput = document.querySelector('#guess-input');
      message = document.querySelector('.message');
      min = document.querySelector('.min-num');
      max = document.querySelector('.max-num');

// Game values
let minValue = 1;
    maxValue = 10;
    number = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

// Assign UI min and max.
min.textContent = minValue;
max.textContent = maxValue;

document.querySelector('#guess-btn').addEventListener('click', showMessage);


function showMessage(){
    let guess = parseInt(guessInput.value);
    if (guess === number) {
        guessInput.disabled = true;
        message.textContent = 'Your Answer is Correct. You win!';
        message.style.color = 'green';
        guessInput.style.borderColor = 'green';

    } else if (guess <= maxValue & guess > number) {
        message.textContent = 'Your guess is bigger than the right answer.';
        message.style.color = 'red';
        guessInput.style.borderColor = 'red';
        
    } else if (guess >= minValue & guess < number) {
        message.textContent = 'Your guess is smaller than the right answer.';
        message.style.color = 'red';
        guessInput.style.borderColor = 'red';
        
    } else {
        message.textContent =`Please enter a number between ${minValue} and ${maxValue}.`;
        message.style.color = 'yellow';
        guessInput.style.borderColor = 'yellow';
        
    }
}