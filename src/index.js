const maxLength = 140;

const twitterText = document.querySelector("#twitter-text");
const tweetButton = document.querySelector("#tweet-button");
const tweetList = document.querySelector("#tweet-List");
const twitterCounter = document.querySelector("#twitter-Counter");

tweetButton.addEventListener("click", addTwitter);

function addTwitter() {
  const newLi = document.createElement("li");
  newLi.textContent = twitterText.value;
  tweetList.appendChild(newLi);
  twitterText.value = "";
}

twitterText.addEventListener('keypress', disabledButton);

function disabledButton() {
  let counterValue = (maxLength - twitterText.value.length);
  twitterCounter.textContent = counterValue;
  if (counterValue === maxLength || counterValue < 0) {
    tweetButton.setAttribute('disabled', "");
  } else {
    tweetButton.removeAttribute('disabled');
  }
}

twitterText.addEventListener('keypress', changeColor);

function changeColor() {
  const twitterLenght = twitterText.value.length;
  if (twitterLenght > 130) {
    twitterCounter.setAttribute('class', 'red');
  } else if (twitterLenght > 120) {
    twitterCounter.setAttribute('class', 'orange');
  } else {
    twitterCounter.setAttribute('class', 'blue');
  }
}

twitterText.addEventListener('keypress', changeLines);

function changeLines (){
  const textLines = twitterText.value.split('\n');
  let linesCount = textLines.reduce((acum, line) => 
    acum + Math.max(Math.ceil(line.length / 50), 1), 0
  );
  twitterText.setAttribute('rows', linesCount);
}