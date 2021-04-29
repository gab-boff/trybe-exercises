const myDiv = document.getElementById('my-div');
const myButton = document.getElementById('my-button');

let clickCount = 0;

myButton.addEventListener('click', () => {
  clickCount += 1;
  myDiv.innerHTML = clickCount;
});
