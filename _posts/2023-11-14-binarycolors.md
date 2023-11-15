---
toc: true
comments: false
layout: post
title: Colors AND
description: AND Colors together
type: hacks
courses: { compsci: {week: 1} }
---

<html lang="en">
<head>
  <link rel="stylesheet" href="css.css">
</head>
<body>

<style>
  .button-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .button {
    width: 10%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

<div class="button-container">
  <!-- Creating buttons using a loop -->
  <script>
    function buttonClicked(buttonNumber) {
      var button = document.getElementById("button" + buttonNumber);
      if (button.innerHTML === "0") {
        button.innerHTML = "1";
      } else {
        button.innerHTML = "0";
      }
    }

    for (var row = 1; row <= 3; row++) {
      for (var col = 1; col <= 2; col++) {
        for (var i = 1; i <= 8; i++) {
          var buttonNumber = (row - 1) * 8 + (col) * 8 + i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      }
    }
  </script>
</div>

</body>
</html>
