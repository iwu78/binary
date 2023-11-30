var buttonStates = Array(48).fill(0); // Initialize an array to track button states
var asciiMessage = "unerd!"; // 6-character ASCII message
function buttonClicked(buttonNumber) {
  var button = document.querySelector(".button-container button:nth-child(" + buttonNumber + ")");
  if (button.innerHTML === "0") {
    button.innerHTML = "1";
  } else {
    button.innerHTML = "0";
  }
  buttonStates[buttonNumber - 1] = 1;
  checkAllButtonsClicked();
}
function checkAllButtonsClicked() {
  var allClicked = buttonStates.every(function (state) {
    return state == 1;
  });

  if (allClicked) {
    hideMessageInButtons();
  }
}

function hideMessageInButtons() {
  var messageIndex = 0;

  for (var i = 1; i <= 48; i++) {
    var button = document.querySelector(".button-container button:nth-child(" + i + ")");
    button.innerHTML = asciiMessage[messageIndex];
    messageIndex = (messageIndex + 1) % asciiMessage.length;
  }
}