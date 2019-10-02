const maxLength = 140;

const twitterText = document.querySelector("#twitter-text");
const tweetButton = document.querySelector("#tweet-button");
const tweetList = document.querySelector("#tweet-List");
const twitterCounter = document.querySelector("#twitter-Counter");


tweetButton.addEventListener("click", addTwitter);

function addTwitter(event) {
  const newLi = document.createElement("li");
  newLi.textContent = twitterText.value;
  tweetList.appendChild(newLi);
  twitterText.value = "";
}

twitterText.addEventListener('keyup', disabledButton);

twitterText.addEventListener('keyup', changeColor);

function disabledButton(event) {
  const counterValue = (maxLength - twitterText.value.length);
  twitterCounter.textContent = counterValue;
  if (counterValue === maxLength || counterValue < 0) {
    tweetButton.setAttribute('disabled', "");
  } else {
    tweetButton.removeAttribute('disabled');
  }
}

function changeColor() {
  if (twitterText.value.length > 130) {
    twitterCounter.setAttribute('class', 'red');
  } if (twitterText.value.length > 120) {
    twitterCounter.setAttribute('class', 'yellow');
  } else {
    twitterCounter.setAttribute('class', 'blue');
  }
}

