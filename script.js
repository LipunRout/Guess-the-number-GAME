let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const messageEl = document.getElementById('message');
const inputEl = document.getElementById('guessInput');
const attemptsEl = document.getElementById('attempts');

function checkGuess() {
  const guess = parseInt(inputEl.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage("Enter a number between 1 and 100!", "orange");
    return;
  }

  attempts++;
  attemptsEl.textContent = attempts;

  if (guess === randomNumber) {
    showMessage(`🎉 Boom! You guessed it right: ${randomNumber}`, "white");
    celebrate();
  } else if (guess < randomNumber) {
    showMessage("📉 Too low! Try a bigger number!", "#ffcc00");
  } else {
    showMessage("📈 Too high! Try a smaller number!", "#ffcc00");
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  inputEl.value = '';
  attemptsEl.textContent = 0;
  showMessage('', '');
  document.body.style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
}

function showMessage(msg, color) {
  messageEl.textContent = msg;
  messageEl.style.color = color;
}

function celebrate() {
  document.body.style.background = 'radial-gradient(circle, #00ff87, #60efff)';
  messageEl.classList.add("bounce-text");
  setTimeout(() => {
    messageEl.classList.remove("bounce-text");
  }, 3000);
}
