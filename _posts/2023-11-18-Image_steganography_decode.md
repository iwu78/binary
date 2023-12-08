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
</style>
</head>
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
<script src="../../../assets/js/steganographyDecode.js" type="text/javascript"></script>