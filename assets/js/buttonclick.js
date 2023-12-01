var buttonStates = Array(48).fill(0);
var asciiMessage = "unerd!";
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

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
}

function hideMessageInButtons() {
  var messageIndex = 0;

  for (var i = 1; i <= 48; i++) {
    binaryMessage = text2Binary(asciiMessage).replace(" ", "")
    var button = document.querySelector(".button-container button:nth-child(" + i + ")");
    button.innerHTML = binaryMessage[messageIndex];
    messageIndex = (messageIndex + 1) % binaryMessage.length;
  }
}