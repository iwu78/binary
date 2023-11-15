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
  .button {
    width: 10%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

<table>
  <tr>
    <td>
    <p>First color</p>
    </td>
    <td>
    <p>Second color</p>
    </td>
  </tr>
  
  <tr>
    <td>
      <!-- Creating buttons for the first cell -->
      <p style="color:red">R</p>
      <script>
        function buttonClicked(buttonNumber) {
          var button = document.getElementById("button" + buttonNumber);
          if (button.innerHTML === "0") {
            button.innerHTML = "1";
          } else {
            button.innerHTML = "0";
          }
        }
        for (var i = 1; i <= 8; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td> 
    <td>
      <!-- Creating buttons for the second cell -->
      <p style="color:red">R</p>
      <script>
        for (var i = 9; i <= 16; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td>
  </tr>

  <tr>
    <td>
      <!-- Creating buttons for the third cell -->
      <p style="color:green">G</p>
      <script>
        for (var i = 17; i <= 24; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td>
    <td>
      <!-- Creating buttons for the fourth cell -->
      <p style="color:green">B</p>
      <script>
        for (var i = 25; i <= 32; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td>
  </tr>

  <tr>
    <td>
      <!-- Creating buttons for the fifth cell -->
      <p style="color:blue">B</p>
      <script>
        for (var i = 33; i <= 40; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td>
    <td>
      <!-- Creating buttons for the sixth cell -->
      <p style="color:blue">B</p>
      <script>
        for (var i = 41; i <= 48; i++) {
          var buttonNumber = i;
          document.write('<button id="button' + buttonNumber + '" class="button" onclick="buttonClicked(' + buttonNumber + ')">0</button>');
        }
      </script>
    </td>
  </tr>
</table>
<script>
  function displayBinaryCombination(resultDiv) {
    var buttons = document.querySelectorAll("#" + resultDiv + " button");
    var binaryCombination = "";
    buttons.forEach(function(button) {
      binaryCombination += button.innerHTML;
    });
    document.getElementById(resultDiv).innerHTML = "Binary Combination: " + binaryCombination;
  }
</script>
</body>
</html>
