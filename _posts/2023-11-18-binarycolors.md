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
  .colorBox {
    width: 200px;
    height: 200px;
    margin: 10px;
    display: inline-block;
  }
    .container1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 190vh;
    overflow: hidden;
  }
  .bubbles {
    position: relative;
    display: flex;
    z-index: -100;
  }
  .bubbles span {
    position: relative;
    height: 30px;
    width: 30px;
    background: #4fc3dc;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 10px #4fc3dc60, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
    animation: animate 15s linear infinite;
    animation-duration: calc(75s / var(--i));
  }
  .bubbles span:nth-child(even) {
    background: #80ff00;
    box-shadow: 0 0 10px #80ff0060, 0 0 50px #80ff00, 0 0 100px #80ff00;
  }
  @keyframes animate {
    0% {
      transform: translateY(190vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
</style>
<div class="container1">
<div class='bubbles'>
<span style="--i:11;"></span>
<span style="--i:24;"></span>
<span style="--i:20;"></span>
<span style="--i:10;"></span>
<span style="--i:14;"></span>
<span style="--i:23;"></span>
<span style="--i:18;"></span>
<span style="--i:21;"></span>
<span style="--i:12;"></span>
<span style="--i:17;"></span>
<span style="--i:19;"></span>
<span style="--i:10;"></span>
<span style="--i:22;"></span>
<span style="--i:15;"></span>
<span style="--i:25;"></span>
<span style="--i:14;"></span>
<span style="--i:11;"></span>
<span style="--i:18;"></span>
<span style="--i:26;"></span>
<span style="--i:22;"></span>
<span style="--i:16;"></span>
<span style="--i:18;"></span>
<span style="--i:11;"></span>
<span style="--i:25;"></span>
<span style="--i:13;"></span>
<span style="--i:19;"></span>
<span style="--i:18;"></span>
<span style="--i:21;"></span>
<span style="--i:18;"></span>
<span style="--i:11;"></span>
<span style="--i:16;"></span>
<span style="--i:19;"></span>
<span style="--i:24;"></span>
<span style="--i:9;"></span>
<span style="--i:12;"></span>
<span style="--i:14;"></span>
<span style="--i:23;"></span>
<span style="--i:19;"></span>
<span style="--i:11;"></span>
<span style="--i:26;"></span>
</div>
</div>
<div class="colorBox" id="colorBox1"></div>
<div class="colorBox" id="colorBox2"></div>
<div class="colorBox" id="colorBox3"></div>
<p>‍‍‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍First color ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍Second color ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ANDed color!</p> 
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
      <h2 style="color:red">R</h2>
      <p id="num1">0</p>
  <button id="button1" class="button" onclick="buttonClicked(1)">0</button>
  <button id="button2" class="button" onclick="buttonClicked(2)">0</button>
  <button id="button3" class="button" onclick="buttonClicked(3)">0</button>
  <button id="button4" class="button" onclick="buttonClicked(4)">0</button>
  <button id="button5" class="button" onclick="buttonClicked(5)">0</button>
  <button id="button6" class="button" onclick="buttonClicked(6)">0</button>
  <button id="button7" class="button" onclick="buttonClicked(7)">0</button>
  <button id="button8" class="button" onclick="buttonClicked(8)">0</button>
    </td>
    <td>
      <!-- Creating buttons for the second cell -->
      <h2 style="color:red">R</h2>
      <p id="num2">0</p>
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
      <h2 style="color:green">G</h2>
      <p id="num3">0</p>
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
      <h2 style="color:green">G</h2>
      <p id="num4">0</p>
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
      <h2 style="color:blue">B</h2>
      <p id="num5">0</p>
      <button id="button33" class="button" onclick="buttonClicked(33)">0</button>
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
      <h2 style="color:blue">B</h2>
      <p id="num6">0</p>
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
<script>
        function buttonClicked(buttonNumber) { // update the num#s 
          var button = document.getElementById("button" + buttonNumber); // get the button that was clicked (numbered 1-48)
          if (button.innerHTML === "0") {
            button.innerHTML = "1";
            var val = document.getElementById("num"+String(Math.floor((buttonNumber-1)/8)+1)); // update the decimal number that the 8-bit binary is representing
            val.innerHTML = String(parseInt(val.innerHTML) + Math.floor(2**((((8-buttonNumber)%8)+8)%8))); // worked out calculations for changing from 0 to 1 (add that power of 2)
          } else {
            button.innerHTML = "0";
            var val = document.getElementById("num"+String(Math.floor((buttonNumber-1)/8)+1));
            val.innerHTML = String(parseInt(val.innerHTML) - Math.floor(2**((((8-buttonNumber)%8)+8)%8))); // change from 1 to 0 (subtract power of 2)
          }
          updateColor(); // call to update box colors every time a button is clicked
        }
        function updateColor() { // changing the color of the boxes by grabbing the decimal RGB num#s and updating the boxes accordingly
          var r1 = parseInt(document.getElementById("num1").innerHTML);
          var g1 = parseInt(document.getElementById("num3").innerHTML);
          var b1 = parseInt(document.getElementById("num5").innerHTML);
          var r2 = parseInt(document.getElementById("num2").innerHTML);
          var g2 = parseInt(document.getElementById("num4").innerHTML);
          var b2 = parseInt(document.getElementById("num6").innerHTML);
          var colorBox1 = document.getElementById("colorBox1");
          colorBox1.style.backgroundColor = "rgb("+r1+","+g1+","+b1+")";
          var colorBox2 = document.getElementById("colorBox2");
          colorBox2.style.backgroundColor = "rgb("+r2+","+g2+","+b2+")";
          var colorBox3 = document.getElementById("colorBox3");
          var r3 = r1 & r2; // crucial AND step for the two decimal R values
          var g3 = g1 & g2; // same for G values
          var b3 = b1 & b2; // for B values
          colorBox3.style.backgroundColor = "rgb("+r3+","+g3+","+b3+")"; // lastly update the ANDed box's color
        }
        updateColor(); // initialize box colors as black first rgb(0,0,0)
</script>
</html>

<h3>So how does it work?</h3>
<p>This is our Colors AND project which takes two colors and &'s them. Each of the two colors are created through there very own RGB values with each R, G, and B value being an 8-bit binary number. For each of these RGB values, we convert the binary number into a decimal number which is then interpreted by the code as a shade of red, green, or blue. These three shades form up each of the colors. Finally by creating another set of RGB values for the final &'ed color, with each R,G, and B value being an & of the another corresponding values, we were able to display the &'ed color</p>