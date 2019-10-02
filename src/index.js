const twitterText = document.querySelector("#twitter-text");
const tweetButton = document.querySelector("#tweet-button");
const tweetList = document.querySelector("#tweet-List")

tweetButton.addEventListener("click", addTwitter);

function addTwitter(event) {
  const newLi = document.createElement("li");
  newLi.textContent = twitterText.value;
  tweetList.appendChild(newLi);
  twitterText.value = "";
}