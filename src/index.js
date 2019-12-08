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

twitterText.addEventListener('keyup', disabledButton);

function disabledButton() {
  let counterValue = (maxLength - twitterText.value.length);
  twitterCounter.textContent = counterValue;
  if (counterValue === maxLength || counterValue < 0) {
    tweetButton.setAttribute('disabled', "");
  } else {
    tweetButton.removeAttribute('disabled');
  }
}

twitterText.addEventListener('keyup', changeColor);

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