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

twitterText.addEventListener('keyup', changeCounter);

function changeCounter(event) {
  const counterValue = (maxLength - twitterText.value.length);
  twitterCounter.textContent = counterValue;
  if (counterValue ===maxLength) {
    tweetButton.setAttribute('disabled', "");
  } else {
    tweetButton.removeAttribute('disabled');
  }

}