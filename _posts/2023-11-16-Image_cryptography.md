---
toc: true
comments: false
layout: post
title: Image encryption
description: Encrypt Images together
type: hacks
courses: { compsci: {week: 1} }
postimage: '/images/image-encrypt.jpg'
---

<head>
<style>
input[type="file"] {
    display: none;
}
  .container1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 130vh;
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
      transform: translateY(130vh) scale(0);
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
</head><h1><strong>Upload Image:</strong></h1>
<h3>Image:</h3>
<br>
<label for="imageInput" class="button-54">
    Choose File
</label>
<input type="file" id="imageInput" accept="image/*">
<br><br>
<button id="andButton" class='button-54 task-button'>Go!</button>
<br><br><br><br>
<label for='seed'>Enter Key: </label>
<input type='text' class='button-54' id='seed'>
<div id='resultDiv'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
<script src="../../../assets/js/cryptography.js" type="text/javascript"></script>

<h3>So how does it work?</h3>
<p>This tool works similar to our image XOR, but instead it generates a random key from a random number generator, and seeds it using the entered key. This way, the entered key generates the same key every time, and the XOR ensures that the ciphered image is significantly different. On top of this, XOR is reversible and the same tool works for both encryption and decryption.</p>