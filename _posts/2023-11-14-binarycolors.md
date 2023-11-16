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
    <p id="num1">0</p>
    <p id="num2">0</p>
    <p id="num3">0</p>
    </td>
    <td>
    <p>Second color</p>
    <p id="num4">0</p>
    <p id="num5">0</p>
    <p id="num6">0</p>
    </td>
  </tr>
  
  <tr>
    <td>
      <!-- Creating buttons for the first cell -->
      <p style="color:red">R</p>
  <button id="button1" class="button" onclick="buttonClicked(1)">0</button>
  <button id="button2" class="button" onclick="buttonClicked(2)">0</button>
  <button id="button3" class="button" onclick="buttonClicked(3)">0</button>
  <button id="button4" class="button" onclick="buttonClicked(4)">0</button>
  <button id="button5" class="button" onclick="buttonClicked(5)">0</button>
  <button id="button6" class="button" onclick="buttonClicked(6)">0</button>
  <button id="button7" class="button" onclick="buttonClicked(7)">0</button>
  <button id="button8" class="button" onclick="buttonClicked(8)">0</button>
      <script>
        function buttonClicked(buttonNumber) {
          var button = document.getElementById("button" + buttonNumber);
          if (button.innerHTML === "0") {
            button.innerHTML = "1";
            var val = document.getElementById("num"+Math.floor((buttonNumber-1)/8)+1);
            val.innerHTML = parseInt(var.innerHTML) + 
          } else {
            button.innerHTML = "0";
          }
<<<<<<< HEAD

=======
>>>>>>> 96cc60e5bcec96000f58e805af45063d756a5626
        }
      </script>
    </td>
    <td>
      <!-- Creating buttons for the second cell -->
      <p style="color:red">R</p>
      <button id="button9" class="button" onclick="buttonClicked(9)">0</button>
  <button id="button10" class="button" onclick="buttonClicked(10)">0</button>
  <button id="button11" class="button" onclick="buttonClicked(11)">0</button>
  <button id="button12" class="button" onclick="buttonClicked(12)">0</button>
  <button id="button13" class="button" onclick="buttonClicked(13)">0</button>
  <button id="button14" class="button" onclick="buttonClicked(14)">0</button>
  <button id="button15" class="button" onclick="buttonClicked(15)">0</button>
  <button id="button16" class="button" onclick="buttonClicked(16)">0</button>
    </td>
  </tr>

  <tr>
    <td>
      <!-- Creating buttons for the third cell -->
      <p style="color:green">G</p>
      <button id="button17" class="button" onclick="buttonClicked(17)">0</button>
  <button id="button18" class="button" onclick="buttonClicked(18)">0</button>
  <button id="button19" class="button" onclick="buttonClicked(19)">0</button>
  <button id="button20" class="button" onclick="buttonClicked(20)">0</button>
  <button id="button21" class="button" onclick="buttonClicked(21)">0</button>
  <button id="button22" class="button" onclick="buttonClicked(22)">0</button>
  <button id="button23" class="button" onclick="buttonClicked(23)">0</button>
  <button id="button24" class="button" onclick="buttonClicked(24)">0</button>
    </td>
    <td>
      <!-- Creating buttons for the fourth cell -->
      <p style="color:green">B</p>
      <button id="button25" class="button" onclick="buttonClicked(25)">0</button>
  <button id="button26" class="button" onclick="buttonClicked(26)">0</button>
  <button id="button27" class="button" onclick="buttonClicked(27)">0</button>
  <button id="button28" class="button" onclick="buttonClicked(28)">0</button>
  <button id="button29" class="button" onclick="buttonClicked(29)">0</button>
  <button id="button30" class="button" onclick="buttonClicked(30)">0</button>
  <button id="button31" class="button" onclick="buttonClicked(31)">0</button>
  <button id="button32" class="button" onclick="buttonClicked(32)">0</button>
    </td>
  </tr>

  <tr>
    <td>
      <!-- Creating buttons for the fifth cell -->
      <p style="color:blue">B</p>
      <button id="button33" class="button" onclick="buttonClicked(33))">0</button>
  <button id="button34" class="button" onclick="buttonClicked(34)">0</button>
  <button id="button35" class="button" onclick="buttonClicked(35)">0</button>
  <button id="button36" class="button" onclick="buttonClicked(36)">0</button>
  <button id="button37" class="button" onclick="buttonClicked(37)">0</button>
  <button id="button38" class="button" onclick="buttonClicked(38)">0</button>
  <button id="button39" class="button" onclick="buttonClicked(39)">0</button>
  <button id="button40" class="button" onclick="buttonClicked(40)">0</button>
    </td>
    <td>
      <!-- Creating buttons for the sixth cell -->
      <p style="color:blue">B</p>
      <button id="button41" class="button" onclick="buttonClicked(41)">0</button>
  <button id="button42" class="button" onclick="buttonClicked(42)">0</button>
  <button id="button43" class="button" onclick="buttonClicked(43)">0</button>
  <button id="button44" class="button" onclick="buttonClicked(44)">0</button>
  <button id="button45" class="button" onclick="buttonClicked(45)">0</button>
  <button id="button46" class="button" onclick="buttonClicked(46)">0</button>
  <button id="button47" class="button" onclick="buttonClicked(47)">0</button>
  <button id="button48" class="button" onclick="buttonClicked(48)">0</button>
    </td>
  </tr>
</table>
</body>
</html>
