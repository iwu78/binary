---
toc: true
comments: false
layout: post
title: Image Steganography Decoder
description: Reveal an image inside another!
type: hacks
courses: { compsci: {week: 1} }
postimage: 'images/steg-decode.jpg'
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
    height: 120vh;
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
      transform: translateY(120vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
</style>
</head>
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
<h1><strong>Upload Images:</strong></h1>
<h3>Image:</h3>
<br>
<label for="imageInput" class="button-54">
    Choose File
</label>
<input type="file" id="imageInput" accept="image/*">
<br><br><br><br>
<button id="andButton" class='button-54 task-button'>Get Hidden Image!</button>
<div id='resultDiv'></div>

<h3>So how does it work?</h3>
<p>Steganography is hiding data inside an image without it being obvious. This is most often done by Least Significant Bit encryption, which hides data inside the least significant bit of each RGB pixel value in an image. In this, we take an image and encode its data inside the two least significant bits of another image. This tool encodes an image inside another image using the two least significant bits!</p>
<script src="../../../assets/js/steganographyDecode.js" type="text/javascript"></script>