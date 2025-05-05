const testWord = document.getElementById('test-word');

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'cyan', 'magenta', 'black'];

testWord.addEventListener('click', () => {
  // Pick a random color different from current
  let currentColor = testWord.style.color;
  let newColor;
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === currentColor);
  testWord.style.color = newColor;
});